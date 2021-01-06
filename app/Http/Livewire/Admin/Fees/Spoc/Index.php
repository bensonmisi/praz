<?php

namespace App\Http\Livewire\Admin\Fees\Spoc;

use App\pspocfee;
use Livewire\Component;

class Index extends Component
{
    public $fees =[];

    public function mount(){
        $this->fees = pspocfee::wherestatus('CREATED')->get();
    }
    public function render()
    {
        return view('livewire.admin.fees.spoc.index');
    }
}
