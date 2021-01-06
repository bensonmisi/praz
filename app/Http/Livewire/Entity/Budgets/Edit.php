<?php

namespace App\Http\Livewire\Entity\Budgets;

use App\budgets;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithFileUploads;

class Edit extends Component
{
    use WithFileUploads;
    public $budget;
    public $document;

    public function mount($id){
        $this->budget = budgets::where(['company_id'=>Auth::user()->company->id,'id'=>$id])->first();
    }
    public function save(){
        $this->validate(['document'=>'required|file|mimes:pdf']);
        $company = Auth::user()->company;
        $filename = $company->id.'_'.rand(10,100).'.'.$this->document->extension();
        $file = $this->document->storePubliclyAs('budgets/'.$company->id, $filename,'my_files');

        $this->budget->file = $filename;
        $this->budget->save();
        session()->flash('success','Successfully uploaded procurement budget');
        return redirect()->route('budgets.index');


    }
    public function render()
    {
        return view('livewire.entity.budgets.edit');
    }
}
