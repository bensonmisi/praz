<?php

namespace App\Http\Livewire;

use App\pnotice;
use Livewire\Component;

class Tenders extends Component
{
    public $notices =[];
    public $query;
    public function mount(){
        $this->notices = pnotice::where(['status'=>'PUBLISHED'])->orderBy('id','desc')->with('company','classification')->get();
    }
    public function updatedQuery(){
        $this->notices = pnotice::where(['status'=>'PUBLISHED'])->orderBy('id','ASC')->where('description','like','%'.$this->query.'%')->with('company','classification')->get();
    }
    public function render()
    {
        return view('livewire.tenders');
    }
}
