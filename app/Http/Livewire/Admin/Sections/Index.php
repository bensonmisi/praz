<?php

namespace App\Http\Livewire\Admin\Sections;

use App\sections;
use Livewire\Component;

class Index extends Component
{
    public $sections=[];

    public function mount(){
        $this->sections = sections::get();
    }
    public function render()
    {
        return view('livewire.admin.sections.index');
    }
}
