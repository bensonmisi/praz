<?php

namespace App\Http\Livewire\Admin\Roles;

use App\roles;
use Livewire\Component;

class Delete extends Component
{
    public $role;
    public $rid;
    public function mount($id)
    {
        $role = roles::whereid($id)->with('administrators')->first();
       
        if(count($role->administrators) >0)
         {
             session()->flash('error','Role Already Assigned to user');
             return redirect()->route('admin.roles');
         }

         $this->role = $role;
         $this->rid = $role->id;
    }

    public function remove(){
        $role = roles::whereid($this->rid)->first();
        $role->delete();
        session()->flash('success','Role Successfully Deleted');
        return redirect()->route('admin.roles');   
    }
    public function render()
    {
        return view('livewire.admin.roles.delete');
    }
}
