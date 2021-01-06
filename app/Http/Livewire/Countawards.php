<?php

namespace App\Http\Livewire;

use App\pawards;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Countawards extends Component
{
    public $count = 0;

    public function mount(){
        $this->count = pawards::wherecompany_id(Auth::user()->company->id)->count();
    }
    public function render()
    {
        return view('livewire.countawards');
    }
}
