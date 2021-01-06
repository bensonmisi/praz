<?php

namespace App\Http\Livewire\Admin\Sections;

use App\sections;
use Livewire\Component;

class Edit extends Component
{

    public $name ;
    public $section_id;

    public function mount($id){
         $section = sections::whereid($id)->first();
         if(!is_null($section)){
             $this->name = $section->name;
             $this->section_id = $section->id;

         }else{
             session()->flash('error','Section not found');
             return redirect()->route('admin.sections');
         }

    }

    public function update(){
        $this->validate(['name'=>'required|unique:sections,id']);
        $section = sections::whereid($this->section_id)->first();
        $section->name=$this->name; 
        $section->save();
        session()->flash('success','Section Successfully Updated') ;     
        return redirect()->route('admin.sections');
    }
    public function render()
    {
        return view('livewire.admin.sections.edit');
    }
}
