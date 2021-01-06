<?php

namespace App\Http\Livewire\Entity;

use Livewire\Component;
use Livewire\WithFileUploads;
use App\pnotice;
use App\currency;
use App\pbondcap;
use App\pclassification;
use Illuminate\Support\Facades\Auth;

class Edit extends Component
{
    use WithFileUploads;
    public $tendernumber;
    public $description;
    public $close_date;
    public $classifications =[];
    public $currencylist = [];
    public $currency;
    public $bidvalue;
    public $bidbond;
    public $classification;
    public $file;
    public $tender_id;

    public function mount($id)
    {
        $this->classifications = pclassification::get();
        $this->currencylist= currency::get();
      $tender = pnotice::where(['id'=>$id,'company_id'=>Auth::user()->company->id])->first();
      if(is_null($tender)){
          session()->flash('error','Tender Not Found');
          return redirect()->route('tenders');
      }else{
          $this->tendernumber = $tender->tendernumber;
          $this->description = $tender->description;
          $this->close_date = $tender->close_date;
          $this->currency = $tender->currency_id;
          $this->bidvalue = $tender->bidvalue;
          $this->bidbond = $tender->bidbond;
          $this->classification = $tender->pclassification_id;
          $this->tender_id = $tender->id;
      }
    }

    public function save(){
        $this->validate([
                         'tendernumber'=>'required|unique:pnotices,id',
                         'description'=>'required',
                         'close_date'=>'required|date',
                         'classification'=>'required',
                         'currency'=>'required',
                         'bidbond'=>'required|integer',
                         'bidvalue'=>'required|integer',
                         'file'=>'file|mimes:pdf'
                         ]);
       /** check if the  bid bond value is  less the  bidbond cap */

        $bidcap = pbondcap::first();

        $bid_bond_cap = $this->bidvalue * ($bidcap->value/100);
         if($this->bidbond <= $bid_bond_cap){
            $filename = $this->tendernumber.'.'.$this->file->extension();
            $file = $this->file->storePubliclyAs('tenders', $filename,'public');
             $tender = pnotice::whereid($this->tender_id)->first();
           
                            $tender->tendernumber=$this->tendernumber;
                            $tender->description=$this->description;
                            $tender->close_date=$this->close_date;
                            $tender->pclassification_id=$this->classification;
                            $tender->currency_id=$this->currency;
                            $tender->bidbond=$this->bidbond;
                            $tender->bidvalue=$this->bidvalue;
                            $tender->company_id=Auth::user()->company->id;
                            $tender->created_by = Auth::user()->id;
                            $tender->file=$file;
                            $tender->save();                           
                            session()->flash('success','SUCCESSFULLY CREATED YOUR TENDER IT NOW AWAITS  APPROVAL AND PUBLICATION');
   
            return redirect()->route('tenders');

        }else{
            session()->flash('error','Bid Bond Should be less than '.$bidcap->value.'% of the bid value. Bid bond inputed is above the cap');
          return;
        }
    }
    public function render()
    {
        return view('livewire.entity.edit');
    }
}
