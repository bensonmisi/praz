<?php

namespace App\Http\Livewire\Admin\Fees\Establish;

use App\currency;
use App\pestabishmentfee;
use App\pestablishmentfee_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Edit extends Component
{
    public $currencies =[];
    public $locality;
    public $lower;
    public $upper;
    public $value;
    public $currency;
    public $fee;
    public function mount($id){
        $this->currencies = currency::get();
        $this->fee = pestabishmentfee::whereid($id)->first();
        if(!is_null($this->fee)){
            $this->locality = $this->fee->locality;
            $this->lower = $this->fee->lower;
            $this->upper = $this->fee->upper;
            $this->currency = $this->fee->currency_id;
            $this->value = $this->fee->value;
        }else{
            session()->flash('error','Establishment fee Found');
            return redirect()->route('admin.fees.establish');
        }
    
    }

    public function update(){
        $this->validate(['currency'=>'required','lower'=>'required | integer ','upper'=>'required | integer | gt:lower','value'=>'required|integer']);
         $old = pestabishmentfee::whereid($this->fee->id)->first(); 
        $this->fee->locality=$this->locality;
           $this->fee->currency_id=$this->currency;
           $this->fee->lower=$this->lower;
           $this->fee->upper=$this->upper;
           $this->fee->value=$this->value;
           $this->fee->save();
           pestablishmentfee_log::create(['pestablishmentfee_id'=>$this->fee->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'UPDATED','old_value'=>$old->toJSON(),'new_value'=>$this->fee->toJSON()]);
      
           session()->flash('success','Establishment fee Success Updated');
           return redirect()->route('admin.fees.establish');
        
    }
    public function render()
    {
        return view('livewire.admin.fees.establish.edit');
    }
}
