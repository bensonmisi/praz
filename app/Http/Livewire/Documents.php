<?php

namespace App\Http\Livewire;

use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use App\documents as AppDocument;
use App\company_documents as CompanyDocs;
use Livewire\WithFileUploads;

class Documents extends Component
{
    use WithFileUploads;

    public $documents=[];
    public $docid;
    public $doc;
    public $showlist=true;
    public $showform=false;
    public $file;
    public function mount(){
        $company = Auth::user()->company;
        $this->documents =  AppDocument::where(['locality'=>$company->locality,'accounttype_id'=>$company->accounttype_id])
                                        ->with(['company'=>function($query){
                                            $query->where('company_id','=',Auth::user()->company->id);
                                        }])
                                        ->get();
       
    }
    public function uploadForm($id,$name){
        $this->docid = $id;
        $this->doc = $name;
        $this->showlist = false;
        $this->showform = true;
   
       }

       public function save(){
        $this->validate([
            'file' => 'file'
        ]);
        
          $company = Auth::user()->company;
          $doc = CompanyDocs::where(['document_id'=>$this->docid,'company_id'=>$company->id])->first();
          $filename = $company->id.'_'.rand(10,100).'.'.$this->file->extension();
          $file = $this->file->storePubliclyAs($this->doc.'/'.$company->id, $filename,'my_files');
        
          
           $doc->path = $file;
           $doc->save(); 
           session()->flash('success',' successfully uploaded Company Document');
           return redirect()->route('documents'); 
           
    }
    function checkDocuments(){
        $total = 0 ;
     foreach($this->documents as $comp){
           if(!is_null($comp->company)){
               $total++;
           }
     }
     if(count($this->documents)==$total){
         return true;
     }
     else{
         return false;
     }
    }
    public function render()
    {
        return view('livewire.documents');
    }
}
