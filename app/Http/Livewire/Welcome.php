<?php

namespace App\Http\Livewire;

use App\category;
use App\company;
use App\pawards;
use App\pcompanyclass;
use App\pnotice;
use App\supplier;
use Carbon\Carbon;
use Livewire\Component;

class Welcome extends Component
{
  public $entities;
  public $suppliers;
  public $notices;
  public $contracts;
  public $latest = [];
  public $category=[];

  public function mount(){
      $this->entities = pcompanyclass::count();
      $this->suppliers = company::count();
      $this->notices = pnotice::wherestatus('PUBLISHED')->count();
      $this->contracts = pawards::wherestatus('AWARDED')->count();
      $this->latest = pnotice::wherestatus('PUBLISHED')->orderBy('id','desc')->limit(10)->get();
      $this->category = category::get();

  }

  

    public function render()
    {
        return view('livewire.welcome');
    }
}
