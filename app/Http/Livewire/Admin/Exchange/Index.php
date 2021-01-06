<?php

namespace App\Http\Livewire\Admin\Exchange;

use App\exchange;
use Livewire\Component;

class Index extends Component
{
    public $exchange=[];
    public function mount(){
        $this->exchange = exchange::get();
    }
    public function render()
    {
        return view('livewire.admin.exchange.index');
    }
}
