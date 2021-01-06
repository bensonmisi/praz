<?php

namespace App\Http\Livewire\Admin\Pclass;

use App\pclass;
use App\pclass_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Edit extends Component
{
    public $pclass;
    public $name;
    public function mount($id){
        $this->pclass = pclass::whereid($id)->first();
        $this->name = $this->pclass->name;
    }

    public function update(){
        $this->validate(['name'=>'required|unique:pclasses,id']);
        $this->pclass->name = $this->name;
        $this->pclass->save(); 
        pclass_log::create(['pclass_id'=>$this->pclass->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'UPDATED','old_value'=>'','new_value'=>$this->pclass->toJSON()]);
     
        session()->flash('success','Successfully Updated Class');
        return redirect()->route('admin.pclass');
    }
    public function render()
    {
        return view('livewire.admin.pclass.edit');
    }
}
