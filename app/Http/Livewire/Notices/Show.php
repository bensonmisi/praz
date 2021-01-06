<?php

namespace App\Http\Livewire\Notices;

use App\pnotice;
use Livewire\Component;

class Show extends Component
{

    public $notice;

    public function mount($id){
        $this->notice = pnotice::whereid($id)->first();
    }
    public function render()
    {
        return view('livewire.notices.show');
    }
}
