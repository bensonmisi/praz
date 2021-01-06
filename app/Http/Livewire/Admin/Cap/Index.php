<?php

namespace App\Http\Livewire\Admin\Cap;

use App\pbondcap;
use App\pbondcap_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Index extends Component
{
    public $caps;

    public function mount(){
        $this->caps = pbondcap::wherestatus('CREATED')->get();
    }

    public function remove($id){
        $cap = pbondcap::whereid($id)->first();
        pbondcap_log::create(['pbondcap_id'=>$cap->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'DELETED','old_value'=>$cap->toJSON(),'new_value'=>'']);
        $cap->status ='DELETED';
        $cap->save();
        session()->flash('success','Successfully Deleted Cap');
        $this->mount();
    }
    public function render()
    {
        return view('livewire.admin.cap.index');
    }
}
