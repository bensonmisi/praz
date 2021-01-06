<?php

namespace App\Http\Controllers\bidders;

use App\banktransactions;
use App\Http\Controllers\Controller;
use App\Notifications\paymentSuccess;
use App\online_invoice;
use App\receipt;
use App\rtgs;
use App\supplier;
use App\transfers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use paymentHelper;
use serviceHelper;
use Illuminate\Support\Facades\Log;

class internalController extends Controller
{
     public function index($currency){
        $service = new serviceHelper();
        $accountnumber='10721064850020';
        if($currency !=='ZWL'){         
           $accountnumber='10721064850040';
        }
      
       $balance =  $service->myBalance($currency,$accountnumber);
       
       return response()->json(['balance'=>$balance],200);
     }

     public function claim(Request $request){
         $request->validate(['refnumber'=>'required']);
         
         $bank = banktransactions::wheresource_reference($request->refnumber)->first();
         if(!is_null($bank))
         {
             if($bank->status =='PENDING'){
         $bank->customer_number = Auth::user()->company->regnumber;
         $bank->status ='CLAIMED';
         $bank->save();
         $online = online_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->first();
         transfers::firstOrCreate(['referencenumber'=>$request->refnumber],['referencenumber'=>$request->refnumber,'invoicenumber'=>$online->invoice_number,'status'=>'CLAIMED']);

         $service = new serviceHelper();
        $accountnumber=env('LOCAL_NON_REFUNDABLE');
        if($bank->currency !=='ZWL'){         
           $this->accountnumber=env('FOREIGN_NON_REFUNDABLE');
        }
      
       $balance =  $service->myBalance($bank->currency,$accountnumber);
       
       return response()->json(['balance'=>$balance],200);
        }else{
            return response()->json(['message'=>'Reference already claimed'],500); 
        } 
         }
         else{
            return response()->json(['message'=>'Reference number  not found'],500);
      
         }
     }

     public function confirmTransaction(Request $request){
        $request->validate(['refnumber'=>'required','fileupload'=>'required','bank'=>'required']);
        $online = online_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->first();
        if(!is_null($online))
        {
        $path = $request->file('fileupload')->store('proof','my_files');
        rtgs::firstOrcreate([
                      'company_id'=>Auth::user()->company->id,
                      'invoice_number'=>$online->invoice_number,
                      'type'=>'SUPPLIER',
                      'filename'=>$path,
                      'currency_id'=>$online->currency_id,
                      'name'=>$request->bank
                    ]);
        transfers::firstOrCreate(['referencenumber'=>$request->refnumber],['referencenumber'=>$request->refnumber,'invoicenumber'=>$online->invoice_number]);
       online_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->update(['status'=>'AWAITING']);
       
    return response()->json(['message'=>'You transaction has been successfully saved awaiting varification of your reference number. Once it has been verified you will be notified via email'],200);
        }else{
            $online = online_invoice::where(['company_id'=>Auth::user()->company->id])->orderBy('id','desc')->first();
            $path = $request->file('fileupload')->store('proof','my_files');
             rtgs::firstOrcreate([
                      'company_id'=>Auth::user()->company->id,
                      'invoice_number'=>$online->invoice_number,
                      'type'=>'SUPPLIER',
                      'filename'=>$path,
                      'currency_id'=>$online->currency_id, 
                      'name'=>$request->bank
                    ]);
                transfers::firstOrCreate(['referencenumber'=>$request->refnumber],['referencenumber'=>$request->refnumber,'invoicenumber'=>$online->invoice_number]);
                    online_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->update(['status'=>'AWAITING']);
                    return response()->json(['message'=>'You transaction has been successfully saved awaiting varification of your reference number. Once it has been verified you will be notified via email'],200);
 
         
        }
     }

     public function registration(Request $request){
         $online = online_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->first();
         if(!is_null($online)){
         $service = new serviceHelper();
         $paymentHelper = new paymentHelper();
         $currency = $online->currency->name;
          $accountnumber='10721064850020';
           if($currency !=='ZWL'){         
           $accountnumber='10721064850040';
           }
         $receiptnumber = $paymentHelper->receipt_number();
      
         $balance= (int)$service->myBalance($currency,$accountnumber); 
         $due = (int)$service->get_balance();
         $message="";
         $amount =0;
         if($balance <= $due){
             $amount = $balance;
         }else{
            $amount = $due;
         }
         
        receipt::create(['invoicenumber'=>$online->invoice_number,'receiptnumber'=>$receiptnumber,'company_id'=>Auth::user()->company->id,'method'=>'internal','currency'=>$currency,'amount'=>$amount,'user_id'=>Auth::user()->id]);
         /**
          * check if the invoice was fully paid
          */
        $balance = $service->get_balance();
        if($balance<=0){
            /**
             * if invoice has been paid of  get invoice entries
             */
            $invoices = online_invoice::whereinvoice_number($online->invoice_number)->get();
            /**
             * check if company documents have been approved
             */
            $check_docs = $service->helper_checkDocuments();
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
                $code = $service->helper_generate_code($inv->id);
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
            $data =['message'=>'Successfully Completed payment of '.$amount.'-'.$message,'type'=>'Success','url'=>'/registration/payment'];
            $user->notify(new paymentSuccess($data));             
            return response()->json(['message'=>'Successfully Completed Transaction'],200);
        }else{
            return response()->json(['message'=>'No pending invoice found'],500); 
        }
     }
}
