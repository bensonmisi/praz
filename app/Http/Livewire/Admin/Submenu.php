<?php

namespace App\Http\Livewire\Admin;

use App\roles;
use App\submodules;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Submenu extends Component
{

    public $submodules =[];
    public function mount($id){
      $role = roles::whereid(Auth::user()->role->id)->with(['submodules'=>function($query)use($id){
          $query->where('module_id','=',$id);
      }])->first();
     
    $this->submodules = $role->submodules;
    }
    public function render()
    {
        return view('livewire.admin.submenu');
    }
}
