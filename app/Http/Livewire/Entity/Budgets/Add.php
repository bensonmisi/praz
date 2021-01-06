<?php

namespace App\Http\Livewire\Entity\Budgets;

use App\budgets;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithFileUploads;

class Add extends Component
{
    use WithFileUploads;
    public $document;

    public function save(){
        $this->validate(['document'=>'required|file|mimes:pdf']);
         $plan = budgets::where(['company_id'=>Auth::user()->company->id,'year'=>Carbon::now()->year])->first();
         if(is_null($plan)){
             $company = Auth::user()->company;
            $filename = $company->id.'_'.rand(10,100).'.'.$this->document->extension();
            $file = $this->document->storePubliclyAs('budgets/'.$company->id, $filename,'my_files');
            budgets::create(['company_id'=>$company->id,'year'=>Carbon::now()->year,'file'=>$filename]);
            session()->flash('success','Budget successfully uploaded');
            return redirect()->route('budgets.index');
         }else{
             session()->flash('error','Budget already uploaded');
             return redirect()->route('budgets.index');
         }
    }
    public function render()
    {
        return view('livewire.entity.budgets.add');
    }
}
