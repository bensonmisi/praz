<?php

namespace App\Http\Livewire\Registration;

use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use paymentHelper;
use App\online_invoice;
use App\onlinepayments;
use serviceHelper;

class Paynow extends Component
{
 public $invoicenumber;
 public $amount ;


    public function sendPayment(){
      $this->validate(['amount'=>'required']);
      $paynow = new paymentHelper();
      $service = new serviceHelper();
      $company = Auth::user()->company;
      $invoice = online_invoice::where(['company_id'=>$company->id,'status'=>'PENDING'])->first();
      if(!is_null($invoice))
      {
        $balance = $service->get_balance();
        $this->invoicenumber = $invoice->invoice_number;
        if($this->amount > $balance){
               session()->flash('error','You cannot enter amount greater than: $'.$balance);
               return;
        }else{ 
       $response = $paynow->paynowTransaction($this->invoicenumber,'admin@biznotifier.co.zw',$this->amount);
       if(\strtoupper($response->data()['status']) == \strtoupper('ok'))
       {
        
       onlinepayments::create(['invoice_number'=>$this->invoicenumber,'company_id'=>$company->id,'poll_url'=>$response->pollUrl(),'amount'=>$this->amount,'mode'=>'paynow','status'=>'PENDING']);
        return redirect()->away($response->redirectUrl());
       }else{
         session()->flash('error',$response->data()['error']);
         return;
       }
      }
      }else{
        session()->flash('error','No invoice found please try again');
      return redirect()->route('registration_payment');
      }
    
    }
    public function render()
    {
        return view('livewire.registration.paynow');
    }
}
