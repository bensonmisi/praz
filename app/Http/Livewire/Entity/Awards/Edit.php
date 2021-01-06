<?php

namespace App\Http\Livewire\Entity\Awards;

use App\pawards;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Edit extends Component
{

    public $award;
    public $quantity;
    public $status;
    public $comment;
    public function mount($id){
        $this->award = pawards::whereid($id)->first();
     if(!is_null($this->award)){
         if($this->award->notice->company_id == Auth::user()->company->id){
             $this->quantity = $this->award->quantity;
             $this->status = $this->award->status;       
         }else{
             return redirect()->route('home');
         }
     }else{
        return redirect()->route('home');
     }
    }

    public function save(){
        $this->validate(['quantity'=>'required','status'=>'required']);

        $this->award->quantity = $this->quantity;
        $this->award->status = $this->status;
        $this->award->comment = $this->comment;
        $this->award->save();
        session()->flash('success','Award settings successfully changed');
        return redirect()->route('home');
    }
    public function render()
    {
        return view('livewire.entity.awards.edit');
    }
}
