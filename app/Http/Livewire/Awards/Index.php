<?php

namespace App\Http\Livewire\Awards;

use App\contract_invoice;
use App\pawards;
use App\invoicenumber;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Carbon\Carbon;
use serviceHelper;

class Index extends Component
{
    public $awards =[];
    public $award;
    public $showlist = true;
    public $showform = false;
    public $showconfirm = false;
    public $showinvoice= false;
    public $award_id;
    public $fee;
    public $invoice;
    public function mount(){
    $awards = pawards::wherecompany_id(Auth::user()->company->id)->get();
    $this->awards = $awards;
   }

    public function getFee($id){
        $service = new serviceHelper();
        $this->showlist = false;
        $this->showinvoice = true;
        $award = pawards::whereid($id)->first();
        $invoice =  contract_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->first();
        $fee = $service->getContractFee($id);
        $currency = $service->getCurrency();
        if(!$invoice)
           {
            $number = invoicenumber::orderBy('id','desc')->first();
            $final ='';
             $final = 'inv'.Carbon::now()->year.''.Carbon::now()->month.''.$number->invoice;
             $number->invoice = $number->invoice+1;
              $number->save();
             $invoice = contract_invoice::create(['paward_id'=>$id,'invoice_number'=>$final,'company_id'=>Auth::user()->company->id,'currency_id'=>$currency,'description'=>$award->description,'year'=>Carbon::now()->year,'cost'=>$fee,'status'=>'PENDING','user_id'=>Auth::user()->id]);
           }else{
            session()->flash('error','A PENDING INVOICE AS BEEN FOUND. PLEASE SETTLE IT BEFORE ADDING ANOTHER ENTRY ');
        }

           $this->invoice = $invoice;


    }
  
    public function render()
    {
        return view('livewire.awards.index');
    }
}
