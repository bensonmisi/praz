<?php

namespace App\Http\Livewire\Admin\Customer;

use App\company;
use App\User;
use Livewire\Component;

class Show extends Component
{
   public $customer;

   public function mount($id){
       $this->customer = company::whereid($id)->first();
       if(is_null($this->customer)){
           session()->flash('error','Company Not Found');
           return redirect()->route('admin.customer');
       }
   } 
    
    public function resetPWD($id){
       $user  = User::whereid($id)->first();
       $user->password ='2019####';
       $user->save();
       session()->flash('success','Password Successfully Reset');
       return redirect()->route('can_show_customer',$this->customer->id);
    }
    public function render()
    {
        return view('livewire.admin.customer.show');
    }
}
