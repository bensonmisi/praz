<?php

namespace App\Http\Livewire;

use App\User;
use Illuminate\Support\Facades\Auth;
use App\Notifications\activation;
use Livewire\Component;

class Users extends Component
{
    public $users=[];
    public $userlist = true;
    public $showform = false;
    public $form=[
      'name'=>'',
      'surname'=>'',
      'phone'=>'',
      'email'=>'',
      'password'=>'',
      'password_confirmation'=>''];
    public function mount(){
      $company = Auth::user()->company;
      $this->users = User::wherecompany_id($company->id)->get();
    }


    public function addForm(){
      $this->userlist = false;
      $this->showform = true;
    }


    public function save(){
      $this->validate([
        'form.name'=>'required',
        'form.surname'=>'required',
        'form.phone'=>'required',
        'form.email'=>'required|email|unique:users,email',
        'form.password'=>'required|min:8|confirmed']);       

          $company = Auth::user()->company;

         $user= User::create([
            'name'=>$this->form['name'],
            'surname'=>$this->form['surname'],
            'email'=>$this->form['email'],
            'company_id'=>$company->id,
            'phone'=>$this->form['phone'],
            'role_id'=>'9',
            'authcode'=>rand(100,1000),
            'status'=>'PENDING',
            'password'=>$this->form['password'],
            'created_at'=>Auth::user()->id
            ]);
            $user->notify(new activation($user->email,$user->authcode));
session()->flash('message', 'Successfully Created User');
return redirect()->route('users');
    }

    public function changeStatus($id,$status){
      $user = User::whereid($id)->first();
      $user->status = $status;
      $user->save();
      $company = Auth::user()->company;
      $this->users = User::wherecompany_id($company->id)->get();
    }
    public function render()
    {
        return view('livewire.users');
    }
}
