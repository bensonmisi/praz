<?php

namespace App\Http\Livewire\Suppliers;

use App\supplier;
use Carbon\Carbon;
use Livewire\Component;

class Show extends Component
{
    public $suppliers=[];
    public function mount($id){
        $this->suppliers = supplier::where(['category_id'=>$id,'expire_year'=>Carbon::now()->year,'status'=>'APPROVED'])->get()->shuffle();
    }

    public function render()
    {
        return view('livewire.suppliers.show');
    }
}
