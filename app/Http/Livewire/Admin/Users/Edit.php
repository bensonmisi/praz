<?php

namespace App\Http\Livewire\Admin\Users;

use App\administrator;
use App\roles;
use Livewire\Component;

class Edit extends Component
{

    public $user;
    public $roles;
    public $name;
    public $surname;
    public $email;
    public $role;

    public function mount($id){
    $this->user = administrator::whereid($id)->with('role')->first();
    $this->roles = roles::get();
    $this->name = $this->user->name;
    $this->surname = $this->user->surname;
    $this->email = $this->user->email;
    $this->role = $this->user->role->name;
    }

    public function update(){
        $this->validate(['name'=>'required','surname'=>'required','email'=>'required|unique:administrators,id','role'=>'required']);
        $user = administrator::whereid($this->user->id)->first();
        $user->name = $this->name;
        $user->surname = $this->surname;
        $user->email = $this->email;
        $user->role_id = $this->role;
        $user->save();
        session()->flash('success','Successfully Updated User Details');
        return redirect()->route('admin.users');

    }


    public function render()
    {
        return view('livewire.admin.users.edit');
    }
}
