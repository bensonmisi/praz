<?php

namespace App\Http\Livewire\Admin\Fees\Spoc;

use App\currency;
use App\pspocfee;
use App\pspocfee_log;
use App\pthreshold;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Edit extends Component
{
    public $currencies =[];
    public $thresholds = [];
    public $locality;
    public $currency;
    public $value;
    public $fee;
    public $threshold;

    public function mount($id){
    $this->fee = pspocfee::whereid($id)->first();
    $this->currencies = currency::get();
    $this->thresholds = pthreshold::get();
    if(!is_null($this->fee)){
      $this->locality = $this->fee->locality;
      $this->currency = $this->fee->currency_id;
      $this->value = $this->fee->value;
      $this->threshold = $this->fee->pthreshold_id;
     }else{
        session()->flash('error','SPOC fee Not found');
        return redirect()->route('admin.fees.spoc');
     }
    }

    public function update(){
        $this->validate(['threshold'=>'required','locality'=>'required','currency'=>'required','value'=>'required | integer']);
        $old = pspocfee::whereid($this->fee->id)->first();
        $this->fee->locality = $this->locality;
        $this->fee->pthreshold_id = $this->threshold;
        $this->fee->currency_id = $this->currency;
        $this->fee->value = $this->value;
        $this->fee->save();
        pspocfee_log::create(['pspocfee_id'=>$this->fee->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'UPDATED','old_value'=>$old->toJSON(),'new_value'=>$this->fee->toJSON()]);
      
        session()->flash('success','SPOC fee Updated');
        return redirect()->route('admin.fees.spoc');
    }
    public function render()
    {
        return view('livewire.admin.fees.spoc.edit');
    }
}
