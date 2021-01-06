<?php

namespace App\Http\Livewire\Admin\Threshold;

use App\currency;
use App\pclass;
use App\pclassification;
use App\pthreshold;
use App\pthreshold_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Add extends Component
{
    public $pclasses = [];
    public $pclassifications =[];
    public $currencies = [];

    public $pclass;
    public $pclassification;
    public $currency;
    public $value;
    public $locality;

    public function mount(){
        $this->pclasses = pclass::get();
        $this->pclassifications = pclassification::get();
        $this->currencies = currency::get();
    }

    public function add(){
        $this->validate(['currency'=>'required','pclass'=>'required','pclassification'=>'required','value'=>'required|integer']);
        // if(!pthreshold::where(['pclass_id'=>$this->pclass,'locality'=>$this->locality,'pclassification_id'=>$this->pclassification])->exists()){
           $class=  pthreshold::create(['currency_id'=>$this->currency,'pclass_id'=>$this->pclass,'locality'=>$this->locality,'pclassification_id'=>$this->pclassification,'value'=>$this->value]);
           pthreshold_log::create(['pthreshold_id'=>$class->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'CREATED','old_value'=>'','new_value'=>$class->toJSON()]);
            session()->flash('success','Threshold added');
            return redirect()->route('admin.threshold');
       /*  }else{
            session()->flash('error','Threshold already added');
            return redirect()->route('admin.classification');
        } */
    }
    public function render()
    {
        return view('livewire.admin.threshold.add');
    }
}
