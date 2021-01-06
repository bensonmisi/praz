<?php

namespace App\Http\Livewire\Admin\Submodules;

use App\modules;
use App\permissions;
use Livewire\Component;

class Index extends Component
{
    public $module;
    public $showform;
    public $subid;
    public $name;
    public function mount($id){
        $this->module = modules::whereid($id)->with('submodules')->first();
    }

    public function add($id)
    {
     $this->subid = $id;
     $this->showform = true;
    }

    public function save(){
        $this->validate(['name'=>'required|unique:permissions,name']);
        permissions::create(['name'=>$this->name,'submodule_id'=>$this->subid]);
        session()->flash('success','Successfully Created Permission');
        $this->showform = false;
        $this->module = modules::whereid($this->module->id)->with('submodules')->first();
    }

    public function remove($id){
        $permission = permissions::whereid($id)->first();
        if(count($permission->roles)==0)
        {
        $permission->delete();
        session()->flash('success','Successfully Deleted Permission');
        $this->module = modules::whereid($this->module->id)->with('submodules')->first();
        }
        else{
            session()->flash('error','Permission already assigned to role');  
            return; 
        }

    }
    public function render()
    {
        return view('livewire.admin.submodules.index');
    }
}
