<?php

namespace App\Http\Livewire\Registration;

use Livewire\Component;
use App\documents as AppDocuments;
use App\online_invoice;
use Illuminate\Support\Facades\Auth;
use serviceHelper;

class Category extends Component
{
    public $documents;
    public $invoices =[];
    public $paid;
    public function mount(){
        $company = Auth::user()->company;
        $this->documents =  AppDocuments::where(['locality'=>$company->locality,'accounttype_id'=>$company->accounttype_id])
                                        ->with(['company'=>function($query){
                                            $query->where('company_id','=',Auth::user()->company->id);
                                        }])
                                        ->get();
         if(!$this->checkDocuments($company)){
             session()->flash('error','PLEASE UPLOAD ALL REQUIRED DOCUMENTS');
             return redirect()->route('registration_documents');
         }

         $this->invoices = online_invoice::where(['company_id'=>$company->id,'status'=>'PENDING'])->with('category','currency')->get();
         $service = new serviceHelper();
         $this->paid = $service->get_total_Paid(); 

        }
    public function calculate_total(){
        $total = 0;
        if(count($this->invoices)>0)
         {
          foreach($this->invoices as $inv){
              $total += $inv->cost;
          }
         }
         return $total;
    }

    public function deleteItem($id){
        $company = Auth::user()->company;
        $item = online_invoice::whereid($id)->first();
        if(!is_null($item)){
            if($item->status==='PENDING'){
                 if(count($item->onlinepayments)==0 && is_null($item->rtgs) && count($item->internal_payments)==0)
                 {
                     $item->delete();
                 }
                 else{
                     session()->flash('error','Invoice has payment attempts please click on the Check payment on invoice number: '.$item->invoice_number);
                     return redirect()->route('payments');
                 }
            }
        }
        $this->invoices = online_invoice::where(['company_id'=>$company->id,'status'=>'PENDING'])->with('category','currency')->get();

    }

    function verify_transaction($inv){

    }
  
    public function render()
    {
        return view('livewire.registration.category');
    }


    function checkDocuments(){
        $total = 0 ;
     foreach($this->documents as $comp){
           if(!is_null($comp->company)){
               $total++;
           }
     }
     if(count($this->documents)==$total){
         return true;
     }
     else{
         return false;
     }
    }
}
