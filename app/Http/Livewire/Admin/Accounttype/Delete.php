<?php

namespace App\Http\Livewire\Admin\Accounttype;

use App\accounttype;
use Livewire\Component;

class Delete extends Component
{
    public $type ;

    public function mount($id){
        $type = accounttype::whereid($id)->first();
        if(!is_null($type))
        {
             if(count($type->companies)===0)
               {
                $this->type = $type;
               }
               else{
                session()->flash('error','Account type already used when creating an company account'); 
                return redirect()->route('admin.accounttypes');
               }
        }
         else{
             session()->flash('error','Type Not Found');
         }
    }

    public function remove(){
        $this->type->delete();
        session()->flash('success','Account type successfully deleted'); 
        return redirect()->route('admin.accounttypes');
    }
    public function render()
    {
        return view('livewire.admin.accounttype.delete');
    }
}
