<?php

namespace App\Http\Livewire\Notices;

use App\category as AppCategory;
use Livewire\Component;

class Category extends Component
{
    public $categorylist=[];
    public $category;
    public function mount($id){
        $this->categorylist = AppCategory::get();
        $this->getNotices($id);
    }
    public function getNotices($id){
    $this->category = AppCategory::whereid($id)->first();
    }
    public function render()
    {
        return view('livewire.notices.category');
    }
}
