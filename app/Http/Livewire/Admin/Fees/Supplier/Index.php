<?php

namespace App\Http\Livewire\Admin\Fees\Supplier;

use App\pricing;
use App\pricing_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Index extends Component
{
    public $prices =[];
    public function mount(){
        $this->prices = pricing::where(['status'=>'CREATED'])->get();
    }

    public function remove($id){
        $pricing = pricing::whereid($id)->first();
        pricing_log::create(['pricing_id'=>$pricing->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'DELETED','old_value'=>$pricing->toJSON(),'new_value'=>$pricing->toJSON()]);
        $pricing->status="DELETED";
        $pricing->save();
        session()->flash('success','Pricing Successfully Deleted');
        $this->mount();
    }
    public function render()
    {
        return view('livewire.admin.fees.supplier.index');
    }
}
