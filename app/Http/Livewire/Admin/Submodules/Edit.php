<?php

namespace App\Http\Livewire\Admin\Submodules;

use App\submodules;
use Livewire\Component;

class Edit extends Component
{
    public $module;
    public $submodule;
    public $name;
    public $icon;
    public $url;

    public function mount($id){
        $this->submodule = submodules::whereid($id)->first();
        $this->module = $this->submodule->module;
        $this->name = $this->submodule->name;
        $this->icon = $this->submodule->icon;
        $this->url = $this->submodule->url;

    }

    public function update(){
        $submodule =  submodules::whereid($this->submodule->id)->first();
        $submodule->name = $this->name;
        $submodule->url = $this->url;
        $submodule->icon = $this->icon;
        $submodule->save();
        session()->flash('success','Submodule successfully Updated');
        return redirect()->route('can_view_submodule',$this->module);

    }
    public function render()
    {
        return view('livewire.admin.submodules.edit');
    }
}
