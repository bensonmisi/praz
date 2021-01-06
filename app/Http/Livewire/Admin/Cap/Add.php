<?php

namespace App\Http\Livewire\Admin\Cap;

use App\pbondcap;
use App\pbondcap_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Add extends Component
{
    public $cap;

    public function add(){
        $this->validate(['cap'=>'required']);

        $cap = pbondcap::create(['value'=>$this->cap]);
         pbondcap_log::create(['pbondcap_id'=>$cap->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'CREATED','old_value'=>'','new_value'=>$cap->toJSON()]);
       session()->flash('success','Successfully Created New Bid Bond Cap');
       return redirect()->route('admin.cap');
    
    }
    public function render()
    {
        return view('livewire.admin.cap.add');
    }
}
