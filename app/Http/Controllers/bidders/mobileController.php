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

class mobileController extends Controller
{
    public function initiate(Request $request){
        $request->validate(['phone'=>'required','amount'=>'required','mode'=>'required']);
        $paynow  = new Paynow('7628','50bccfe1-a756-4930-9596-d62a9fdb5a86','https://portal.praz.org.zw/payment/Update','https://portal.praz.org.zw/payment/Update');
        $invoice = online_invoice::wherecompany_id(Auth::user()->company->id)->wherestatus('PENDING')->first();
        if(!is_null($invoice)){            
                   $invoice_number = $invoice->invoice_number;
                 
              

               $payment =  $paynow->createPayment($invoice_number,Auth::user()->email);
               $payment->add($invoice_number,$request->amount);
               $response = $paynow->sendMobile($payment,$request->phone,$request->mode);
               if($response->success()){
                   $pollUrl=$response->pollUrl();
                   $online = onlinepayments::create(['invoice_number'=>$invoice_number,'company_id'=>Auth::user()->company->id,'poll_url'=>$pollUrl,'amount'=>$request->amount,'mode'=>$request->mode,'status'=>'PENDING']);
                   return response()->json($online,200);
               }else{
                return response()->json($response->errors(),500);
               }

        }else{
            return response()->json(['message'=>'No pending invoice found'],500);
        }
    }

    public function confirm($id){
        /**
         * initiating helper methods objects
         */

        $paymentHelper = new paymentHelper();
         $servicehelper = new serviceHelper();
         $message="";
          /**
           * getting the onlinepayment transaction
           */
        $payment = onlinepayments::whereid($id)->first();
        /**
         * initiating the paynow  object
         */
         if(!receipt::where(['method'=>$payment->mode,'source_id'=>$payment->id])->exists())
        {
        $paynow  = new Paynow('7628','50bccfe1-a756-4930-9596-d62a9fdb5a86','https://portal.praz.org.zw/payment/Update','https://portal.praz.org.zw/payment/Update');
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
               receipt::firstOrCreate(['source_id'=>$payment->id],['invoicenumber'=>$payment->invoice_number,'receiptnumber'=>$receiptnumber,'source_id'=>$payment->id,'company_id'=>Auth::user()->company->id,'method'=>$payment->mode,'currency'=>$payment->invoice->currency->name,'amount'=>$payment->amount,'user_id'=>Auth::user()->id]);
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
      }else{
          return response()->json(['message'=>'Payment already receipted'],500);
      }
    }
}
