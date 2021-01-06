<?php

namespace App\Http\Livewire\Admin\Accounttype;

use App\accounttype;
use Livewire\Component;

class Edit extends Component
{
    public $type;
    public $name;

    public function mount($id){

        $type = accounttype::whereid($id)->first();
        if(!is_null($type))
        {
            $this->type = $type;
            $this->name = $type->name;
        }
         else{
             session()->flash('error','Type Not Found');
         }
    }

    public function update()
    {
        $this->validate(['name'=>'required|unique:accounttypes,id']);
        $this->type->name = $this->name;
        $this->type->save();
        session()->flash('success','Successfully Updated Account Type');
        return redirect()->route('admin.accounttypes');
    }

    public function render()
    {
        return view('livewire.admin.accounttype.edit');
    }
}
