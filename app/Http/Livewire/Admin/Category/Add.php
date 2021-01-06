<?php

namespace App\Http\Livewire\Admin\Category;

use App\category;
use App\sections;
use Livewire\Component;

class Add extends Component
{
    public $sections =[];
    public $section;
    public $name;
    public $code;

    public function mount(){
        $this->sections = sections::get();
    }

    public function add(){
        $this->validate(['section'=>'required','code'=>'required|unique:categories,code','name'=>'required']);

        category::create(['section_id'=>$this->section,'code'=>$this->code,'name'=>$this->name]);
        session()->flash('success','Successfully Created Category');
        return redirect()->route('admin.categories');

    }
    public function render()
    {
        return view('livewire.admin.category.add');
    }
}
