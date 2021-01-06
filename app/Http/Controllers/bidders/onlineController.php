<?php

namespace App\Http\Controllers\bidders;

use App\Http\Controllers\Controller;
use App\Notifications\paymentSuccess;
use App\online_invoice;
use App\onlinepayments;
use App\receipt;
use App\supplier;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use paymentHelper;
use Paynow\Payments\Paynow;
use serviceHelper;

class onlineController extends Controller
{
     public function index(){
        $paynow  = new Paynow('7708','002667b4-1998-49b7-a080-54a70a3380fa','https://portal.praz.org.zw/Home/check','https://portal.praz.org.zw/Home/check');
        $invoice = online_invoice::wherecompany_id(Auth::user()->company->id)->wherestatus('PENDING')->get();
        if(count($invoice)>0){            
                   $invoice_number = $invoice[0]->invoice_number;
                   $totalDue = 0;                
               foreach ($invoice as $key => $value) {
                   $totalDue = $totalDue + $value->cost;
               }

               $payment =  $paynow->createPayment($invoice_number,Auth::user()->email);
               $payment->add($invoice_number,$totalDue);
               $response = $paynow->send($payment);
               if($response->success()){
                $pollUrl=$response->pollUrl();
                $link = $response->redirectUrl();
                onlinepayments::create(['invoice_number'=>$invoice_number,'company_id'=>Auth::user()->company->id,'poll_url'=>$pollUrl,'amount'=>$totalDue,'mode'=>'PAYNOW','status'=>'PENDING']);
                return response()->json(['link'=>$link],200);
                }else{
                return response()->json($response->errors(),500);
                }

        }
     }


     public function check(){

        $paymentHelper = new paymentHelper();
        $servicehelper = new serviceHelper();
        $message="";             

       $paynow  = new Paynow('7708','002667b4-1998-49b7-a080-54a70a3380fa','https://portal.praz.org.zw/Home/check','https://portal.praz.org.zw/Home/check');
        $payment = onlinepayments::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->orderBy('id','desc')->first();
        return $paynow;
               /**
           * checking if the transaction was successfully completed
           */
          $status = $paynow->pollTransaction($payment->poll_url);
        
          if($status->paid()) {
              /**
           * if the  transaction was successfully completed update the online payment status to PAID
           */
              $payment->status ="PAID";
              $payment->save();
              /**
               * generate receipt number
               */
              $receiptnumber = $paymentHelper->receipt_number();
              /**
               *  save receipt  
               */
              receipt::firstOrCreate(['source_id'=>$payment->id],['invoicenumber'=>$payment->invoice_number,'source_id'=>$payment->id,'receiptnumber'=>$receiptnumber,'company_id'=>Auth::user()->company->id,'method'=>$payment->mode,'currency'=>$payment->invoice->currency->name,'amount'=>$payment->amount,'user_id'=>Auth::user()->id]);
               /**
                * check if the invoice was fully paid
                */
              $balance = $servicehelper->get_balance();
              if($balance<=0){
                  /**
                   * if invoice has been paid of  get invoice entries
                   */
                  $invoices = online_invoice::whereinvoice_number($payment->invoice_number)->get();
                  /**
                   * check if company documents have been approved
                   */
                  $check_docs = $servicehelper->helper_checkDocuments();
                  $current = 'PENDING';
                  $message = 'Your registration is now PENDING document approval this may take 24-48 hours during working days. Our system will send a notification once document status changes';
                
                  /**
                   * if company documents have been approved update status variable to APPROVED and generate certificate code
                   */
                    if($check_docs){
                     $current = 'APPROVED';
                     $message ='Your registration has been approved please check under registered categories  and click the download button';
                  
                    }
                     /**
                      *  loop though the invoice data and save the   invoiced categories  in the  suppliers table with the status  and code variables set above
                      */
                  foreach ($invoices as $inv) {
                     if(!supplier::where(['company_id'=>Auth::user()->company->id,'category_id'=>$inv->category_id,'expire_year'=>$inv->year])->exists())
                     {
                      $code = $servicehelper->helper_generate_code($inv->id);
                       supplier::create(['company_id'=>Auth::user()->company->id,'category_id'=>$inv->category_id,'expire_year'=>$inv->year,'status'=>$current,'code'=>$code]);
                         /**
                          * update each invoice  entry to paid
                          */
                         $invoice =  online_invoice::whereid($inv->id)->first();
                         $invoice->status ='PAID';
                         $invoice->save();
                     }
                   } 
                   
  
              }
                  $user = User::whereid(Auth::user()->id)->first();
                  $data =['message'=>'Successfully Completed payment of '.$payment->amount.'-'.$message,'type'=>'Success','url'=>'/registration/payment'];
                  $user->notify(new paymentSuccess($data));             
                  return response()->json(['message'=>'Successfully Completed Transaction'],200);
            
          
         
          } else {
             return response()->json($status->errors(),500);
          }
     }
}
