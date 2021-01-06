<?php

namespace App\Http\Livewire\Admin\Suppliers;

use App\supplier;
use Carbon\Carbon;
use Livewire\Component;

class Index extends Component
{
     public $from;
     public $to;

    public function mount(){
        }


   public function submit(){
       return redirect()->route('can_suppliers_summary',[$this->from,$this->to]);
   }
    public function render()
    {
        return view('livewire.admin.suppliers.index');
    }
}
