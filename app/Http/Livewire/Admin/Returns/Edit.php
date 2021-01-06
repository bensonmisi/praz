<?php

namespace App\Http\Livewire\Admin\Returns;

use App\returns;
use Livewire\Component;
use Livewire\WithFileUploads;

class Edit extends Component
{
    use WithFileUploads;
    public $return;
    public $name;
    public $due;
    public $document;
    public function mount($id){
        $this->return = returns::whereid($id)->first();
        $this->name = $this->return->name;
        $this->due = $this->return->due_date;
    }

    public function update(){
        $this->validate(['name'=>'required','due'=>'required','document'=>'required']);
        $filename = rand(1000,100000).'.'.$this->document->extension();
          $file = $this->document->storePubliclyAs('returns', $filename,'my_files');
        $this->return->name = $this->name;
        $this->return->due_date = $this->due;
        $this->return->templateUrl = $filename;
        $this->return->save();
        session()->flash('success','Successfully Update Return');
        return redirect()->route('admin.returns.index');
    }
    public function render()
    {
        return view('livewire.admin.returns.edit');
    }
}
