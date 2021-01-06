<?php

namespace App\Http\Livewire\Entity\Returns;

use App\returns;
use App\returns_response;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithFileUploads;

class Uploads extends Component
{
    use WithFileUploads;
    public $return;
    public $document;

    public function mount($id){
        $this->return = returns::whereid($id)->first();
    }

    public function save(){
        $this->validate(['document'=>'required|file']);
             $company = Auth::user()->company;
            $filename = $company->id.'_'.rand(10,100).'.'.$this->document->extension();
            $file = $this->document->storePubliclyAs('returns/'.$company->id, $filename,'my_files');
             returns_response::create(['return_id'=>$this->return->id,'company_id'=>$company->id,'filename'=>$filename]);
            session()->flash('success','Return successfully uploaded');
            return redirect()->route('returns');
        
    }
    public function render()
    {
        return view('livewire.entity.returns.uploads');
    }
}
