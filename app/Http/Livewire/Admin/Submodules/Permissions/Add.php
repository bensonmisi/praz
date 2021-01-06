<?php

namespace App\Http\Livewire\Admin\Submodules\Permissions;

use App\permissions;
use App\submodules;
use Livewire\Component;

class Add extends Component
{
    public $submodule;
    public $name;

    public function mount($id){
        $this->submodule = submodules::whereid($id)->first();
    }

    public function add(){
        $this->validate(['name'=>'required|unique:permissions']);
        permissions::create(['submodule_id'=>$this->submodule->id,'name'=>$this->name]);
        session()->flash('success','Successfully Created Permission');
        return redirect()->route('can_view_submodule',$this->submodule->module->id);

    }
    public function render()
    {
        return view('livewire.admin.submodules.permissions.add');
    }
}
