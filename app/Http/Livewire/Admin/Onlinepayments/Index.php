<?php

namespace App\Http\Livewire\Admin\Onlinepayments;

use App\onlinepayments;
use Carbon\Carbon;
use Livewire\Component;

class Index extends Component
{
    public $query;

    public $onlinepayments =[];

    public function mount(){
        $this->onlinepayments = onlinepayments::whereDate('created_at',Carbon::now())->get();
    }
    public function updatedQuery(){
        $this->onlinepayments= onlinepayments::with(['company'=>function($query){
        $query->where('name','like','%'.$this->query.'%');
        }])->orderBy('id','desc')->get();
    }
    public function render()
    {
        return view('livewire.admin.onlinepayments.index');
    }
}
