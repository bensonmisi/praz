<?php

namespace App\Http\Controllers\bidders;

use App\accounttype;
use App\banktransactions;
use App\capture_receipts;
use App\category;
use App\company;
use App\company_contacts;
use App\company_documents;
use App\currency;
use App\documents;
use App\Http\Controllers\Controller;
use App\online_invoice;
use App\receipt;
use App\regyear;
use App\rtgs;
use App\supplier;
use App\tender_invoice;
use App\transfers;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use paymentHelper;
use serviceHelper;

class dashboardController extends Controller
{
    public function index(){
        $company = Auth::user()->company;
        $category = category::wherestatus('CREATED')->get();
        $registrations = supplier::where(['company_id'=>$company->id])
                                  ->where('expire_year','>=',Carbon::now()->year)
                                  ->with('category.notices')->get();
         $invoice= online_invoice::with('currency','category','receipts')
         ->wherecompany_id(Auth::user()->company->id)
         ->wherestatus('PENDING')
          ->get();
         $awaiting= online_invoice::with('transfers.transaction')
                                  ->where(['company_id'=>Auth::user()->company->id,'status'=>'AWAITING'])
                                  ->get();
         $years = regyear::where('year','>=',Carbon::now()->year)->get();
         $tenderinvoice = tender_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->first();
         $documents = documents::where(['locality'=>$company->locality,'accounttype_id'=>$company->accounttype_id])->with(['company'=>function($query){
           $query->wherecompany_id(Auth::user()->company->id);
         }])->get();
         $contacts  = company_contacts::wherecompany_id($company->id)->first();
         $types = accounttype::get();
         $currency = currency::get();
         if(strtoupper(Auth::user()->company->country) !='ZIMBABWE'){
             $currency = currency::whereid(1)->get();   
         }
         return response()->json(["registrations"=>$registrations,"category"=>$category,"invoice"=>$invoice,"tenderinvoice"=>$tenderinvoice,"documents"=>$documents,"contacts"=>$contacts,'company'=>$company,'types'=>$types,'awaiting'=>$awaiting,'years'=>$years,'currency'=>$currency],200);
        
    }

    public function upload(Request $request){
       $request->validate(['document'=>'required','filename'=>'required']) ;
       $company = Auth::user()->company;
       $path =$request->file('filename')->store('documents','my_files');
        company_documents::updateOrCreate(['document_id'=>$request->document,'company_id'=>$company->id],['document_id'=>$request->document,'company_id'=>$company->id,'path'=>$path]);
        return response()->json(['success'],200);
    }

    public function update(Request $request){
        $request->validate(['city'=>'required',
                            'country'=>'required',
                            'accounttype'=>'required',
                            'email'=>'required',
                            'phone'=>'required',
                            'address'=>'required'
                            ]);
      $locality = 'local';
      if(strtoupper($request->country) !='ZIMBABWE'){
            $locality ="foreign";
      }
      $type = accounttype::wherename($request->accounttype)->first();
        $company = company::whereid(Auth::user()->company->id)->first();
        $company->city = $request->city;
        $company->country = $request->country;
        $company->accounttype_id = $type->id;
        $company->locality = $locality;
        $company->save();
        company_contacts::updateOrCreate(['company_id'=>Auth::user()->company->id],['company_id'=>Auth::user()->company->id,'phones'=>$request->phone,'emails'=>$request->email,'address'=>$request->address]);
        $registrations = supplier::where(['company_id'=>$company->id])
                                  ->where('expire_year','>=',Carbon::now()->year)
                                  ->with('category.notices')->get();
                                  $documents = documents::where(['locality'=>$company->locality,'accounttype_id'=>$company->accounttype_id])->with(['company'=>function($query){
                                    $query->wherecompany_id(Auth::user()->company->id);
                                  }])->get();
           return response()->json(["registrations"=>$registrations,'documents'=>$documents]);

    }

    public function claimReceipt(Request $request){
      $request->validate(['receiptnumber'=>'required']);
      $claim = capture_receipts::with('categories')->where(['receiptnumber'=>$request->receiptnumber])->first();
      if(!is_null($claim)){
              if($claim->status == 'PENDING')
              {
            if(!is_null($claim->category))
            {
            return response()->json(['category'=>$claim->categories],200);
          }
          else{
            return response()->json(['message'=>'Receipt Number Not found'],500);
          }
        }else{
          return response()->json(['message'=>'Receipt Numbe Already Claimed'],500); 
        }
    }else{
      return response()->json(['message'=>'Receipt Number Not found'],500);
    }
  }

  public function confirmReceipt(Request $request){    
    $request->validate(['receiptnumber'=>'required']);
    $claim = capture_receipts::with('categories')->where(['receiptnumber'=>$request->receiptnumber])->first();
    if(!is_null($claim)){
            if($claim->status == 'PENDING')
            {
          if(!is_null($claim->category))
          {
             return $this->claim($claim);
           }
        else{
          return response()->json(['message'=>'Receipt Number Not found'],500);
        }
      }else{
        return response()->json(['message'=>'Receipt Numbe Already Claimed'],500); 
      }
  }else{
    return response()->json(['message'=>'Receipt Number Not found'],500);
  }
}

public function verify($id){
  $transfer = transfers::whereid($id)->first();
  
  if(!is_null($transfer))
  {
  $bank = banktransactions::wheresource_reference($transfer->referencenumber)->first();
   if(!is_null($bank))
   {
      if($bank->status =='PENDING'){
        $online = online_invoice::whereinvoice_number($transfer->invoicenumber)->get();
        $total_invoice = $online->sum('cost') ;
        $total_receipted = receipt::whereinvoicenumber($transfer->invoicenumber)->sum('amount');
        if($total_invoice > $total_receipted){
          $paymentHelper = new paymentHelper();
          $service = new serviceHelper(); 

          $receiptnumber = $paymentHelper->receipt_number();
           $status ="PENDING";
           $doc_status ="PENDING";
          if(($total_receipted+(int)$bank->amount) >= $total_invoice)
          {
             $status = "PAID";
             $check_docs = $service->helper_checkDocuments();
             if($check_docs){
              $doc_status = 'APPROVED';
             }

          }
      
          receipt::create(['invoicenumber'=>$transfer->invoicenumber,'receiptnumber'=>$receiptnumber,'source_id'=>$bank->id,'company_id'=>Auth::user()->company->id,'method'=>'internal','currency'=>$bank->currency,'amount'=>(int)$bank->amount,'user_id'=>Auth::user()->id]);
          $bank->status="CLAIMED";
          $bank->customer_number = Auth::user()->company->regnumber;
          $bank->save();
          rtgs::whereinvoice_number($transfer->invoicenumber)->update(['status'=>'APPROVED','paymentdate'=>$bank->trans_date,'refnumber'=>$bank->source_reference,'transdate'=>$bank->trans_date,'amount'=>$bank->amount]);
          $balance = $total_invoice-($total_receipted+(int)$bank->amount);
        
          if($balance<=0)
          {
            foreach ($online as $inv) {
              if(!supplier::where(['company_id'=>Auth::user()->company->id,'category_id'=>$inv->category_id,'expire_year'=>$inv->year])->exists())
              {
               $code = $service->helper_generate_code($inv->id);
                supplier::create(['company_id'=>Auth::user()->company->id,'category_id'=>$inv->category_id,'expire_year'=>$inv->year,'status'=>$doc_status,'code'=>$code]);
                  /**
                   * update each invoice  entry to paid
                   */
                  
                  $inv->status ='PAID';
                  $inv->save();
              }
            } 
            return response()->json(['message'=>'Registration was successfully Complete Please while we update your dashboard','status'=>'PAID'],200);
   
          }
          else
          {
            return response()->json(['message'=>'Transfer of :'.$bank->amount.' was found and receipted.  OUTSTANDING INVOICE BALANCE :'.$balance,'status'=>'PAID'],200);
   
          }
          }else{
          return response()->json(['message'=>'INVOICE ALREADY SETTLED','status'=>'SETTLED'],200);
        }

      }else{
        return response()->json(['message'=>'Reference number Claimed','status'=>'CLAIMED'],200);
      }
   }
   else
   {
    return response()->json(['message'=>'Reference number not found','status'=>'NOT_FOUND'],200);
   }
  }else{
    return response()->json(['message'=>'Entry not found'],500);
  }
}

public function updateref(Request $request){
  $request->validate(['referencenumber'=>'required']);
   $transfer = transfers::whereid($request->id)->first();
   $transfer->referencenumber = $request->referencenumber;
   $transfer->save();
   $awaiting= online_invoice::with('transfers.transaction')->where(['company_id'=>Auth::user()->company->id,'status'=>'AWAITING'])->with('category')->get();
     
   return response()->json(['message'=>'success','awaiting'=>$awaiting],200);

}

function claim($receipt){
   
  $check=  $this->check_company(Auth::User()->company->name,$receipt->company);
  $servicehelper = new serviceHelper();
  if($check)
  {
      supplier::create(['company_id'=>Auth::User()->company->id,'category_id'=>$receipt->categories->id,'expire_year'=>'2020','status'=>'APPROVED','code'=>$servicehelper->helper_generate_code(Auth::User()->company->id)]);
       $receipt->status ='CLAIMED';
       $receipt->save();
      return response()->json(['message'=>'Successfully Claimed Receipt You can download your certificate'],200);
  }else{
    return response()->json(['message'=>'Company name on receipt different from  your company name please contact our IT department'],500);
  }

}

function check_company($currentname,$compare_name)
{
    $cleanname =  preg_replace('/\s+/', '', $currentname);
    $cleanname = str_ireplace('(Private)Limited','',$currentname);
    $cleanname = str_ireplace('P/L','',$currentname);
    $cleanname = str_ireplace('PrivateLimited','',$currentname);
    $cleanname = str_ireplace('pvt ltd','',$currentname);
   
 
    
            //$request_array = str_split(strtoupper($cleanname));
            $db_name = preg_replace('/\s+/', '',$compare_name);
            $db_name = str_ireplace('(Private)Limited','',$compare_name);
            $db_name = str_ireplace('P/L','',$compare_name);
            $db_name = str_ireplace('PrivateLimited','',$compare_name);
            $db_name = str_ireplace('pvt ltd','',$compare_name);
               return $compare = strcasecmp($cleanname,preg_replace('/\s+/', '', $db_name));
              if($compare==0)
                {
                    return true;
                }
                else{
                    return false;
                }
                             
      
    
           
}
}
