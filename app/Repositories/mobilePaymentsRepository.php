<?php
namespace App\Repositories;

use App\Events\paymentEvent;
use App\Helpers\generalHelpers;
use App\Interfaces\bidder\mobilePaymentsInterface;
use App\Http\Requests\mobilePaymentRequest;
use App\online_invoice;
use App\onlinepayments;
use App\receipt;
use App\Traits\ResponseAPI;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class mobilePaymentRepository implements mobilePaymentsInterface{
 use ResponseAPI;
    private $helper;

    public function __construct(generalHelpers $helper)
    {
       $this->helper = $helper; 
    }
    public function initiate(mobilePaymentRequest $request, $company)
    {
       $paynow = $this->helper->paynowMobile();
       $invoice = online_invoice::wherecompany_id($company)->wherestatus('PENDING')->where('year','>=',Carbon::now()->year)->first();
       if(!is_null($invoice)){
            $invoice_number = $invoice->invoice_number;
            $payment =  $paynow->createPayment($invoice_number,Auth::user()->email);
            $payment->add($invoice_number,$request->amount);
            $response = $paynow->sendMobile($payment,$request->phone,$request->mode);           
              
            if($response->success()){
                $pollUrl=$response->pollUrl();
                $online= onlinepayments::create(['invoice_number'=>$invoice_number,'company_id'=>Auth::user()->company->id,'poll_url'=>$pollUrl,'amount'=>$request->amount,'mode'=>$request->mode,'status'=>'PENDING']);
                return $this->success("Success",$online->id,200);
            }else{
             return $this->error($response->errors(),500);
            }

       }else{
           return $this->error('No pending invoice found',500);
       }
    }

    public function confirm($id)
    {
        $payment = onlinepayments::whereid($id)->first();  
        
        if(!is_null($payment)){
            $users = User::wherecompany_id($payment->company_id)->get();
            if(!receipt::where(['method'=>$payment->mode,'source_id'=>$payment->id])->exists())
            {
                $paynow = $this->helper->paynowMobile();
                $status = $paynow->pollTransaction($payment->poll_url);

                if($status->paid()){
                    /**
                     * update online payment transaction to paid
                     */
                 $payment->status ='PAID';
                 $payment->save();

                 $receiptnumber = $this->helper->get_receipt_number();

                  receipt::firstOrCreate(
                                     ['source_id'=>$payment->id,'method'=>$payment->mode],
                                     ['invoicenumber'=>$payment->invoice_number,
                                     'receiptnumber'=>$receiptnumber,
                                     'source_id'=>$payment->id,
                                     'company_id'=>$payment->company_id,
                                     'method'=>$payment->mode,
                                     'currency'=>$payment->invoice->currency->name,
                                     'amount'=>$payment->amount,
                                     'user_id'=>Auth::user()->id
                                     ]
                  );
                 
               
                 $array = $this->helper->invoice_settlement_status($payment->invoice_number);
                 $message =$payment->invoice->currency->name."".$payment->amount."Successfully receipted. ".$array['message'];
                 event(new paymentEvent($users,$message));
                 if($array['status']=='success'){
                   $invoice = online_invoice::whereinvoice_number($payment->invoice_number)->get()->map->formate();
                   return $this->success($array['message'],$invoice);
                 }else{
                    $message =$payment->invoice->currency->name."".$payment->amount."was  successful ".$array['message'];
                    event(new paymentEvent($users,$message));
                    return $this->error($array['message'],500);

                 }
                }else{
                    $message =$payment->invoice->currency->name."".$payment->amount."was ".$status->status();
                    event(new paymentEvent($users,$message));
                     return $this->error($status->errors(true),500);
                }

              

            }else{
                return $this->error('Payment already receipted',500);
            }


        }else{

            return $this->error('No payment attempt found',500);
        }

    }
}