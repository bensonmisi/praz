<?php

namespace App\Http\Livewire\Entity\Plans;

use App\plans;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Index extends Component
{
    public $plans =[];

    public function mount(){
        $this->plans = plans::wherecompany_id(Auth::user()->company->id)->get();
    }
    public function render()
    {
        return view('livewire.entity.plans.index');
    }
}
