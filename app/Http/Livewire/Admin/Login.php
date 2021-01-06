<?php

namespace App\Http\Livewire\Admin;

use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Login extends Component
{
    public $username;
    public $password;

    public function authenticate(){
        $this->validate(['username'=>'required','password'=>'required|min:8']);
         
       if(Auth::guard('admin')->attempt(['auth_key'=>$this->username,'password'=>$this->password]))
        {
           if(Auth::guard('admin')->user()->status==='ACTIVE')
           {
           
               return redirect(route('admin.home'));
             
           }
           else{
            session()->flash('error','Account is deactivated');
               Auth::logout();
           }
           
        }else{
            session()->flash('error','Invalid Login Details');
        }
    }
    public function render()
    {
        return view('livewire.admin.login');
    }
}
