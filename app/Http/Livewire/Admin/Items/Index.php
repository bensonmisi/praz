<?php

namespace App\Http\Livewire\Admin\Items;

use App\inventory_item;
use Livewire\Component;

class Index extends Component
{
    public $items =[];

    public function mount(){
        $this->items = inventory_item::get();
    }
    public function render()
    {
        return view('livewire.admin.items.index');
    }
}
