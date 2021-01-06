<?php

namespace App\Http\Livewire\Admin\Roles;

use App\roles;
use Livewire\Component;

class Add extends Component
{
    public $name;

    public function add(){
        $this->validate(['name'=>'required|unique:roles,name']);
        roles::create(['name'=>$this->name]); 
        session()->flash('success','Role Successfully Created') ;     
        return redirect()->route('admin.roles');
    }
    public function render()
    {
        return view('livewire.admin.roles.add');
    }
}
