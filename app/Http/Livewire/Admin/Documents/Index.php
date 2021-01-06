<?php

namespace App\Http\Livewire\Admin\Documents;

use App\documents;
use Livewire\Component;

class Index extends Component
{
    public $documents=[];

    public function mount(){
        $this->documents = documents::orderBy('accounttype_id','desc')->get();
    }
    public function render()
    {
        return view('livewire.admin.documents.index');
    }
}
