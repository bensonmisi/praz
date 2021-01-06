<?php

namespace App\Http\Livewire;

use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Awaiting extends Component
{

    public $rtgs =[];

    public function mount()
    {
        $this->rtgs =  Auth::user()->company->rtgs;
       
    }
    public function render()
    {
        return view('livewire.awaiting');
    }
}
