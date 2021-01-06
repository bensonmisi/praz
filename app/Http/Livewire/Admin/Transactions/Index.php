<?php

namespace App\Http\Livewire\Admin\Transactions;

use App\banktransactions;
use Livewire\Component;

class Index extends Component
{
    public $query;
    public $transactions=[];

    public function mount(){
        $this->transactions = banktransactions::limit(20)->get();
    }

    public function updatedQuery(){
        $this->transactions = banktransactions::where("name","like","%".$this->query."%")->get();
    }
    public function render()
    {
        return view('livewire.admin.transactions.index');
    }
}
