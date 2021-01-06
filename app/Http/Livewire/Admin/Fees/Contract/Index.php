<?php

namespace App\Http\Livewire\Admin\Fees\Contract;

use App\pcontractfee;
use App\pcontractfee_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Index extends Component
{
    public $fees =[];

    public function mount(){
        $this->fees = pcontractfee::where('status','=','CREATED')->get();
    }

    public function remove($id){
        $fee = pcontractfee::whereid($id)->first();
        pcontractfee_log::create(['pcontractfee_id'=>$fee->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'DELETED','old_value'=>$fee->toJSON(),'new_value'=>'']);
        $fee->status = 'DELETED';
        $fee->save();
        session()->flash('success','Contract fee Successfully Deleted');
        $this->mount();
     
    }
    public function render()
    {
        return view('livewire.admin.fees.contract.index');
    }
}
