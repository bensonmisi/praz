<?php

namespace App\Http\Livewire\Suppliers;

use App\company;
use Livewire\Component;

class Details extends Component
{
    public $company;

    public function mount($id){
        $this->company = company::whereid($id)->first();
    }
    public function render()
    {
        return view('livewire.suppliers.details');
    }
}
