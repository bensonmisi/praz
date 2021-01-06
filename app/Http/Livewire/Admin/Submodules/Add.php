<?php

namespace App\Http\Livewire\Admin\Submodules;

use App\modules;
use App\submodules;
use Livewire\Component;

class Add extends Component
{
    public $module;
    public $name;
    public $url;
    public $icon;
    public function mount($id){
      $this->module = modules::whereid($id)->first();
    }

    public function add(){
        $this->validate(['name'=>'required','url'=>'required','icon'=>'required']);
        submodules::create(['module_id'=>$this->module->id,'url'=>$this->url,'icon'=>$this->icon,'name'=>$this->name]);
        session()->flash('success','Successfully Created SubModule');
        return redirect()->route('can_view_submodule',$this->module->id);
    }
    public function render()
    {
        return view('livewire.admin.submodules.add');
    }
}
