<?php

namespace App\Http\Livewire\Admin\Budgets;

use App\budgets;
use Livewire\Component;

class Index extends Component
{
    public $budgets =[];

    public function mount(){
        $this->budgets = budgets::get();
    }
    public function render()
    {
        return view('livewire.admin.budgets.index');
    }
}
