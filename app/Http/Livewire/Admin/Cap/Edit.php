<?php

namespace App\Http\Livewire\Admin\Cap;

use App\pbondcap;
use App\pbondcap_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Edit extends Component
{
    public $cap;
    public $value;

    public function mount($id){
        $this->cap =  pbondcap::whereid($id)->first();
        $this->value = $this->cap->value;        
    }

    public function update(){
        $this->validate(['value'=>'required|integer']);
        $this->cap->value = $this->value;
        $this->cap->save();
        pbondcap_log::create(['pbondcap_id'=>$this->cap->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'UPDATED','old_value'=>'','new_value'=>$this->cap->toJSON()]);
       session()->flash('success','Successfully Changed Bid Bond Cap');
        return redirect()->route('admin.cap');
    }
    public function render()
    {
        return view('livewire.admin.cap.edit');
    }
}
