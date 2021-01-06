<?php

namespace App\Http\Livewire;

use App\password_resets;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Reset extends Component
{
    public $token;
    public $email;
    public $password;
    public $password_confirmation;
    public function mount($token){
     $data = password_resets::wheretoken($token)->first();
     if(!is_null($data)){
         $diff=  Carbon::now()->diffInMinutes(Carbon::parse($data->created_at));
         if($diff<1440)
          {
            $this->token = $token;
          }
          else{
              session()->flash('expired');
              return redirect()->route('forgot');
          }
     }else{
         return redirect()->route('welcome');
     }
    }

    public function authenticate(){

        $this->validate(['email'=>'required|email','password'=>'required|min:8|confirmed']);
      
        $data = password_resets::where(['email'=>$this->email,'token'=>$this->token])->first();
        if(!is_null($data)){
           $user = User::whereemail($this->email)->first();
           $user->password = $this->password;
           $user->save();
            session()->flash('message','Successfully Reset Password Please Login');
            return redirect()->route('login');
        }
        else{
            session()->flash('invalid');
            return redirect()->route('forgot');
        }
    }
    public function render()
    {
        return view('livewire.reset');
    }
}
