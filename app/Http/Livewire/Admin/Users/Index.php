<?php

namespace App\Http\Livewire\Admin\Users;

use App\administrator;

use Livewire\Component;

class Index extends Component
{
    public $users;
    

    public function mount(){
        $this->users = administrator::with('role')->get();
        
    }

    public function activate($id){
        $user = administrator::whereid($id)->first();
        $user->status = 'ACTIVE';
        $user->save();
        $this->users = administrator::with('role')->get();
        session()->flash('success','Account Successfully Activated');
        

    }
    public function render()
    {
        return view('livewire.admin.users.index');
    }
}
