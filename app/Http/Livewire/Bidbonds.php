<?php

namespace App\Http\Livewire;

use App\bidbond;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Bidbonds extends Component
{
    public $bidbond =[];

    public function mount(){
        $this->bidbond = bidbond::wherecompany_id(Auth::user()->company->id)->get();
    }
    public function render()
    {
        return view('livewire.bidbonds');
    }
}
