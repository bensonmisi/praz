<?php

namespace App\Http\Livewire\Admin\Currency;

use App\currency;
use Livewire\Component;

class Add extends Component
{
    public $name;

    public function add(){
        $this->validate(['name'=>'required|unique:currencies,name']);
        currency::create(['name'=>$this->name]);
        session()->flash('success','Successfully Created Currency');
        return redirect()->route('admin.currency');
    }
    public function render()
    {
        return view('livewire.admin.currency.add');
    }
}
