<?php

namespace App\Http\Livewire\Admin\Entity\Users;

use App\User;
use App\user_permission;
use Livewire\Component;

class Edit extends Component
{
    public $name;
    public $surname;
    public $email;
    public $phone;
    public $approve;
    public $user;

    public function mount($id){
        $this->user = User::whereid($id)->first();
        $this->name = $this->user->name;
        $this->surname = $this->user->surname;
        $this->email = $this->user->email;
        $this->phone = $this->user->phone;
        
    }

    public function update(){
        $this->validate(['name'=>'required','surname'=>'required','email'=>'required|email|unique:users,id','phone'=>'required','approve'=>'required']);
         
        $this->user->name = $this->name;
        $this->user->surname = $this->surname;
        $this->user->email = $this->email;
        $this->user->save();
        if($this->approve=="YES")
        {
          user_permission::firstOrCreate(['user_id'=>$this->user->id],['user_id'=>$this->user->id,'permission'=>'can_approve']);
        }
       
        session('success','Successfully Update PMU');
        return redirect()->route('can_entity_user',$this->user->company_id);
    }
    public function render()
    {
        return view('livewire.admin.entity.users.edit');
    }
}
