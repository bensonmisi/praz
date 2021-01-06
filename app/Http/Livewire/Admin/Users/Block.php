<?php

namespace App\Http\Livewire\Admin\Users;

use App\administrator;
use Livewire\Component;

class Block extends Component
{
    public $user;
    public function mount($id){
     $this->user = administrator::whereid($id)->first();
    }

    public function remove(){
     $user = administrator::whereid($this->user->id)->first();
     $user->status = 'BLOCKED';
     $user->save();
     session()->flash('success','Account Successfully Blocked');
     return redirect()->route('admin.users');
    }
    public function render()
    {
        return view('livewire.admin.users.block');
    }
}
