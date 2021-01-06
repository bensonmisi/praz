<?php

namespace App\Http\Livewire\Admin\Documents;

use App\documents;
use Livewire\Component;

class Delete extends Component
{
    public $document;

    public function mount($id){
        $document = documents::whereid($id)->first();
        if(!is_null($document))
          {
             
              
               if(is_null($document->company))
                 {
                   $this->document = $document;
                 }else{
                    session()->flash('error','Document used by supplier');
                    return redirect()->route('admin.documents');
                 }

          }else{
              session()->flash('error','Document not found');
              return redirect()->route('admin.documents');
          }
    }

    public function remove(){
        $this->document->delete();
        session()->flash('success','Document Successfully Delete');
              return redirect()->route('admin.documents');

    }
    public function render()
    {
        return view('livewire.admin.documents.delete');
    }
}
