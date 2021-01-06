<?php

namespace App\Http\Livewire\Admin\Category;

use App\category;
use Livewire\Component;

class Delete extends Component
{
    public $category;

    public function mount($id){
        $category = category::whereid($id)->first();
        if(count($category->suppliers) === 0)
          {
             $this->category = $category;
          }else{
              session()->flash('error','Category already used to register a supplier');
              return redirect()->route('admin.categories');
          }
    }

    public function remove(){
        $this->category->delete();
        session()->flash('success','Category successfully deleted');
        return redirect()->route('admin.categories');
    }
    public function render()
    {
        return view('livewire.admin.category.delete');
    }
}
