<?php

namespace App\Http\Livewire\Admin\Items;

use App\inventory_item;
use Livewire\Component;

class Add extends Component
{
    public $name;

    public function add(){
     $this->validate(['name'=>'required|unique:inventory_items,name']);
     inventory_item::create(['name'=>$this->name]);
     session()->flash('success','Successfully Created An Inventory Item');
     return redirect()->route('admin.items');
    }
    public function render()
    {
        return view('livewire.admin.items.add');
    }
}
