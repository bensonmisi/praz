<?php

namespace App\Http\Livewire\Admin\Pclass;

use App\pclass;
use App\pclass_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Add extends Component
{
    public $name;
   

    public function add(){
        $this->validate(['name'=>'required|unique:pclasses,name']);
        $class= pclass::create(['name'=>$this->name]);
        pclass_log::create(['pclass_id'=>$class->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'CREATED','old_value'=>'','new_value'=>$class->toJSON()]);
     
        session()->flash('success','Successfully Created Class');
        return redirect()->route('admin.pclass'); 
    }
    public function render()
    {
        return view('livewire.admin.pclass.add');
    }
}
