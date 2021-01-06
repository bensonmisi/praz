<?php

namespace App\Http\Livewire\Entity;

use App\currency;
use App\Notifications\alert;
use App\pawards;
use App\pnotice;
use App\supplier;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Awards extends Component
{

   public $notices=[];

   public function mount(){
     $this->notices = pnotice::wherecompany_id(Auth::user()->company->id)->get();
    
   }
    public function render()
    {
        return view('livewire.entity.awards');
    }
}
