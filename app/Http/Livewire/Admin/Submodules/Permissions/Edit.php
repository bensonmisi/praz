<?php

namespace App\Http\Livewire\Admin\Submodules\Permissions;

use App\permissions;
use Livewire\Component;

class Edit extends Component
{
    public $permission;
    public $name;

    public function mount($id){
        $this->permission = permissions::whereid($id)->first();
        $this->name = $this->permission->name;
    }

    public function update(){
        $this->validate(['name'=>'required|unique:permissions']);
        $this->permission->name = $this->name;
        $this->permission->save();
        session()->flash('success','Successfully Updated Permission');
        return redirect()->route('can_view_submodule',$this->permission->submodule->module->id);
    }
    public function render()
    {
        return view('livewire.admin.submodules.permissions.edit');
    }
}
