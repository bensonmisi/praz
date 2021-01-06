<?php

namespace App\Http\Livewire;

use App\pawards;
use Livewire\Component;

class Awards extends Component
{
    public $notices = [];
    public $query ;

    public function mount(){
        $this->notices = pawards::wherestatus('AWARDED')->get();
    }
    public function updatedQuery(){
        $this->notices = pawards::orderBy('id','ASC')->where('description','like','%'.$this->query.'%')->get();
    }
    public function render()
    {
        return view('livewire.awards');
    }
}
