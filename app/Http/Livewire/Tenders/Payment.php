<?php

namespace App\Http\Livewire\Tenders;

use App\banktransactions;
use App\bidbond;
use App\currency;
use App\pnotice;
use App\tender_invoice;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use App\invoicenumber;
use App\onlinepayments;
use App\receipt;
use App\tender_receipt;
use Carbon\Carbon;
use paymentHelper;
use serviceHelper;

class Payment extends Component
{
  public $notice;
  public $establishmentfee=0;
  public $spocfee=0;
  public $establishmentpaid=false;
  public $spocpaid = false;
  public $bidbondpaid = false;
  public $nonrefundable = 0;
  public $refundable = 0;
  public $invoice_number;
  public $step ="1";
  public $invoiceData=[];
  public $currencylist=[];
  public $currency;
  public $invoice;
  public $paid;
  public $refnumber;


  public function mount($id){
    $service = new serviceHelper(); 
    $paynow = new paymentHelper();  
    $this->notice = pnotice::whereid($id)->with('classification','currency')->orderBy('id','desc')->first(); 
    $date = $this->checkCloseDate($this->notice->close_date);
   if($date){  
    $this->establishmentfee = $service->getEstablishmentFee($id);
    $this->spocfee = $service->getSpocFee($id);  
    $this->invoice = tender_invoice::wherepnotice_id($this->notice->id)->first();  
    $service = new serviceHelper();
    $current ='ZWL';
   
    $accountnumber='10721064850020';
  if(Auth::user()->company->locality ==='foreign'){
    $current ='USD';
    $accountnumber='10721064850040';
  }
    $this->nonrefundable = $service->myBalance($current,$accountnumber); 
    if(!is_null($this->invoice))
       {
        $this->invoice_number = $this->invoice->invoice_number;
         if($this->invoice->currency->name=='USD')
         {
          $accountnumber='10721064850040';
         }
          $this->currency = $this->invoice->currency->name;
          $this->nonrefundable = $service->myBalance($current,$accountnumber); 
       }else{
    $this->currency = $current;
    $this->invoice_number =  $paynow->invoice_number();
       }
       if($this->spocfee > 0){
           $paid = $service->getPayment($this->invoice_number,'SPOC');
           $this->paid = $paid;
           if($this->spocfee <= $paid){
             $this->step ="2";
             $paid = $service->getPayment($this->invoice_number,'ESTABLISHMENT');
              $this->paid = $paid;
              $this->currency = $this->notice->currency->name;
           }else{
              $this->step ="1";
              return;
           }
       }
       if($this->establishmentfee >0){
         $this->step ='2';
         $paid = $service->getPayment($this->invoice_number,'ESTABLISHMENT');
          $this->paid = $paid;
          $this->currency = $this->notice->currency->name;
         if($this->establishmentfee <= $paid){
           $this->step ="3";
         }else{
           return;
         }
       }

       if($this->notice->bidbond > 0){
         $accountnumber="";
         if($current=='ZWL'){
           $accountnumber='10721064850030'; 
         }else{
           $accountnumber='10721064850040';
         }
        $this->nonrefundable = $service->myrefundabeBalance($current,$accountnumber); 
        $this->step ='3';
        $paid = $service->getPayment($this->invoice_number,'BIDBOND');
         $this->paid = $paid;
         $this->currency = $this->notice->currency->name;
        if($this->notice->bidbond <= $paid){
          $this->step ="4";
        }else{
          return;
        }
      }
    }else{
      session()->flash('error','Notice has already closed');
      return redirect()->route('tendershow',$this->notice->id);
    }
  }

  public function checkCloseDate($date){
    $date = Carbon::parse($date);
    return $date->greaterThanOrEqualTo(Carbon::now());
  }
  public function paySPOC(){
   $amount = 0 ;
   $status="PENDING";
   if($this->nonrefundable >0){
   if( $this->nonrefundable >= $this->spocfee){
     $amount = $this->spocfee;
     $status ='PAID';
   }
   else{
     $amount = $this->nonrefundable;
   }
   $description = 'SPOC FEE :'.$this->notice->tendernumber;
      $this->create_invoice('SPOC', $amount);
      $this->create_receipt('SPOC',$description,$amount,$status);
    $this->mount($this->notice->id);
    session()->flash('success','SUCCESSFULLY MADE SPOC FEE PAYMENT');
  }
  else{
    session()->flash('error','Insufficent amount in your internal wallet please top up');
    return;
  }
  }
  public function payESTABLISHMENT(){
    $amount = 0 ;
    $status="PENDING";
    $current =$this->notice->currency->name;
    $accountnumber='';
   if($current == 'ZWL'){
    $accountnumber='10721064850020';
   }else{
    $accountnumber='10721064850040';
   }
    $service = new serviceHelper();
   $this->nonrefundable = $service->myBalance($current,$accountnumber);
    if($this->nonrefundable >0){
    if( $this->nonrefundable >= $this->establishmentfee){
      $amount = $this->establishmentfee;
      $status ='PAID';
    }
    else{
      $amount = $this->nonrefundable;
    }
       $description = 'ESTABLISHMENT FEE :'.$this->notice->tendernumber;
       $this->create_invoice('ESTABLISHMENT', $amount);
       $this->create_receipt('ESTABLISHMENT',$description,$amount,$status);
     $this->mount($this->notice->id);
     session()->flash('success','SUCCESSFULLY MADE ESTABLISHMENT FEE PAYMENT');
   }
   else{
     session()->flash('error','Insufficent amount in your internal wallet please top up');
     return;
   }
   }
   public function payBind(){
    $amount = 0 ;
    $status="PENDING";
    $current =$this->notice->currency->name;
    $accountnumber='';
   if($current == 'ZWL'){
    $accountnumber='10721064850030';
   }else{
    $accountnumber='10721064850040';
   }
    $service = new serviceHelper();
   $this->nonrefundable = $service->myrefundabeBalance($current,$accountnumber);
    if($this->nonrefundable >0){
    if( $this->nonrefundable >= $this->notice->bidbond){
      $amount =  $this->notice->bidbond;
      $status ='PAID';
    }
    else{
      $amount = $this->nonrefundable;
    }
       $description = 'BIDBOND :'.$this->notice->tendernumber;
       $this->create_invoice('BIDBOND', $amount);
       $this->create_receipt_bond('BIDBOND',$description,$amount,$status);
     $this->mount($this->notice->id);
     session()->flash('success','SUCCESSFULLY MADE BIDBOND PAYMENT');
   }
   else{
     session()->flash('error','Insufficent amount in your internal wallet please top up');
     return;
   }
   }
 
 

  public function create_invoice($description,$cost){
    if(!tender_invoice::where(['pnotice_id'=>$this->notice->id,'company_id'=>Auth::user()->company->id,'description'=>$description])->exists())
    {
    tender_invoice::create(['pnotice_id'=>$this->notice->id,
                                'invoice_number'=>$this->invoice_number,
                                'company_id'=>Auth::user()->company->id,
                                'currency_id'=>$this->notice->currency_id,
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
     tender_invoice::where(['pnotice_id'=>$this->notice->id,'invoice_number'=>$this->invoice_number])->update(['status'=>$status]);
     }
  }
  
  public function create_receipt_bond($type,$description,$cost,$status){
    $paynow = new paymentHelper();
    $service = new serviceHelper();
    $receiptnumber = $paynow->receipt_number();
    receipt::create(['invoicenumber'=>$this->invoice_number,'receiptnumber'=>$receiptnumber,'type'=>$type,'description'=>$description,'company_id'=>Auth::user()->company->id,'method'=>'internal','currency'=>$this->currency,'amount'=>$cost,'user_id'=>Auth::user()->id]);
      $service->saveBid($this->invoice_number,$receiptnumber,$this->notice->id);
    if($status=='PAID')
     {
     tender_invoice::where(['pnotice_id'=>$this->notice->id,'invoice_number'=>$this->invoice_number])->update(['status'=>$status]);
     }
  }

  public function  changeCurrency($id){
    $service = new serviceHelper(); 
    $current="ZWL";
    $accountnumber='10721064850020';
    if($id==1)
    {
      $current ='USD';
      $accountnumber='10721064850040';
      $this->establishmentfee= $service->getEstablishmentFeeExchange($this->notice->id);
      $this->spocfee = $service->getSpocFeeExchange($this->notice->id);
      $this->nonrefundable = $service->myBalance($current,$accountnumber); 

    }else{
      $current="ZWL";
    $this->establishmentfee = $service->getEstablishmentFee($this->notice->id);
    $this->spocfee = $service->getSpocFee($this->notice->id); 
    $this->nonrefundable = $service->myBalance($current,$accountnumber); 
  }  
    $this->currency = $current;
  }
    public function getTotal(){
    return $this->establishmentfee + $this->spocfee;
    }
    public function getPaid(){
      return  tender_receipt::whereinvoicenumber($this->invoice_number)->sum('amount');
    }

    public function search(){
      $this->validate(['refnumber'=>'required']);
      $bank = banktransactions::where(['source_reference'=>$this->refnumber])->first();
    
      if(!is_null($bank)){
          $bank->customer_number = Auth::user()->company->regnumber;
          $bank->save();       
          $this->mount($this->notice->id);
          session()->flash('success','Successfully updated your internal balance please proceed with  your payments');
          return ;
      }else{
          session()->flash('error','reference number not found');
          return ; 
      }
  }
  public function checkpayment($id,$name){

    return  tender_invoice::where(['pnotice_id'=>$id,'company_id'=>Auth::user()->company->id,'description'=>$name,'status'=>'PAID'])->first();

}
    public function render()
    {
        return view('livewire.tenders.payment');
    }
}
