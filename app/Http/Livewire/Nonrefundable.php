<?php

namespace App\Http\Livewire;

use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use serviceHelper;

class Nonrefundable extends Component
{
    public $nonrefundable=0;
    public $refundable =0;

    public function mount(){
        $service = new serviceHelper();
        $current ='ZWL';
        $accountnumber='10721064850020';
        if(Auth::user()->company->locality ==='foreign'){
          $current ='USD';
          $accountnumber='10721064850040';
        }
        $this->nonrefundable = $service->myBalance($current,$accountnumber); 
    }
    public function render()
    {
        return view('livewire.nonrefundable');
    }
}
