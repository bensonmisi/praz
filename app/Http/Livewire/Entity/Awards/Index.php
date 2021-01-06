<?php

namespace App\Http\Livewire\Entity\Awards;

use App\pawards;
use App\pnotice;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Index extends Component
{

    public $notice;

    public function mount($id){
        $this->notice =  pnotice::where(['id'=>$id,'company_id'=>Auth::user()->company->id])->first();
    }
    public function render()
    {
        return view('livewire.entity.awards.index');
    }
}
