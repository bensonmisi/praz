<?php

namespace App\Http\Livewire\Tenders;

use Livewire\Component;
use App\pnotice;
use Illuminate\Support\Facades\Auth;

class Index extends Component
{
    public $notices=[];
    public function mount(){
       $this->notices = pnotice::with('classification','currency')->orderBy('id','desc')->get();
    }

    public function render()
    {
        return view('livewire.tenders.index');
    }
}
