<?php

namespace App\Http\Livewire\Tenders;

use Livewire\Component;
use App\pnotice;
use App\tender_invoice;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use serviceHelper;

class Show extends Component
{
    public $notice;
    public $establishmentfee=0;
    public $spocfee=0;
    public $establishmentpaid=false;
    public $spocpaid = false;
    public $bidbondpaid = false;

    public function mount($id){
        $service = new serviceHelper();
        $this->notice = pnotice::whereid($id)->with('classification','currency')->orderBy('id','desc')->first();
       
        $this->establishmentfee = $service->getEstablishmentFee($id);
        $this->spocfee = $service->getSpocFee($id);
        $this->establishmentpaid = $this->checkpayment($id,'ESTABLISHMENT');
        $this->spocpaid = $this->checkpayment($id,'SPOC');
        $this->bidbondpaid = $this->checkpayment($id,'BIDBOND');
        
        
    }

    public function checkCloseDate($date){
        $date = Carbon::parse($date);
        return $date->greaterThanOrEqualTo(Carbon::now());
      }
     public function checkpayment($id,$name){

         return  tender_invoice::where(['pnotice_id'=>$id,'company_id'=>Auth::user()->company->id,'description'=>$name,'status'=>'PAID'])->first();

     }

    
    public function render()
    {
        return view('livewire.tenders.show');
    }
}
