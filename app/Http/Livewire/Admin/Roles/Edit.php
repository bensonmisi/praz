<?php

namespace App\Http\Livewire\Admin\Roles;

use App\roles;
use Livewire\Component;

class Edit extends Component
{

    public $name;
    public $rid;

    public function mount($id){
     $role = roles::whereid($id)->first();
     if(!is_null($role)){
        $this->name = $role->name;
        $this->rid = $role->id;
     }else{
     return redirect()->back()->with('error','Role Not Found');
     }
    }

    public function update(){
        $this->validate(['name'=>'required|unique:roles,name']);

        $role =  roles::whereid($this->rid)->first();
        $role->name =$this->name;
        $role->save(); 
        session()->flash('success','Role Successfully Updated') ;   
        return redirect()->route('admin.roles');
    }
    public function render()
    {
        return view('livewire.admin.roles.edit');
    }
}
