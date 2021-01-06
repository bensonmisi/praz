<?php

namespace App\Http\Livewire\Admin\Category;

use App\category;
use Livewire\Component;

class Index extends Component
{
    public $category =[];

    public function mount(){
      $this->category = category::orderBy('section_id','ASC')->get();
    }
    public function render()
    {
        return view('livewire.admin.category.index');
    }
}
