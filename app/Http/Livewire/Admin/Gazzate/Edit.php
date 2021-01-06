<?php

namespace App\Http\Livewire\Admin\Gazzate;

use App\gazzate;
use Livewire\Component;

class Edit extends Component
{
    public $gazzate;
    public $name;
    public $from;
    public $to;

    public function mount($id){
        $this->gazzate = gazzate::whereid($id)->first();
        $this->name = $this->gazzate->name;
        $this->from = $this->gazzate->from;
        $this->to = $this->gazzate->to;
    }

    public function update(){
        $this->validate(['name'=>'required','from'=>'required','to'=>'required']);
        $this->gazzate->name = $this->name;
        $this->gazzate->from = $this->from;
        $this->gazzate->to = $this->to;
        $this->gazzate->save();
        session()->flash('success','Successfully Updated Gazzate');
        return redirect()->route('admin.gazzate.index');
    }
    public function render()
    {
        return view('livewire.admin.gazzate.edit');
    }
}
