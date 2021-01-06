<?php

namespace App\Http\Livewire\Admin\Returns;

use App\returns;
use Livewire\Component;

class Response extends Component
{
    public $return;

    public function mount($id){
        $this->return = returns::whereid($id)->first();
    }
    public function render()
    {
        return view('livewire.admin.returns.response');
    }
}
