<?php

namespace App\Http\Livewire\Admin\Fees\Establish;

use App\currency;
use App\pestabishmentfee;
use App\pestablishmentfee_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Add extends Component
{
    public $currencies =[];
    public $locality;
    public $lower;
    public $upper;
    public $value;
    public $currency;

    public function mount(){
        $this->currencies = currency::get();
    }

    public function add(){
        $this->validate(['currency'=>'required','lower'=>'required | integer ','upper'=>'required | integer | gt:lower','value'=>'required|integer','locality'=>'required']);
        if(!pestabishmentfee::where(['locality'=>$this->locality,'currency_id'=>$this->currency,'lower'=>$this->lower,'upper'=>$this->upper])->exists()){
          $fee= pestabishmentfee::create(['locality'=>$this->locality,'currency_id'=>$this->currency,'lower'=>$this->lower,'upper'=>$this->upper,'value'=>$this->value]);
           pestablishmentfee_log::create(['pestablishmentfee_id'=>$fee->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'CREATED','old_value'=>'','new_value'=>$fee->toJSON()]);
      
           session()->flash('success','Establishment fee Success Created');
           return redirect()->route('admin.fees.contract');
        }else{
            session()->flash('error','Establishment fee Already Created');
            return redirect()->route('admin.fees.establish');
        }
    }
    public function render()
    {
        return view('livewire.admin.fees.establish.add');
    }
}
