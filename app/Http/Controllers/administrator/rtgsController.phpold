<?php

namespace App\Http\Controllers\administrator;

use App\banktransactions;
use App\currency;
use App\Http\Controllers\Controller;
use App\manual_statement;
use App\online_invoice;
use App\receipt;
use App\rtgs;
use App\rtgs_comments;
use App\supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use paymentHelper;
use serviceHelper;

class rtgsController extends Controller
{
    public function pending(){
       
        $this->check_invoice();
        $invoices = online_invoice::with('receipts','rtgs','company','currency')->wherestatus('AWAITING')->orderby('id','desc')->get();
         $grouped = $invoices->groupby('invoice_number');
         $array = [];
          foreach ($grouped as $key => $value) {
              $data = $this->calculate_array($value);
              $paid = $this->total_paid($key);
            $array[]=array("invoice_number"=>$key,"name"=>$data['companyname'],"currency"=>$data['currency'],"cost"=>$data['totalcost'],"paid"=>$paid);
          }

     
       
        return response()->json(['invoices'=>$array],200);
    }

    public function show($id){
        $rtg = rtgs::with('company','invoice.category','invoice.currency','receipts','currency','comments','transfer')->whereinvoice_number($id)->first();
        if(!is_null($rtg))
        {
        return response()->json(['rtgdata'=>$rtg],200); 
        }else{
            return response()->json(['message'=>'NO POP FOUND'],406);
        }
    }

   

    function calculate_array($data){
        $total =0;
        
        $company_id = $data[0]->company_id;
        $companyname =  !is_null($data[0]->company) ? $data[0]->company->name :"null" ;
        $currency = !is_null($data[0]->currency) ? $data[0]->currency->name : "null";
       // $created_at = $data[0]->created_at-> 
        foreach ($data as $key => $value) {
            $total = $total + $value->cost;
        }

        
        return array("company_id"=>$company_id,"companyname"=>$companyname,'currency'=>$currency,"totalcost"=>$total);
    }

    function total_paid($invoicenumber){
        return receipt::whereinvoicenumber($invoicenumber)->sum('amount');
    }

    public function statement($currency){
         $statement =  banktransactions::query()
        ->where('source_reference', 'LIKE', "%".$currency."%") 
        ->orWhere('description', 'LIKE', "%".$currency."%") 
        ->get();       
        return response()->json(['statement'=>$statement],200);
    }

    public function store(Request $request){
         /**
         * get rtgs
         */
        $rtgs = rtgs::whereid($request->rtgs_id)->first();
       
        $statement = banktransactions::whereid($request->statement_id)->first();
         if($statement->status=='PENDING')
            {
        $paymentHelper = new paymentHelper();
        $servicehelper = new serviceHelper();

         $check_docs = $servicehelper->helper_checkDocuments_admin($rtgs->company_id);
        // return $check_docs;
         /**
          * get invoice
          */
            $invoice = online_invoice::whereinvoice_number($rtgs->invoice_number)->get();
            $total_invoice = 0;
            foreach ($invoice as $key => $value) {
                $total_invoice = $total_invoice + $value->cost;
            }
          
          
          /**
           * get total paid
           */
             $paid = receipt::whereinvoicenumber($rtgs->invoice_number)->sum('amount');
           /**
            * check total due and total paid
            */
            $due = $total_invoice - $paid;

            /**
             * check rtgs amount and due  amount
             */
          
               $status ='PENDING';
               $amount=0;
             if($due > $statement->amount){
                 $amount = (int)$statement->amount;
             }else{
                 $amount = $due;
                 $status = 'PAID';
             }
            
            $statement->status ='CLAIMED';
            $statement->admin_id = Auth::user()->id;
            $statement->save();
            $currency = currency::wherename($statement->currency)->first();
            $rtgs->status = 'APPROVED';
            $rtgs->amount = $statement->amount;
            $rtgs->currency_id = $currency->id;
            $rtgs->refnumber = $statement->source_reference;
            $rtgs->paymentdate = $statement->trans_date;
            $rtgs->transdate = $statement->trans_date;
            $rtgs->save();

            $receiptnumber = $paymentHelper->receipt_number();
            /**
             *  save receipt  
             */
            receipt::create(['invoicenumber'=>$rtgs->invoice_number,'receiptnumber'=>$receiptnumber,'company_id'=>$rtgs->company_id,'method'=>'rtgs','currency'=>$statement->currency,'amount'=>$amount,'user_id'=>Auth::user()->id]);
              $paid = receipt::whereinvoicenumber($rtgs->invoice_number)->sum('amount');
            $due = $total_invoice - $paid;

              if($due <= 0){
                   $status ='PAID';
                }
            
           
           if($status=='PAID'){
                             /**
                * check company documents
                */
                $check_docs = $servicehelper->helper_checkDocuments_admin($rtgs->company_id);
                $current = 'PENDING';
               if($check_docs){
                  $current = 'APPROVED';
              }

                foreach ($invoice as $inv) {
                    if(!supplier::where(['company_id'=>$rtgs->company_id,'category_id'=>$inv->category_id,'expire_year'=>$inv->year])->exists())
                    {

                      $code = $servicehelper->helper_generate_code($inv->id);
                      supplier::create(['company_id'=>$rtgs->company_id,'category_id'=>$inv->category_id,'expire_year'=>$inv->year,'status'=>$current,'code'=>$code]);                       
                    }
                  } 
            
		online_invoice::whereinvoice_number($rtgs->invoice_number)->update(['status'=>'PAID']); 
                /**
                 *   generate certificate
                 */


           }

           $invoices = online_invoice::with('receipts','rtgs','company','currency')->wherestatus('AWAITING')->orderby('id','desc')->get();
           $grouped = $invoices->groupby('invoice_number');
           $array = [];
            foreach ($grouped as $key => $value) {
                $data = $this->calculate_array($value);
                $paid = $this->total_paid($key);
              $array[]=array("invoice_number"=>$key,"name"=>$data['companyname'],"currency"=>$data['currency'],"cost"=>$data['totalcost'],"paid"=>$paid);
            }
  
       
         
          return response()->json(['invoices'=>$array],200);
          }
         else
         {
           return response()->json(['message'=>'Reference number already claimed'],500);
         }


    }

    public function comments($id){
        $comments=  rtgs_comments::wherertgs_id($id)->get();
        return response()->json(['comments'=>$comments],200);
    }

    public function saveComment(Request $request){
        $request->validate(['comment'=>'required']);

        rtgs_comments::create(['rtgs_id'=>$request->id,'comment'=>$request->comment]);
        $comments=  rtgs_comments::wherertgs_id($request->id)->get();
        return response()->json(['comments'=>$comments],200);

    }

    function check_invoice(){
          $online_invoices = online_invoice::wherestatus('AWAITING')->get();

          /**
           *  check if the   there is a similar registration  done by that  company
           */

             foreach ($online_invoices as $key => $value) {
                  $invoices  =  online_invoice::where(['company_id'=>$value->company_id,'category_id'=>$value->category_id,'year'=>$value->year])->get();
                  if(count($invoices)>1){
                       foreach ($invoices as $ky => $val) {
                            if($val->id != $value->id){
                               if($val->status =='PAID' || $val->status=='AWAITING'){
                                 $value->status ="CANCELLED";
                                 $value->save();
                                 rtgs::whereinvoice_number($value->invoice_number)->delete();
                               }
                            }
                       }
                  }
             }
    }
}
