<?php

namespace App\Http\Livewire\Admin\Fees\Spoc;

use App\currency;
use App\pspocfee;
use App\pspocfee_log;
use App\pthreshold;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Add extends Component
{
    public $currencies =[];
    public $thresholds = [];
    public $locality;
    public $currency;
    public $value;
    public $threshold;

    public function mount(){
        $this->currencies = currency::get();
        $this->thresholds = pthreshold::get();
    }

    public function add(){
         $this->validate(['threshold'=>'required','locality'=>'required','currency'=>'required','value'=>'required | integer']);
         if(!pspocfee::where(['pthreshold_id'=>$this->threshold,'locality'=>$this->locality])->exists()){
            $fee= pspocfee::create(['pthreshold_id'=>$this->threshold,'locality'=>$this->locality,'currency_id'=>$this->currency,'value'=>$this->value]);
            pspocfee_log::create(['pspocfee_id'=>$fee->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'CREATED','old_value'=>'','new_value'=>$fee->toJSON()]);
      
             session()->flash('success','SPOC fee Successfully Created');
             return redirect()->route('admin.fees.spoc');  
         }else{
            session()->flash('error','SPOC fee Already Created');
            return redirect()->route('admin.fees.spoc');  
         }
    }

    public function render()
    {
        return view('livewire.admin.fees.spoc.add');
    }
}
