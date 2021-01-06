<?php

namespace App\Http\Livewire\Admin\Classification;

use App\pclassification;
use App\pclassification_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Edit extends Component
{
    public $classification;
    public $name;

    public function mount($id){
        $this->classification = pclassification::whereid($id)->first();
        $this->name = $this->classification->name;
    }

    public function update(){
      $this->validate(['name'=>'required|unique:pclassifications,id']);
      $this->classification->name = $this->name;
      $this->classification->save();
      pclassification_log::create(['pclassification_id'=>$this->classification->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'CREATED','old_value'=>'','new_value'=>$this->classification->toJSON()]);
    
      session()->flash('success','Successfully Updated Classification');
      return redirect()->route('admin.classification');
    }
    public function render()
    {
        return view('livewire.admin.classification.edit');
    }
}
