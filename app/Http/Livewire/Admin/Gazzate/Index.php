<?php

namespace App\Http\Livewire\Admin\Gazzate;

use App\gazzate;
use Livewire\Component;

class Index extends Component
{
    public $gazzates = [];

    public function mount(){
        $this->gazzates = gazzate::get();
    }

    public function remove($id){
        $dta = gazzate::whereid($id)->first();
        $dta->delete();
        session()->flash('success','Gazzate deleted');
        $this->mount();
    }
    public function render()
    {
        return view('livewire.admin.gazzate.index');
    }
}
