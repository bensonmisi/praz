<?php

namespace App\Http\Livewire\Admin\Users;

use App\administrator;
use App\Notifications\adminAccount;
use App\roles;
use Livewire\Component;
use serviceHelper;

class Add extends Component
{

    public $roles;
    public $name;
    public $surname;
    public $email;
    public $role;

    public function mount(){
        $this->roles = roles::get();
    }

    public function add(){
        $this->validate(['name'=>'required','surname'=>'required','email'=>'required|unique:administrators,email','role'=>'required']);
        $password  = rand(100,10000);
        $service = new serviceHelper();
        $auth_code = 'admin_'.$service->get_last_administrator_id();
        $user = administrator::create(['name'=>$this->name,'surname'=>$this->surname,'email'=>$this->email,'role_id'=>$this->role,'auth_key'=>$auth_code,'password'=>bcrypt($password),'status'=>'ACTIVE']);
        $user->notify(new adminAccount($auth_code,$password));
        session()->flash('success','Account Successfully Created');
        return redirect()->route('admin.users');
    }
    public function render()
    {
        return view('livewire.admin.users.add');
    }
}
