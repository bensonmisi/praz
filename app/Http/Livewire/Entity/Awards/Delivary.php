<?php

namespace App\Http\Livewire\Entity\Awards;

use App\pawards;
use Livewire\Component;

class Delivary extends Component
{
    public $paward;
    public $rating;
    public $review;

    public function mount($id){
      $this->paward = pawards::whereid($id)->first();
    }

    public function save(){
        $this->validate(['rating'=>'required','review'=>'required']);
        $this->paward->status ='DELIVERED';
        $this->paward->rating = $this->rating;
        $this->paward->comment = $this->review;
        $this->paward->save();
        session()->flash('success','Successfully saved delivery status');
        return redirect()->route('home');
    }
    public function render()
    {
        return view('livewire.entity.awards.delivary');
    }
}
