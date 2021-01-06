<?php

namespace App\Http\Livewire;

use App\Notifications\resetlink;
use App\password_resets;
use App\User;
use Livewire\Component;

class Forgot extends Component
{
    public $email;
    public function authenticate(){
        $this->validate(['email'=>'required|email|exists:users']);
       // $rand = rand(1000000,10000000000);
        $token = 'DGSDFDSSFLKNKLNFDLKFSDFJLFJDSKLFJSDFD'.rand(1000000,10000000000);  
          
        password_resets::create(['email'=>$this->email,'token'=>$token]);
        $user = User::whereemail($this->email)->first();
        if(!is_null($user))
        {
        $user->notify(new resetlink($token));
        }
        session()->flash('message','Password reset link successfully sent to email');
        return redirect()->route('forgot');

    }
    public function render()
    {
        return view('livewire.forgot');
    }
}
