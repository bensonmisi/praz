<?php

namespace App\Http\Livewire\Admin\Documents;

use App\accounttype;
use App\documents;
use Livewire\Component;

class Add extends Component
{
    public $types =[];
    public $name;
    public $locality;
    public $type;

    public function mount(){
        $this->types = accounttype::get();
    }

    public function add(){
        $this->validate(['locality'=>'required','name'=>'required','type'=>'required']);
        documents::create(['accounttype_id'=>$this->type,'name'=>$this->name,'locality'=>$this->locality]);
        session()->flash('success','Successfully Created Supplier Document');
        return redirect()->route('admin.documents');
    }
    public function render()
    {
        return view('livewire.admin.documents.add');
    }
}
