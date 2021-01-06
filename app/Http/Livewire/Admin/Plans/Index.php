<?php

namespace App\Http\Livewire\Admin\Plans;

use App\plans;
use Livewire\Component;

class Index extends Component
{
    public $plans=[];

    public function mount(){
        $this->plans = plans::get();
    }
    public function render()
    {
        return view('livewire.admin.plans.index');
    }
}
