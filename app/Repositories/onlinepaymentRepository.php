<?php

namespace App\Repositories;

use App\Events\paymentEvent;
use App\Helpers\generalHelpers;
use App\Interfaces\bidder\onlinepaymentInterface;
use App\online_invoice;
use App\onlinepayments;
use App\receipt;
use App\Traits\ResponseAPI;
use App\User;
use Illuminate\Support\Facades\Auth;

class onlinepaymentRepository implements onlinepaymentInterface{

    use ResponseAPI;
    private $helper;

    public function __construct(generalHelpers $helper)
    {
        $this->helper = $helper;
    }

    public function initiate($company)
    {
        $paynow = $this->helper->paynowOnline();
        $invoice = online_invoice::wherecompany_id($company)->wherestatus('PENDING')->get();
        if(count($invoice)>0){            
                   $invoice_number = $invoice[0]->invoice_number;
                   $totalDue = $invoice->sum('cost');

               $payment =  $paynow->createPayment($invoice_number,Auth::user()->email);
               $payment->add($invoice_number,$totalDue);
               $response = $paynow->send($payment);
               if($response->success()){
                $pollUrl=$response->pollUrl();
                $link = $response->redirectUrl();
                onlinepayments::create(['invoice_number'=>$invoice_number,'company_id'=>$company,'poll_url'=>$pollUrl,'amount'=>$totalDue,'mode'=>'PAYNOW','status'=>'PENDING']);
                return $this->success("success",$link);
                }else{
                return $this->error($response->errors(),500);
                }

        }

        return $this->error('No pending invoices found',500);
    }

    public function check($company)
    {
         $paynow = $this->helper->paynowOnline();
         $payment = onlinepayments::where(['company_id'=>$company,'status'=>'PENDING'])->orderBy('id','desc')->first();
         if(!is_null($payment)){
            $users = User::wherecompany_id($company)->get();
            $status = $paynow->pollTransaction($payment->poll_url);

            if($status->paid()){
                $payment->status ="PAID";
                $payment->save();

                $receiptnumber = $this->helper->get_receipt_number();

                receipt::firstOrCreate(['source_id'=>$payment->id,'method'=>'PAYNOW'],
                                     [
                                       'invoicenumber'=>$payment->invoice_number,
                                       'source_id'=>$payment->id,
                                       'receiptnumber'=>$receiptnumber,
                                       'company_id'=>$company,
                                       'method'=>$payment->mode,
                                       'currency'=>$payment->invoice->currency->name,
                                       'amount'=>$payment->amount,
                                       'user_id'=>Auth::user()->id
                                       ]);

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
                                      
               
        
            }
        else{
            $message =$payment->invoice->currency->name."".$payment->amount."was ".$status->status();
            event(new paymentEvent($users,$message));
             return $this->error($status->errors(true),500);
        }
         }
   
    }
}