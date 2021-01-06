<?php

namespace App\Http\Livewire\Admin\General;

use App\general_exchange;
use Livewire\Component;

class Index extends Component
{
    public $general =[];

    public function mount(){
    $this->general = general_exchange::get();
    }
    public function render()
    {
        return view('livewire.admin.general.index');
    }
}
