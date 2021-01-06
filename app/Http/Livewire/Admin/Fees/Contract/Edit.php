<?php

namespace App\Http\Livewire\Admin\Fees\Contract;

use App\currency;
use App\pcontractfee;
use App\pcontractfee_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Edit extends Component
{
    public $currencies =[];
    public $lower;
    public $upper;
    public $value;
    public $currency;
    public $contract;

    public function mount($id){
        $this->currencies = currency::get();
        $this->contract =  pcontractfee::whereid($id)->first();
        if(!is_null($this->contract))
         {
        $this->lower = $this->contract->lower;
        $this->upper = $this->contract->upper;
        $this->currency = $this->contract->currency_id;
        $this->value = $this->contract->value;
         }else{
             session()->flash('error','Contract fee not found');
             return redirect()->route('admin.fees.contract');
         }
    }

    public function update(){
        $this->validate(['currency'=>'required','lower'=>'required | integer ','upper'=>'required | integer | gt:lower','value'=>'required|integer']);
         $old = pcontractfee::whereid($this->contract->id)->first();
        $this->contract->lower = $this->lower;
        $this->contract->upper = $this->upper;
        $this->contract->currency_id = $this->currency;
        $this->contract->value = $this->value;
        $this->contract->save();
        pcontractfee_log::create(['pcontractfee_id'=>$this->contract->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'UPDATED','old_value'=>$old->toJSON(),'new_value'=>$this->contract->toJSON()]);
       
        session()->flash('success','Contract fee Successfully Updated');
        return redirect()->route('admin.fees.contract');
    }
    public function render()
    {
        return view('livewire.admin.fees.contract.edit');
    }
}
