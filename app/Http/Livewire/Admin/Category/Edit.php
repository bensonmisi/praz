<?php

namespace App\Http\Livewire\Admin\Category;

use App\category;
use App\sections;
use Livewire\Component;

class Edit extends Component
{
    public $sections =[];
    public $section;
    public $name;
    public $code;
    public $category;
    public function mount($id){
        $this->sections = sections::get();
        $this->category = category::whereid($id)->first();
        $this->name = $this->category->name;
        $this->code = $this->category->code;
        $this->section = $this->category->section_id;

    }

    public function update(){
        $this->validate(['section'=>'required','code'=>'required|unique:categories,id','name'=>'required']);
         $this->category->section_id = $this->section;
         $this->category->name = $this->name;
         $this->category->code = $this->code;
         $this->category->save();
        session()->flash('success','Successfully Created Category');
        return redirect()->route('admin.categories');

    }
    public function render()
    {
        return view('livewire.admin.category.edit');
    }
}
