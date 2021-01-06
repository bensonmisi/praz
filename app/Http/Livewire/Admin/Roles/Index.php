<?php

namespace App\Http\Livewire\Admin\Roles;

use Livewire\Component;
use App\roles as userroles;
class Index extends Component
{
    public $roles;
    public function mount(){;
      $this->roles = userroles::get();
    }
    public function render()
    {
        return view('livewire.admin.roles.index');
    }
}
