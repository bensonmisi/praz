<?php

namespace App\Http\Livewire\Admin\Modules;

use App\modules;
use Livewire\Component;

class Add extends Component
{
    public $icon ;
    public $name ;

   public function add()
   {
       $this->validate(['icon'=>'required','name'=>'required|unique:modules,name']);
       modules::create(['icon'=>$this->icon,'name'=>$this->name]);
       session()->flash('success','Successfully Created Module');
       return redirect()->route('admin.modules');
   }
    public function render()
    {
        return view('livewire.admin.modules.add');
    }
}
