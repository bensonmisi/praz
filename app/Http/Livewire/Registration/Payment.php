<?php

namespace App\Http\Livewire\Registration;

use App\online_invoice;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use serviceHelper;

class Payment extends Component
{
    public $amount;
    public $paid;
    public $balance;

    public function mount(){
        $this->amount = online_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->sum('cost');
        if($this->amount==0){
            session()->flash('error','Select category you wish to register');
            return redirect()->route('registration_category');
        }
         $service = new serviceHelper();
         $current ='ZWL';
       
         $accountnumber='10721064850020';
         if(Auth::user()->company->locality ==='foreign'){
           $current ='USD';
           $accountnumber='10721064850040';
         }
       $this->currency = $current;
         $this->balance = $service->myBalance($current,$accountnumber); 
    }

    public function getPaid()
    {
        $invoice = online_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->with(['onlinepayments'=>function($query){
            $query->where('status','=','PAID');
        },'rtgs'=>function($query){
                $query->where('status','=','PAID');
        }])->first();
          $paid = 0;
        if(!is_null($invoice)){
            if(count($invoice->onlinepayments)>0){
             foreach ($invoice->onlinepayments as $key => $value) {
                 $paid = $paid+$value->amount;
             }
            }
            if(count($invoice->internal_payments)>0){
                foreach ($invoice->internal_payments as $key => $value) {
                  $paid = $paid+$value->amount;
              }
              }

            if(!is_null($invoice->rtgs)){
                
                    $paid = $paid + $invoice->rtgs->amount;
                
            }
        }
        return $paid;
    }
    public function render()
    {
        return view('livewire.registration.payment');
    }
}
