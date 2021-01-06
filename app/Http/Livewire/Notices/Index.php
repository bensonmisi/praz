<?php

namespace App\Http\Livewire\Notices;

use App\pnotice;
use Livewire\Component;

class Index extends Component
{
    public $notices =[];
    public $query;
    public function mount(){
        $this->notices = pnotice::orderBy('id','desc')->where(['status'=>'PUBLISHED'])->with('company','classification')->get();
    }
    public function updatedQuery(){
        $this->notices = pnotice::orderBy('id','ASC')->where(['status'=>'PUBLISHED'])->where('description','like','%'.$this->query.'%')->with('company','classification')->get();
    }
    public function render()
    {
        return view('livewire.notices.index');
    }
}
