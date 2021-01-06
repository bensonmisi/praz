<?php

namespace App\Http\Livewire\Admin\Threshold;

use Livewire\Component;
use App\pclassification;
use App\pclass;
use App\currency;
use App\pthreshold;
use App\pthreshold_log;
use Illuminate\Support\Facades\Auth;

class Edit extends Component
{
    public $pclasses = [];
    public $pclassifications =[];
    public $currencies = [];

    public $pclass;
    public $pclassification;
    public $currency;
    public $value;
    public $threshold;
    public $locality;

    public function mount($id){
        $this->pclasses = pclass::get();
        $this->pclassifications = pclassification::get();
        $this->currencies = currency::get();
        $this->threshold = pthreshold::whereid($id)->first();
        $this->pclass = $this->threshold->pclass_id;
        $this->pclassification = $this->threshold->pclassification_id;
        $this->currency = $this->threshold->currency_id;
        $this->value = $this->threshold->value;
        $this->locality = $this->threshold->locality;
    }

    public function update(){
        $this->validate(['currency'=>'required','pclass'=>'required','pclassification'=>'required','value'=>'required|integer']);
        $this->threshold->pclass_id = $this->pclass;
        $this->threshold->pclassification_id = $this->pclassification;
        $this->threshold->value = $this->value;
        $this->threshold->currency_id = $this->currency;
        $this->threshold->save();
        pthreshold_log::create(['pthreshold_id'=>$this->threshold->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'UPDATED','old_value'=>'','new_value'=>$this->threshold->toJSON()]);   
        session()->flash('success','Threshold Updated');
        return redirect()->route('admin.threshold');
    }
    public function render()
    {
        return view('livewire.admin.threshold.edit');
    }
}
