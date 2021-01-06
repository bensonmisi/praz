<?php

namespace App\Http\Livewire\Admin\Documents;

use App\accounttype;
use App\documents;
use Livewire\Component;

class Edit extends Component
{
    public $types =[];
    public $name;
    public $locality;
    public $type;
    public $document;

    public function mount($id){
        $this->types =  accounttype::get();
        $this->document = documents::whereid($id)->first();
        $this->name =  $this->document->name;
        $this->locality = $this->document->locality;
        $this->type = $this->document->accounttype_id;
    }

    public function update(){
        $this->validate(['name'=>'required','locality'=>'required','type'=>'required']);
        $this->document->name = $this->name;
        $this->document->locality = $this->locality;
        $this->document->accounttype_id = $this->type;
        $this->document->save();
        session()->flash('success','Successfuly Updated Document');
        return redirect()->route('admin.documents');
    }
    public function render()
    {
        return view('livewire.admin.documents.edit');
    }
}
