<?php

namespace App\Http\Livewire\Admin\Currency;

use App\currency;
use Livewire\Component;

class Index extends Component
{
    public $currency =[];
    public function mount(){
        $this->currency = currency::get();
    }
    public function render()
    {
        return view('livewire.admin.currency.index');
    }
}
