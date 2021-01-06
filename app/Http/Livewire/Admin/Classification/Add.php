<?php

namespace App\Http\Livewire\Admin\Classification;

use App\pclassification;
use App\pclassification_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Add extends Component
{
    public $name;

    public function add(){
        $this->validate(['name'=>'required|unique:pclassifications,name']);
        $class = pclassification::create(['name'=>$this->name]);
        pclassification_log::create(['pclassification_id'=>$class->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'CREATED','old_value'=>'','new_value'=>$class->toJSON()]);
        session()->flash('success','Successfully Created Classification');
        return redirect()->route('admin.classification');
    }
    public function render()
    {
        return view('livewire.admin.classification.add');
    }
}
