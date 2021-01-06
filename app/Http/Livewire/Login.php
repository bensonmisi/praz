<?php

namespace App\Http\Livewire;

use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Login extends Component
{
    public $email;
    public $password;

    public function authenticate(){
        $this->validate(['email'=>'required|email','password'=>'required|min:8']);
         
       if(Auth::attempt(['email'=>$this->email,'password'=>$this->password]))
        {
           if(Auth::user()->status==='ACTIVATED')
           {
            //Auth::logoutOtherDevices($this->password);
            if(Auth::user()->type=='SUPPLIER')
             {
               return redirect(route('home'));
             }
             else{

                return redirect()->route('entity');
             }
           }
           else{
            session()->flash('error','Please Check Your Email And Activate Your Account');
               Auth::logout();
           }
           
        }else{
            session()->flash('error','Invalid Login Details');
        }
    }
    public function render()
    {
        return view('livewire.login');
    }
}
