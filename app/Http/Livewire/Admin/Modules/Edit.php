<?php

namespace App\Http\Livewire\Admin\Modules;

use App\modules;
use Livewire\Component;

class Edit extends Component
{
    public $module;
    public $icon;
    public $name;
    public function mount($id){
        $this->module = modules::whereid($id)->first();
        $this->icon = $this->module->icon;
        $this->name = $this->module->name;
    }

    public function update(){
        $this->validate(['icon'=>'required','name'=>'required']);
        $module = modules::whereid($this->module->id)->first();
        $module->icon = $this->icon;
        $module->name = $this->name;
        $module->save();
        session()->flash('success','Successfully Updated Module');
        return redirect()->route('admin.modules');
    }
    public function render()
    {
        return view('livewire.admin.modules.edit');
    }
}
