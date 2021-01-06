<?php

namespace App\Http\Livewire\Admin\Accounttype;

use App\accounttype;
use Livewire\Component;

class Add extends Component
{
    public $name;

    public function add(){
        $this->validate(['name'=>'required|unique:accounttypes,name']);
        accounttype::create(['name'=>$this->name]);
        session()->flash('success','Successfully Created Accounttype');
        return redirect()->route('admin.accounttypes');
    }


    public function render()
    {
        return view('livewire.admin.accounttype.add');
    }
}
