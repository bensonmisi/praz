<?php

namespace App\Http\Livewire\Admin\Fees\Establish;

use App\pestabishmentfee;
use App\pestablishmentfee_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Index extends Component
{
    public $fees =[];

    public function mount(){
        $this->fees = pestabishmentfee::wherestatus('CREATED')->get();
    }

    public function remove($id){
        $fee = pestabishmentfee::whereid($id)->first();
        pestablishmentfee_log::create(['pestablishmentfee_id'=>$fee->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'DELETED','old_value'=>$fee->toJSON(),'new_value'=>'']);
        $fee->status = 'DELETED';
        $fee->save();
        session()->flash('success','Establishment fee Successfully Deleted');
        $this->mount();
    }
    public function render()
    {
        return view('livewire.admin.fees.establish.index');
    }
}
