<?php

namespace App\Helpers;

use App\banktransactions;
use App\company;
use App\creditnotes;
use App\documents;
use App\exchange;
use Paynow\Payments\Paynow;
use App\receiptnumber;
use App\invoicenumber;
use App\messages;
use App\online_invoice;
use App\operationtask_user;
use App\operationtasks;
use Carbon\Carbon;
use App\pricing;
use App\receipt;
use App\supplier;
use App\transfers;
use Illuminate\Support\Facades\Auth;
use DB;
class generalHelpers{

    public function getCompanyById()
    {
       return Auth::user()->company->id;  
    }

    public function getCompany(){
        return Auth::user()->company;   
    }

    public function getUserById()
    {
       return Auth::user()->id;  
    }
    public function getCompanyDocuments($companyid){
        $company = company::whereid($companyid)->first();
        $documents = documents::whereaccounttype_id($company->accounttype_id)->wherelocality($company->locality)->with(['company'=>function($query)use($company){
            $query->wherecompany_id($company->id);
        }])->get()->map(function($document){
            return[
                "id"=>$document->id,
                "name"=>$document->name,
                "uploaded"=> !is_null($document->company) ? true : false,
                "status"=> !is_null($document->company) ? $document->company->status : ''
            ];
        });
        
         return $documents; 
    }


   public function checkCompany($name)
    {
        /* $cleanname =  preg_replace('/\s+/', '', $currentname);
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
                           */   
                          
                          $cleanname =  preg_replace('/\s+/', '', $name);
                          $cleanname = str_ireplace('(Private)Limited','',$cleanname);
                          $cleanname = str_ireplace('P/L','',$cleanname);
                          $cleanname = str_ireplace('PrivateLimited','',$cleanname);
                          $cleanname = str_ireplace('Investments','',$cleanname);
                          $cleanname = str_ireplace('Investment','',$cleanname);
                          $cleanname = str_ireplace('Pvtltd','',$cleanname);
                          $first_three_letters = substr($cleanname,0,4);
                          $customers =  DB::select("select * from companies where name LIKE '%".$first_three_letters."%'");
                           if(count($customers)>0)
                           {
                              foreach ($customers as $key => $value) {
                                  //$request_array = str_split(strtoupper($cleanname));
                                  $db_name = preg_replace('/\s+/', '', $value->name);
                                  $db_name = str_ireplace('(Private)Limited','',$db_name);
                                  $db_name = str_ireplace('P/L','',$db_name);
                                  $db_name = str_ireplace('PrivateLimited','',$db_name);
                                  $db_name = str_ireplace('Investments','',$db_name);
                                  $db_name = str_ireplace('Investment','',$db_name);
                                  $db_name = str_ireplace('Pvtltd','',$db_name);
                                  $compare = strcasecmp(strtoupper($cleanname),strtoupper(preg_replace('/\s+/', '', $db_name)));
                                    if($compare==0)
                                      {
                                          return $value->id;
                                      }
                                     
                                                   
                              } 
                              return 0;
                           }
                  
        
        
            
    }
    public function regnumber(){
        $company = count(company::get());
        return "PR".\Carbon\Carbon::now()->micro."".($company+1);
    }

    public function  helper_generate_code($id){
        $rand = rand(1000,2000);    
        return "PRAZ-".Carbon::now()->year."-".$rand.'-'.$id;
      }

    public function get_invoice_number($company,$year)
    {
        $invoice = online_invoice::where(['company_id'=>$company,'year'=>$year])->where('status','=','PENDING')->first();
        if(!is_null($invoice))
         {
             return $invoice->invoice_number;
         }
         else{
        $number = invoicenumber::first();
        $invoice= 'inv'.Carbon::now()->year.''.Carbon::now()->month.''.Carbon::now()->day.''.$number->invoice;
        $number->invoice = $number->invoice+1;
        $number->save();
        return $invoice;
         }
    }

    public function get_receipt_number(){
        $number = receiptnumber::first();
        $receipt = 'rpt'.Carbon::now()->year.''.Carbon::now()->month.''.Carbon::now()->day.''.$number->receipt;
        $number->receipt = $number->receipt+1;
        $number->save();
        return $receipt;
    }
   
    public function helper_checkDocuments($company){

        $company = company::whereid($company)->first();
        if(!is_null($company))
        {
        $locality = !is_null($company) ? !is_null($company->locality) ? $company->locality : 'local' :'';
        $accounttype = !is_null($company) ? !is_null($company->accounttype_id) ? $company->accounttype_id : 1 :''; 
        $documents = documents::where(['locality'=>$locality,'accounttype_id'=>$accounttype])
        ->with(['company'=>function($query)use($company){
            $query->where('company_id','=',$company->id);
        }])
        ->get();
          $approved = 0;
        foreach ($documents as $doc) {
               if(!is_null($doc->company))
               {
              if($doc->company->status =='APPROVED'){
                $approved++;
              }
            }
        }
    
        if(count($documents)==$approved){
            return true;
        }
        else{
            return false;
        }
      }
      else{
          return false;
      }
    
    }
   public function get_price($currency,$company_id)
    {
        $company = company::whereid($company_id)->first();
        $price = pricing::where(['locality'=>$company->locality,'action'=>'NEW'])->orderBy('id','desc')->first();
        $total = 0;
        $exchange =0;
        if(!is_null($price)){
            if($price->currency_id != $currency)
             {
          
               $exchange  = exchange::orderBy('id','desc')->first();
               $total  = $price->price * $exchange->value;
               $exchange = $exchange->id; 
           }
           else{
               $total = $price->price;
           }
        }
   
        return array("price"=>$total,"exchange"=>$exchange);
    }

    public function paynowMobile(){
        $paynow  = new Paynow('1836','ec3cb4c0-345d-401d-8066-0123a9320090','http://127.0.0.1:8000/payment/Update','http://127.0.0.1:8000/payment/Update');
        return $paynow;
    }

    public function paynowOnline(){
        $paynow  = new Paynow('1836','ec3cb4c0-345d-401d-8066-0123a9320090','http://127.0.0.1:8000/Bidders-Dashboard/check','http://127.0.0.1:8000/Bidders-Dashboard/check');
        return $paynow;
    }
    
    public function invoice_settlement_status($invoice_number){
        $invoice = online_invoice::whereinvoice_number($invoice_number)->get();

        if(count($invoice)>0){
            $total_invoice = $invoice->sum('cost');
            $total_paid = $invoice[0]->receipts->sum('amount');
            $message ="";
            if($total_invoice<=$total_paid){
                online_invoice::whereinvoice_number($invoice_number)->update(['status'=>'PAID']);
                $status = $this->helper_checkDocuments($invoice[0]->company_id) ? "APPROVED" :"PENDING";
                 $message = $status=="APPROVED" ? 'Registration successfully completed please ' : 'Payment successfully completed  your registration now awaits document approval. We have notified the relevant department';
                   foreach ($invoice as $inv) {    
                     $code = $this->helper_generate_code($inv->id);
                      supplier::firstOrCreate(['company_id'=>$inv->company->id,'category_id'=>$inv->category_id,'expire_year'=>$inv->year],
                                              ['company_id'=>$inv->company->id,'category_id'=>$inv->category_id,'expire_year'=>$inv->year,'status'=>$status,'code'=>$code]);                                          
                  }
                  if($status=='PENDING')
                   {
                 operationtasks::firstOrCreate(['company_id'=>$invoice[0]->company_id],
                                             ['company_id'=>$invoice[0]->company_id,
                                              'action'=>"DOCUMENT_APPROVAL",
                                              "description"=>'Your account documents will be reviews'
                                              ]);
                   }
            }else{
                $balance = $total_invoice-$total_paid;
               $message ='PAYMENT SUCCESSFUL : Invoice has an outstand balance of : '.$balance;
            }
            return array("status"=>"success","message"=>$message);
        }else{
            return  array("status"=>'error','message'=>'Invoie not found');
        }

    }

    public function get_account_number($currency){
        $accountnumber='10721064850020';
        if($currency !=='ZWL'){         
           $accountnumber='10721064850040';
        }

        return $accountnumber;
    }

    public function get_internal_funds($currency,$account,$company){
        $receipts = receipt::where(['company_id'=>$company->id,'method'=>'internal','currency'=>$currency])->where('type','!=','BIDBOND')->sum('amount');
        $bank = banktransactions::where(['customer_number'=>$company->regnumber,'accountnumber'=>$account])->sum('amount');
        $refunds = creditnotes::where(['host_accountnumber'=>$account,'company_id'=>$company])->sum('amount');
        return  (int)$bank-(int)$receipts-(int)$refunds;
    }
  public function getMessages($company){
      $messages= messages::where(['company_id'=>$company,'status'=>'PENDING'])->get()->map(function($message){
          return[
              'id'=>$message->id,
              'message'=>$message->message,
              "action"=>$message->action,
              "created_at"=>$message->created_at->diffForHumans()
          ];
      });
      return $messages;
  }

  public function process_pending_transfers($invoice_number,$regnumber,$accountnumber){
      $transfers =  transfers::whereinvoicenumber($invoice_number)
                             ->wherestatus('PENDING')
                             ->get();
        $array =[];
        if(count($transfers)>0){
             foreach ($transfers as $key => $value)
              {
                 $bank =  banktransactions::wheresource_reference($value->referencenumber)
                                         ->whereaccountnumber($accountnumber)
                                         ->wherestatus('PENDING')
                                          ->first();
                 $status = $value->status;
                 if(!is_null($bank)){
                     $bank->customer_number = $regnumber;
                     $bank->status = 'CLAIMED';
                     $bank->save();
                     $value->status ="CLAIMED";
                     $value->save();
                     $status="CLAIMED";
                 }

                 $array[]=array("id"=>$value->id,"invoicenumber"=>$invoice_number,"referencenumber"=>$value->referencenumber,"status"=>$status);

             }
        }

        return $array;


  }
}