<?php

namespace App\Repositories;

use App\banktransactions;
use App\Events\paymentEvent;
use App\Helpers\generalHelpers;
use App\Http\Requests\claimreferenceRequest;
use App\Http\Requests\uploadProofRequest;
use App\Http\Requests\verifyRequest;
use App\Interfaces\bidder\bankpaymentsInterface;
use App\online_invoice;
use App\receipt;
use App\rtgs;
use App\Traits\ResponseAPI;
use App\transfers;
use App\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class bankpaymentsRepository implements bankpaymentsInterface{

    use ResponseAPI;
    private $helper;

    public function __construct(generalHelpers $helper)
    {
       $this->helper = $helper;  
    }

    public function getBalance($currency,$company){
       $accountnumber = $this->helper->get_account_number($currency);
       $balance = $this->helper->get_internal_funds($currency,$accountnumber,$company);
       return $this->success('Success',$balance);
    }

    public function claimReference(claimreferenceRequest $request,$company){
      $transaction = banktransactions::wheresource_reference($request->refnumber)->first();
      $users = User::wherecompany_id($company->id)->get();
      if(!is_null($transaction)){
          if($transaction->status =='PENDING')
          {
              $accountnumber = $this->helper->get_account_number($transaction->currency);
              $message ="";
           
              $transaction->customer_number = $company->regnumber;
              $transaction->status ='CLAIMED';
              $transaction->save();
              $online = online_invoice::where(['company_id'=>$company->id,'status'=>'PENDING'])->where('year','>=',Carbon::now()->year)->orderBy('id','desc')->first();
              transfers::firstOrCreate(['referencenumber'=>$request->refnumber],['referencenumber'=>$request->refnumber,'invoicenumber'=>$online->invoice_number,'status'=>'CLAIMED']);
              $balance = $this->helper->get_internal_funds($transaction->currency,$accountnumber,$company);
              if($transaction->accountnumber != $accountnumber){
                $message ="WRONG_ACCOUNT";
                $info ="Transfer of".$transaction->amount." with reference number".$transaction->source_reference." done on the ".$transaction->trans_date."  was identified however You made an error of  depositing into  our REFUNDABLE ACCOUNT 10721064850030 which is meant for Bid Security Payments and can not be used for supplier registration process. Please request for a refund by send an email to bidsecurity@praz.org.zw . Please deposit into our CBZ 10721064850020 account";
                event(new paymentEvent($users,$info));
              }
              else{
              $message ="SUCCESS";
              }

             return $this->success($message,$balance);
        
          }
          else{
              return $this->error('CLAIMED',500);
          }
       
      }else{
          return $this->error("NOT_FOUND",500);
      }
    }

    public function uploadProof(uploadProofRequest $request,$company){
        $online = online_invoice::where(['company_id'=>$company->id,'status'=>'PENDING'])->where('year','>=',Carbon::now()->year)->orderBy('id','desc')->first();
        if(!is_null($online))
        {
        $path = $request->file('fileupload')->store('proof','my_files');
        rtgs::firstOrcreate([
                      'company_id'=>Auth::user()->company->id,
                      'invoice_number'=>$online->invoice_number,
                      'type'=>'SUPPLIER',
                      'filename'=>$path,
                      'status'=>'PENDING',
                      'currency_id'=>$online->currency_id,
                      'name'=>$request->bank
                    ]);
                    transfers::firstOrCreate(['referencenumber'=>$request->refnumber],['referencenumber'=>$request->refnumber,'invoicenumber'=>$online->invoice_number]);
                    online_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->where('year','>=',Carbon::now()->year)->update(['status'=>'AWAITING']);
                return $this->success('Your transaction has been successfully saved awaiting varification of your reference number. Once it has been verified you will be notified via email',200);
                }else{
            return $this->error('No Pending Invoice Found',500);
        }
    }

    public function registration($company){
        $online = online_invoice::where(['company_id'=>$company->id,'status'=>'PENDING'])->where('year','>=',Carbon::now()->year)->orderBy('id','desc')->get();
        $users = User::wherecompany_id($company->id)->get();
        if(count($online)>0){
             $currency = $online[0]->currency->name;
             $accountnumber = $this->helper->get_account_number($currency);
             $invoice_number = $online[0]->invoice_number;
            
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
             $transfer = transfers::whereinvoicenumber($invoice_number)->with('transaction')->first();
             $source_id = !is_null($transfer) ? $transfer->transaction->id : 0;

             receipt::create(
                ['invoicenumber'=>$invoice_number,
                'receiptnumber'=>$receiptnumber,
                'source_id'=>$source_id,
                'company_id'=>$company->id,
                'method'=>'internal',
                'currency'=>$currency,
                'amount'=>$amount,
                'user_id'=>Auth::user()->id
                ]);

                
                $array = $this->helper->invoice_settlement_status($invoice_number);
                $message =$currency."".$amount."Successfully receipted. ".$array['message'];
                event(new paymentEvent($users,$message));
                if($array['status']=='success'){
                  $invoice = online_invoice::whereinvoice_number($invoice_number)->get()->map->formate();
                  return $this->success($array['message'],$invoice);
                }else{
                   $message =$currency."".$amount."was  successful ".$array['message'];
                   event(new paymentEvent($users,$message));
                   return $this->error($array['message'],500);

                }


         }
    }

    public function processAwaiting($company,$invoice_number)
    {
        $invoices = online_invoice::whereinvoice_number($invoice_number)->get();
        $users = User::wherecompany_id($company->id)->get();
        $grouped = $invoices->groupBy('invoice_number');
        $message="";
         foreach ($grouped as $key => $value) {
               $invoice_number = $key;          

              
               $totlReceipted = $value[0]->receipts->sum('amount');
               $totalDue = $value->sum('cost')-$totlReceipted;
               $currency = $value[0]->currency->name;
               $accountnumber = $this->helper->get_account_number($currency);
               $array = $this->helper->process_pending_transfers($invoice_number,$company->regnumber,$accountnumber);

               $balance = $this->helper->get_internal_funds($currency,$accountnumber,$company);
               if($balance>0){
                $amount =0;
                if($balance <= $totalDue){
                    $amount = $balance;
                }else{
                   $amount = $totalDue;
                }
   
                $receiptnumber = $this->helper->get_receipt_number();
                $transfer = transfers::whereinvoicenumber($invoice_number)->with('transaction')->first();

                $source_id = !is_null($transfer) ? !is_null($transfer->transaction) ? $transfer->transaction->id : 0 : 0;
   
                receipt::create(
                   ['invoicenumber'=>$invoice_number,
                   'receiptnumber'=>$receiptnumber,
                   'source_id'=>$source_id,
                   'company_id'=>$company->id,
                   'method'=>'internal',
                   'currency'=>$currency,
                   'amount'=>$amount,
                   'user_id'=>Auth::user()->id
                   ]);
   
                   
                   $array = $this->helper->invoice_settlement_status($invoice_number);
                   $message =$currency."".$amount."Successfully receipted. ".$array['message'];
                
                   if($array['status'] !='success'){                
                      $message =$currency."".$amount."was  successful ".$array['message'];               
   
                   }
                   event(new paymentEvent($users,$message));
                   
               }else{
                   $message="INSUFFICIENT";
               }
              
               
               return $this->success($message,$array);

         }
    }

    

    public function verifyReference($company, verifyRequest $request)
    {
        $invoices = online_invoice::whereinvoice_number($request->invoice_number)->get();       

         $transfer = $this->updateTransfer($request);
        $users = User::wherecompany_id($company->id)->get();
        $grouped = $invoices->groupBy('invoice_number');
       
        $message="";
         foreach ($grouped as $key => $value) {
               $invoice_number = $key;          

            
               $totlReceipted = $value[0]->receipts->sum('amount');
               $totalDue = $value->sum('cost')-$totlReceipted;
               $currency = $value[0]->currency->name;
               $accountnumber = $this->helper->get_account_number($currency);
               $array = $this->helper->process_pending_transfers($invoice_number,$company->regnumber,$accountnumber);

               $balance = $this->helper->get_internal_funds($currency,$accountnumber,$company);
               
               if($balance>0){
                $amount =0;
                if($balance <= $totalDue){
                    $amount = $balance;
                }else{
                   $amount = $totalDue;
                }
   
                $receiptnumber = $this->helper->get_receipt_number();
                $transfer = transfers::whereinvoicenumber($invoice_number)->with('transaction')->first();
                $source_id = !is_null($transfer) ? $transfer->transaction->id : 0;
   
                receipt::create(
                   ['invoicenumber'=>$invoice_number,
                   'receiptnumber'=>$receiptnumber,
                   'source_id'=>$source_id,
                   'company_id'=>$company->id,
                   'method'=>'internal',
                   'currency'=>$currency,
                   'amount'=>$amount,
                   'user_id'=>Auth::user()->id
                   ]);
   
                   
                   $array = $this->helper->invoice_settlement_status($invoice_number);
                   $message =$currency."".$amount."Successfully receipted. ".$array['message'];
                
                   if($array['status'] !='success'){                
                      $message =$currency."".$amount."was  successful ".$array['message'];               
   
                   }
                   event(new paymentEvent($users,$message));
                   
               }else{
                   $message="INSUFFICIENT";
               }
              
               
               return $this->success($message,$array);

         }
    }

    function updateTransfer($request){
        $transfer= null;
        if(!is_null($request->id)){
            $transfer = transfers::whereid($request->id)->first();
            $transfer->referencenumber = $request->refnumber;
            $transfer->save();
        }else{
            $transfer = new transfers();
            $transfer->invoicenumber = $request->invoicenumber;
            $transfer->referencenumber = $request->refnumber;
            $transfer->status = 'PENDING';
            $transfer->save();
        }
        return $transfer;
    }
}