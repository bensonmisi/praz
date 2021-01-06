<?php

namespace App\Http\Livewire\Invoices;

use App\online_invoice;
use App\tender_invoice;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Index extends Component
{

    public $invoices=[];
    public $tender_invoices = [];

    public function mount(){
     $this->invoices = online_invoice::where(['company_id'=>Auth::user()->company->id])->groupBy('invoice_number')->get();
     $this->tender_invoices = tender_invoice::where(['company_id'=>Auth::user()->company->id])->groupBy('invoice_number')->get();
    }
    public function render()
    {
        return view('livewire.invoices.index');
    }
}
