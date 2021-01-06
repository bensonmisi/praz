<?php

namespace App\Http\Livewire\Entity\Plans;

use App\plans;
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
         $plan = plans::where(['company_id'=>Auth::user()->company->id,'year'=>Carbon::now()->year])->first();
         if(is_null($plan)){
             $company = Auth::user()->company;
            $filename = $company->id.'_'.rand(10,100).'.'.$this->document->extension();
            $file = $this->document->storePubliclyAs('plans/'.$company->id, $filename,'my_files');
            plans::create(['company_id'=>$company->id,'year'=>Carbon::now()->year,'file'=>$filename]);
            session()->flash('success','Plan successfully uploaded');
            return redirect()->route('plans');
         }else{
             session()->flash('error','Plan already uploaded');
             return redirect()->route('plans');
         }
    }
    public function render()
    {
        return view('livewire.entity.plans.add');
    }
}
