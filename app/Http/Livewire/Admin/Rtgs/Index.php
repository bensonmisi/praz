<?php

namespace App\Http\Livewire\Admin\Rtgs;

use App\rtgs;
use Livewire\Component;

class Index extends Component
{
  public $rtgs = [];
  public $query;
  public function mount(){
      $this->rtgs = rtgs::wherestatus('PENDING')->orderBy('id','desc')->get();
  }

 public function updatedQuery(){
     if($this->rtgs !="")
     {
    $this->rtgs = rtgs::orderBy('id','ASC')->with(['company'=>function($query){
        $query->where('name','like','%'.$this->query.'%');
    }])->orderBy('id','desc')->get();
    }
    else{
        $this->mount();
    }
 }
    public function render()
    {
        return view('livewire.admin.rtgs.index');
    }
}
