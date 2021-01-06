<?php

namespace App\Http\Livewire\Admin\Submodules;

use App\submodules;
use Livewire\Component;

class Delete extends Component
{
    public $module;
    public $submodule;
    public function mount($id){
       $this->submodule = submodules::whereid($id)->first();
       $this->module = $this->submodule->module_id;
    }

    public function remove(){
        $submodule = submodules::whereid($this->submodule->id)->first();
        if(count($submodule->permissions) == 0){
            $submodule->delete();
            session()->flash('success','Submodule successfully deleted');
            return redirect()->route('can_view_submodule',$this->module);

        }else{
            session()->flash('error','Submodule already assigned permissions');
            return redirect()->route('can_view_submodule',$this->module);
        }
    }
    public function render()
    {
        return view('livewire.admin.submodules.delete');
    }
}
