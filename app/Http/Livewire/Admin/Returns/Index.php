<?php

namespace App\Http\Livewire\Admin\Returns;

use App\returns;
use Livewire\Component;

class Index extends Component
{
    public $returns =[];
    public function mount(){
        $this->returns = returns::get();
    }

    public function remove($id){
        $return = returns::whereid($id)->first();
        $return->delete();
        session()->flash('success','Successfully Deleted Return');
        $this->mount();
    }
    public function render()
    {
        return view('livewire.admin.returns.index');
    }
}
