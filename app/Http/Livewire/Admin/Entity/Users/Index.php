<?php

namespace App\Http\Livewire\Admin\Entity\Users;

use App\company;
use App\User;
use Livewire\Component;

class Index extends Component
{
    public $users =[];
    public $company;
    public function mount($id){
        $this->company = company::whereid($id)->first();
        $this->users = User::wherecompany_id($id)->get();
    } 
    public function render()
    {
        return view('livewire.admin.entity.users.index');
    }
}
