<?php

namespace App\Http\Livewire\Registration;

use App\documents;
use App\company_documents;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithFileUploads;

class Upload extends Component
{
    use WithFileUploads;

    public $doc;
    public $docID;
    public $document;
    public function mount($id){
        $document = documents::whereid($id)->first();
        if(!is_null($document)){
            $this->docID = $id;
            $this->doc = $document->name;
        }
        else{
            session()->flash('error','Document Type Not Found');
            return redirect()->route('registration_documents');
        }
    }

    public function save(){
        $this->validate([
            'document' => 'file|mimes:pdf',
        ]);
        
          $company = Auth::user()->company;
          $filename = $company->id.'_'.rand(10,100).'.'.$this->document->extension();
          $file = $this->document->storePubliclyAs($this->docID.'/'.$company->id, $filename,'my_files');
          company_documents::create(['company_id'=>$company->id,'document_id'=>$this->docID,'path'=>$file]);
          session()->flash('success','Successfully Uploaded :'.$this->doc);
          return redirect()->route('registration_documents');
    }
    public function render()
    {
        return view('livewire.registration.upload');
    }
}
