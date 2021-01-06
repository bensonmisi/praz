<?php

namespace App\Http\Livewire\Admin\Sections;

use App\sections;
use Livewire\Component;

class Add extends Component
{
    public $name;

    public function add(){
        $this->validate(['name'=>'required|unique:sections,name']);
        sections::create(['name'=>$this->name]); 
        session()->flash('success','Section Successfully Created') ;     
        return redirect()->route('admin.sections');
    }
    public function render()
    {
        return view('livewire.admin.sections.add');
    }
}
