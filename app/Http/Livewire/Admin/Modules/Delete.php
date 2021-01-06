<?php

namespace App\Http\Livewire\Admin\Modules;

use App\modules;
use Livewire\Component;

class Delete extends Component
{
    public $module;

    public function mount($id){
        $this->module = modules::whereid($id)->first();
    }

    public function remove(){
        $module = modules::whereid($this->module->id)->with('submodules')->first();
        if(count($module->submodules) == 0){
         $module->delete();
         session()->flash('success','module successfully deleted');
            return redirect()->route('admin.modules');

        }
        else{
            session()->flash('error','module has submodules cannot be deleted');
            return redirect()->route('admin.modules');
        }
    }
    public function render()
    {
        return view('livewire.admin.modules.delete');
    }
}
