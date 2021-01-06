<?php

namespace App\Http\Livewire\Awards\Contract;

use App\currency;
use App\pawards;
use App\receipt;
use App\tender_invoice;
use App\tender_receipt;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use paymentHelper;
use serviceHelper;

class Show extends Component
{
    public $award;
    public $fee;
    public $wallet;
    public $currency;
    public $invoice_number;
    public function mount($id){
        $this->award = pawards::where(['id'=>$id,'company_id'=>Auth::user()->company->id])->first();
        $service = new serviceHelper();
        $paynow = new paymentHelper();  
        $this->fee = $service->getContractFee($id);
        $current ='ZWL';       
        $accountnumber='10721064850020';
      if(Auth::user()->company->locality ==='foreign'){
        $current ='USD';
        $accountnumber='10721064850040';
      }
      $this->currency = $current;
        $this->wallet = $service->myBalance($current,$accountnumber); 
      
        $this->invoice_number =  $paynow->invoice_number();
    }


    public function getCurr(){
            $current ='ZWL';
            if(Auth::user()->company->locality ==='foreign'){
              $current ='USD';
            }
            $data =  currency::wherename($current)->first();
            return $data;
          
    }
    public function getPaid(){
      $invoice = tender_invoice::where(['pnotice_id'=>$this->award->pnotice_id,'company_id'=>Auth::user()->company->id,'description'=>'CONTRACT'])->first();
      $total=0;
      if(!is_null($invoice)){
         $total = receipt::whereinvoicenumber($invoice->invoice_number)->wheretype('CONTRACT')->sum('amount');
      }
      return $total;
    }
    public function pay(){
      $amount = 0 ;
      $status="PENDING";
      $current =$this->award->notice->currency->name;
      $accountnumber='';
     if($current == 'ZWL'){
      $accountnumber='10721064850020';
     }else{
      $accountnumber='10721064850040';
     }
      $service = new serviceHelper();
     $this->nonrefundable = $service->myBalance($current,$accountnumber);
        $balance = $this->fee - $this->getPaid();
      if($this->nonrefundable >0){
      if( $this->nonrefundable >= $balance){
        $amount = $balance;
        $status ='PAID';
      }
      else{
        $amount = $this->nonrefundable;
      }
         $description = 'CONTRACT :'.$this->award->notice->tendernumber;
         $this->create_invoice('CONTRACT', $amount);
         $this->create_receipt('CONTRACT',$description,$amount,$status);
       $this->mount($this->award->id);
       session()->flash('success','SUCCESSFULLY MADE CONTRACT FEE PAYMENT');
     }
     else{
       session()->flash('error','Insufficent amount in your internal wallet please top up');
       return;
     }
    }
    public function create_invoice($description,$cost){
      if(!tender_invoice::where(['pnotice_id'=>$this->award->notice->id,'company_id'=>Auth::user()->company->id,'description'=>$description])->exists())
      {
      tender_invoice::create(['pnotice_id'=>$this->award->notice->id,
                                  'invoice_number'=>$this->invoice_number,
                                  'company_id'=>Auth::user()->company->id,
                                  'currency_id'=>$this->award->notice->currency_id,
                                  'description'=>$description,
                                  'year'=>Carbon::now()->year,
                                  'cost'=>$cost,
                                  'status'=>'PENDING',
                                  'user_id'=>Auth::user()->company->id
                                  ]);
      }
    }
  
    public function create_receipt($type,$description,$cost,$status){
      $paynow = new paymentHelper();
      $service = new serviceHelper();
      $receiptnumber = $paynow->receipt_number();
      receipt::create(['invoicenumber'=>$this->invoice_number,'receiptnumber'=>$receiptnumber,'type'=>$type,'description'=>$description,'company_id'=>Auth::user()->company->id,'method'=>'internal','currency'=>$this->currency,'amount'=>$cost,'user_id'=>Auth::user()->id]);
       if($status=='PAID')
       {
       tender_invoice::where(['pnotice_id'=>$this->award->notice->id,'invoice_number'=>$this->invoice_number])->update(['status'=>$status]);
       }
    }
    public function render()
    {
        return view('livewire.awards.contract.show');
    }
}
