<?php

namespace App\Http\Livewire\Admin\Customer;

use App\company;
use App\User;
use Livewire\Component;
use Illuminate\Support\Str;

class Index extends Component
{
    public $customers =[];
    public $users = [];

    public $query;
    public function search(){
        $contains = Str::contains($this->query,'@');
        $this->customers=[];
        $this->users=[];
        if($contains){
         $this->users =  User::where('email','like','%'.$this->query.'%')->get();
        }else{
        $this->customers = company::where('name','like','%'.$this->query.'%')->orWhere('regnumber','like','%'.$this->query.'%')->get();
        }
    }
    public function render() 
    {
        return view('livewire.admin.customer.index');
    }
}
