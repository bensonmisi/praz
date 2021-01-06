<?php

namespace App\Http\Livewire\Admin\Modules;

use App\modules;
use Livewire\Component;

class Index extends Component
{
    public $modules=[];

    public function mount(){
        $this->modules = modules::get();
    }
    public function render()
    {
        return view('livewire.admin.modules.index');
    }
}
