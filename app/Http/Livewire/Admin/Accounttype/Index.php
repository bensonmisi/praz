<?php

namespace App\Http\Livewire\Admin\Accounttype;

use App\accounttype;
use Livewire\Component;

class Index extends Component
{
    public $types =[];

    public function mount(){
        $this->types = accounttype::get();
    }
    public function render()
    {
        return view('livewire.admin.accounttype.index');
    }
}
