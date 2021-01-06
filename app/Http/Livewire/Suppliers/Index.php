<?php

namespace App\Http\Livewire\Suppliers;

use App\category;
use Carbon\Carbon;
use Livewire\Component;

class Index extends Component
{
    public $categories =[];

     public function mount(){
         $this->categories = category::with(['suppliers'=>function($query){
             $query->where("expire_year","=",Carbon::now()->year);
             $query->where('status','=',"APPROVED");
         }])->get();
     }

    public function render()
    {
        return view('livewire.suppliers.index');
    }
}
