<?php

namespace App\Repositories;

use App\banktransactions;
use App\company;
use App\Events\paymentEvent;
use App\Helpers\generalHelpers;
use App\Http\Requests\reversalRequest;
use App\Interfaces\administrator\banktransactionInterface;
use App\Interfaces\administrator\taskInterface;
use App\Notifications\reversalNotification;
use App\online_invoice;
use App\receipt;
use App\reversals;
use App\supplier;
use App\Traits\ResponseAPI;
use App\transfers;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;

class banktransactionRepository implements banktransactionInterface{
    use ResponseAPI;
    private $helper;
    public function __construct(generalHelpers $helper)
    {
       $this->helper = $helper; 
    }
    public function search($reference)
    {
        $statement =  banktransactions::query()
        ->where('source_reference', 'LIKE', "%".$reference."%") 
        ->orWhere('description', 'LIKE', "%".$reference."%") 
        ->get()
        ->map(function($state){
            return[
               "id"=>$state->id,
               "date"=>$state->trans_date,
               "source_reference"=>$state->source_reference,
               "status"=>$state->status,
               "description"=>$state->description,
               "amount"=>$state->amount,
               "currency"=>$state->currency,
               "regnumber"=>$state->customer_number,
               "company"=>!is_null($state->company) ? $state->company->name : "",
              ];
        });  

        return $this->success('SUCCESS',$statement);
    }

    public function claim($bank_id,$invoicenumber){
        $transaction = banktransactions::whereid($bank_id)->first();
        $online = online_invoice::whereinvoice_number($invoicenumber)->get();
        if(count($online)>0){
        $users = User::wherecompany_id($online[0]->company_id)->get();
        $company  = company::whereid($online[0]->company_id)->first();
        if($transaction->status=='PENDING'){
        $transaction->status = 'CLAIMED';
        $transaction->customer_number = $company->regnumber;
        $transaction->save();
        }

      
      
             $currency = $online[0]->currency->name;
             $accountnumber = $this->helper->get_account_number($currency);
             if($accountnumber == $transaction->accountnumber)
             {
                    
             $totlReceipted = $online[0]->receipts->sum('amount');
             $totalDue = $online->sum('cost')-$totlReceipted;
             $balance = $this->helper->get_internal_funds($currency,$accountnumber,$company);
             $amount =0;
             if($balance <= $totalDue){
                 $amount = $balance;
             }else{
                $amount = $totalDue;
             }

             $receiptnumber = $this->helper->get_receipt_number();
             $source_id = $transaction->id;

             receipt::create(
                ['invoicenumber'=>$invoicenumber,
                'receiptnumber'=>$receiptnumber,
                'source_id'=>$source_id,
                'company_id'=>$company->id,
                'method'=>'internal',
                'currency'=>$currency,
                'amount'=>$amount,
                'user_id'=>Auth::guard('admin')->user()->id
                ]);

                
                $array = $this->helper->invoice_settlement_status($invoicenumber);
                $message =$currency."".$amount."Successfully receipted. ".$array['message'];
                $this->helper->checkTask($company->id);
                event(new paymentEvent($users,$message));
                if($array['status']=='success'){
                  $invoice = online_invoice::whereinvoice_number($invoicenumber)->get()->map->formate();
                  return $this->success($array['message'],$invoice);
                }else{
                   $message =$currency."".$amount."was  successful ".$array['message'];
                   event(new paymentEvent($users,$message));
                   return $this->error($array['message'],500);

                }
            }else{
                 $message = "Transfer deposited in account ".$transaction->accountnumber."Cannot be used for  supplier registration";
                 event(new paymentEvent($users,$message));
                 return $this->error($message,500);
            }


         }
    }


    public function reverse(reversalRequest $request){
        $transaction = banktransactions::whereid($request->id)->first();
        
         if(!is_null($transaction)){
            $company=  company::whereregnumber($transaction->customer_number)->with('users')->first();
             $transfer = transfers::wherereferencenumber($transaction->source_reference)->first();
             if(!is_null($transfer)){
                 $transfer->status ="PENDING";
                 $transfer->save();

                 $online = online_invoice::whereinvoice_number($transfer->invoicenumber)->get();
                 reversals::create(['invoice_number'=>$online[0]->invoice_number,'user_id'=>Auth::guard('admin')->user()->id]);
                 foreach ($online as $ky => $val) {
                     $val->status='AWAITING';
                     $val->save();
                     $registration = supplier::where(['category_id'=>$val->category_id,'expire_year'=>$val->year,'company_id'=>$val->company_id])->first();
                     $registration->status ="PENDING";
                     $registration->save();
                 }
                 $receipt = receipt::where(['invoicenumber'=>$transfer->invoicenumber,'method'=>'internal'])->get();
                  if(count($receipt)>0){
                      foreach ($receipt as $key => $value) {
                            $value->delete();
                      }
                  }

             }
            $transaction->status="PENDING";
            $transaction->customer_number ="";
            $transaction->save();
            $message ="Please note registration done using bank reference number. ".$transaction->source_reference.' has been reversed, because that  reference number belongs to  another company please contact your bank  for a correct reference number';
            Notification::send($company->users,new reversalNotification($message));
            return $this->success($message,$transaction);
         }
    }
}