<?php

namespace App\Http\Livewire\Entity\Plans;

use App\plans;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithFileUploads;

class Edit extends Component
{
   use WithFileUploads;
    public $plan;
    public $document;
    public function mount($id){
        $this->plan = plans::where(['id'=>$id,'company_id'=>Auth::user()->company->id])->first();
      
    }

    public function save(){
        $this->validate(['document'=>'required|file|mimes:pdf']);
        $company = Auth::user()->company;
        $filename = $company->id.'_'.rand(10,100).'.'.$this->document->extension();
        $file = $this->document->storePubliclyAs('plans/'.$company->id, $filename,'my_files');

        $this->plan->file = $filename;
        $this->plan->save();
        session()->flash('success','Successfully uploaded procurement plan');
        return redirect()->route('plans');


    }
    public function render()
    {
        return view('livewire.entity.plans.edit');
    }
}
