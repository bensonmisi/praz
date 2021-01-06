<?php

namespace App\Http\Livewire;

use App\User;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Password extends Component
{
    public $password;
    public $password_confirmation;

    public function save(){
    $this->validate(['password'=>'required|min:8|confirmed']);

    $user = User::whereid(Auth::user()->id)->first();
    $user->password = $this->password;
    $user->save();
    session()->flash('succes','Sucessfully Change Your Password');
    return redirect()->route('home');
    }
    public function render()
    {
        return view('livewire.password');
    }
}
