<?php

namespace App\Http\Livewire\Admin\Sections;

use App\sections;
use Livewire\Component;

class Delete extends Component
{
    public $section;

    public function mount($id){
       $section = sections::whereid($id)->first();
        if(count($section->categories)===0)
          {
            $this->section = $section;
          }else{
              session()->flash('error','Section used when creating categories');
              return redirect()->route('admin.sections');
          }
    }
    public function remove()
    {
        $this->section->delete();
        session()->flash('success','Section successfully deleted');
        return redirect()->route('admin.sections');
    }
    public function render()
    {
        return view('livewire.admin.sections.delete');
    }
}
