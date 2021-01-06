<?php

namespace App\Http\Livewire\Entity\Budgets;

use App\budgets;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Index extends Component
{
    public $budgets =[];

    public function mount(){
        $this->budgets = budgets::where(['company_id'=>Auth::user()->company->id])->get();
    }
    public function render()
    {
        return view('livewire.entity.budgets.index');
    }
}
