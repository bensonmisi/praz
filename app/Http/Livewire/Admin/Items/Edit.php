<?php

namespace App\Http\Livewire\Admin\Items;

use App\inventory_item;
use Livewire\Component;

class Edit extends Component
{

    public $item;
    public $name;

    public function mount($id){
        $this->item = inventory_item::whereid($id)->first();
        $this->name = $this->item->name;
    }

    public function update(){
        $this->validate(['name'=>'required|unique:inventory_items']);
        $this->item->name = $this->name;
        $this->item->save();
        session()->flash('success','Successfully Updated Inventory Item');
        return redirect()->route('admin.items');
    }
    public function render()
    {
        return view('livewire.admin.items.edit');
    }
}
