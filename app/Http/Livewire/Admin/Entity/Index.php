<?php

namespace App\Http\Livewire\Admin\Entity;

use App\pcompanyclass;
use Livewire\Component;

class Index extends Component
{ 
    public $entities =[];
   
    public function mount(){
        $this->entities = pcompanyclass::get();
    }

    public function render()
    {
        return view('livewire.admin.entity.index');
    }
}
