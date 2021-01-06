<?php

namespace App\Http\Livewire;

use App\pnotice;
use Livewire\Component;

class Countnotice extends Component
{
    public $count = 0;
    public function mount(){
      $this->count = pnotice::count();
    }
    public function render()
    {
        return view('livewire.countnotice');
    }
}
