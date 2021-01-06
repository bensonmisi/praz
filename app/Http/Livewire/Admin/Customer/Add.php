<?php

namespace App\Http\Livewire\Admin\Customer;

use App\company;
use App\User;
use Livewire\Component;

class Add extends Component
{
   public $company;
   public $name;
   public $surname;
   public $phone;
   public $email;

   public function mount($id){
    $this->company = company::whereid($id)->first();
   }

   public function add(){
    $this->validate([
        'name'=>'required',
        'surname'=>'required',
        'phone'=>'required',
        'email'=>'required|email|unique:users,email']);   

        User::create([
                'name'=>$this->name,
                'surname'=>$this->surname,
                'phone'=>$this->phone,
                'email'=>$this->email,
                'password'=>'2019###',
                'company_id'=>$this->company->id,
                'role_id'=>'9',
                'authcode'=>rand(100,1000),
                'status'=>'PENDING',
                ]);
        session()->flash('success','Successfully Created User');
        return redirect()->route('can_show_customer',$this->company->id);
   }

    public function render()
    {
        return view('livewire.admin.customer.add');
    }
}
