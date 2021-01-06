<?php

namespace App\Http\Livewire;

use App\rtgs;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithFileUploads;

class Transfers extends Component
{ 
  use WithFileUploads;
    public $transfers;
    public $showlist = true;
    public $showform = false;
    public $file;
    public $tid;
    public function mount(){
      $this->transfers = rtgs::wherecompany_id(Auth::user()->company->id)->get();
    }

    public function uploadForm($id){
     $this->tid = $id;
     $this->showlist = false;
     $this->showform = true;

    }

    public function save(){
      $this->validate([
          'file' => 'file'
      ]);
      
        $company = Auth::user()->company;
        $rtgs = rtgs::whereid($this->tid)->first();
        $filename = $rtgs->invoice_number.'_'.rand(10,100).'.'.$this->file->extension();
        $file = $this->file->storePubliclyAs('pop/'.$company->id, $filename,'my_files');
      
        
         $rtgs->filename = $file;
         $rtgs->status = 'PENDING';
         $rtgs->save(); 
         session()->flash('success','POP successfully uploaded. Your registration certificate will  automatically be generated once our finance department has confirmed your funds');
         return redirect()->route('transfers'); 
         
  }
    public function render()
    {
        return view('livewire.transfers');
    }
}
