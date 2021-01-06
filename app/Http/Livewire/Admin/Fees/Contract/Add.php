<?php

namespace App\Http\Livewire\Admin\Fees\Contract;

use App\currency;
use App\pcontractfee;
use App\pcontractfee_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Add extends Component
{
   public $currencies =[];
   public $lower;
   public $upper;
   public $value;
   public $currency;

   public function mount(){
       $this->currencies = currency::get();
   }

   public function add(){
        $this->validate(['currency'=>'required','lower'=>'required | integer ','upper'=>'required | integer | gt:lower','value'=>'required|integer']);
        if(!pcontractfee::where(['currency_id'=>$this->currency,'lower'=>$this->lower,'upper'=>$this->upper])->exists()){
           $fee = pcontractfee::create(['currency_id'=>$this->currency,'lower'=>$this->lower,'upper'=>$this->upper,'value'=>$this->value,'status'=>'CREATED']);
           pcontractfee_log::create(['pcontractfee_id'=>$fee->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'CREATED','old_value'=>'','new_value'=>$fee->toJSON()]);
           session()->flash('success','Contract fee Successfully Created');
            return redirect()->route('admin.fees.contract');
        }else{
            session()->flash('error','Contract fee Already Created');
            return redirect()->route('admin.fees.contract');
        }
   }


    public function render()
    {
        return view('livewire.admin.fees.contract.add');
    }
}
