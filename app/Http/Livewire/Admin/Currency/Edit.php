<?php

namespace App\Http\Livewire\Admin\Currency;

use App\currency;
use Livewire\Component;

class Edit extends Component
{
    public $currency;
    public $name;
    public function mount($id){
     $this->currency = currency::whereid($id)->first();
     $this->name = $this->currency->name;
    }

    public function update(){
        $this->validate(['name'=>'required|unique:currencies,id']);
        $this->currency->name = $this->name;
        $this->currency->save();
        session()->flash('success','Successfully Updated Currency');
        return redirect()->route('admin.currency');
    }
    public function render()
    {
        return view('livewire.admin.currency.edit');
    }
}
