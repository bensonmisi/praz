<?php

namespace App\Http\Livewire\Admin\Currency;

use App\currency;
use Livewire\Component;

class Delete extends Component
{
    public $currency;
    public $name;
    public function mount($id){
     $this->currency = currency::whereid($id)->first();
    }

    public function remove(){
         $this->currency->delete();
        session()->flash('success','Currency Successfully Deleted');
        return redirect()->route('admin.currency');   
    }
    public function render()
    {
        return view('livewire.admin.currency.delete');
    }
}
