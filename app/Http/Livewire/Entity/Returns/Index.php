<?php

namespace App\Http\Livewire\Entity\Returns;

use App\returns;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Index extends Component
{
    public $returns =[];

    public function mount(){
        $this->returns = returns::orderBy('id','desc')->with(['uploads'=>function($query){
            $query->where('company_id','=',Auth::user()->company->id);
        }])->get();
    }
    public function render()
    {
        return view('livewire.entity.returns.index');
    }
}
