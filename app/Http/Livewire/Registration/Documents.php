<?php

namespace App\Http\Livewire\Registration;

use App\documents as AppDocuments;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithFileUploads;

class Documents extends Component
{
    use WithFileUploads;
    public $documents;
    public $docid=0;
    public $photo;
    public function mount(){
        $company = Auth::user()->company;
        $this->documents =  AppDocuments::where(['locality'=>$company->locality,'accounttype_id'=>$company->accounttype_id])
                                        ->with(['company'=>function($query){
                                            $query->where('company_id','=',Auth::user()->company->id);
                                        }])
                                        ->get();
         if($this->checkDocuments($company)){
             return redirect()->route('registration_category');
         }
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
        return view('livewire.registration.documents');
    }
}
