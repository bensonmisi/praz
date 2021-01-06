<?php

namespace App\Http\Livewire;
use App\company_contacts;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Contacts extends Component
{
    public $emails;
    public $phones;
    public $address;
    public function mount(){
     $contacts = Auth::user()->company->contacts;
     if(!is_null($contacts)){
         $this->emails = $contacts->emails;
         $this->phones = $contacts->phones;
         $this->address = $contacts->address;
     }
    }

    public function submit(){
        $this->validate(['emails'=>'required','phones'=>'required','address'=>'required']);
        $company = Auth::user()->company;
        company_contacts::updateOrCreate(['company_id'=>$company->id],['phones'=>$this->phones,'emails'=>$this->emails,'address'=>$this->address]);
        session()->flash('success','Successfully Saved Your Company Contact Details');
        return redirect()->route('home');
    }
    public function render()
    {
        return view('livewire.contacts');
    }
}
