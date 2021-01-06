<?php

namespace App\Http\Livewire\Entity;

use App\pawards;
use App\plans;
use App\pnotice;
use App\returns;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Home extends Component
{
    public $notices=[];
    public $awards = [];
    public $plan;
    public $return;


    public function mount(){
        $this->notices = pnotice::wherecompany_id(Auth::user()->company->id)->orderBy('id','desc')->limit(10)->get();
        $this->plan = plans::where(['company_id'=>Auth::user()->company->id,'year'=>Carbon::now()->year])->first();
        $this->return = returns::orderBy('id','desc')->with(['uploads'=>function($query){
            $query->where('company_id','=',Auth::user()->company->id);
        }])->first();
      
    }
    
    public function render()
    {
        return view('livewire.entity.home');
    }
}
