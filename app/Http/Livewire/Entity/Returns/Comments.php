<?php

namespace App\Http\Livewire\Entity\Returns;

use App\returns_comments;
use Livewire\Component;

class Comments extends Component
{
    public $comments = [];

    public function mount($id){
        $this->comments = returns_comments::wherereturn_id($id)->get();
    }
    public function render()
    {
        return view('livewire.entity.returns.comments');
    }
}
