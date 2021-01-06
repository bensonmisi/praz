<?php

namespace App\Http\Livewire\Invoices;

use App\online_invoice;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Show extends Component
{
    public $invoices;
    public $inv;
    public function mount($inv){
      $this->invoices = online_invoice::where(['company_id'=>Auth::user()->company->id,'invoice_number'=>$inv])->with('category','currency')->get();
      $this->inv = $inv;
    }

    public function print(){
      return redirect()->route('invoice_print',$this->inv);
    }
    public function render()
    {
        return view('livewire.invoices.show');
    }
}
