<?php

namespace App\Http\Livewire\Admin\Entity\Users;

use App\company;
use App\Notifications\pmuNotification;
use App\User;
use App\user_permission;
use Livewire\Component;

class Add extends Component
{
    public $name;
    public $surname;
    public $email;
    public $phone;
    public $approve;
    public $company;


    public function mount($id){
        $this->company = company::whereid($id)->first();
    }
    public function add(){
        $this->validate(['name'=>'required','surname'=>'required','email'=>'required|email|unique:users,email','phone'=>'required','approve'=>'required']);
        $code = rand(100,1000);
        $status ='ACTIVATED';
        $password = 'XYAYS'.rand(1000,10000);
        $role_id =9;
     $user= User::create(['name'=>$this->name,
                 'surname'=>$this->surname,
                 'email'=>$this->email,'phone'=>$this->phone,
                 'company_id'=>$this->company->id,
                 'password'=>$password,
                 'type'=>'PMU',
                 'role_id'=>$role_id,
                 'authcode'=>$code,
                 'status'=>$status,
                 'password'=>$password
                 ]);
         if($this->approve=="YES")
         {
        user_permission::firstOrCreate(['user_id'=>$user->id],['user_id'=>$user->id,'permission'=>'can_approve']);
         }

        $user->notify(new pmuNotification($this->email,$password));
        session('success','Successfully Created PMU');
        return redirect()->route('can_entity_user',$this->company->id);
    }
    public function render()
    {
        return view('livewire.admin.entity.users.add');
    }
}
