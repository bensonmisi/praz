<?php

namespace App\Http\Livewire\Admin\Entity;

use Livewire\Component;
use App\company as Appcompany;
class Company extends Component
{
    public $companies =[];
    public $query;

    public function mount(){
        $this->companies = Appcompany::limit(10)->get();
    }

    public function search(){
        $this->companies =  Appcompany::where('name','like','%'.$this->query.'%')->get();
    }
    public function render()
    {
        return view('livewire.admin.entity.company');
    }
}
