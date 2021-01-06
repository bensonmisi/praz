<?php

namespace App\Http\Livewire\Admin\Roles;

use App\modules;
use App\permissions;
use App\roles;
use App\submodules;
use Livewire\Component;

class Assign extends Component
{
    public $role;
    public $modules;

    public function mount($id){
     $this->role = $id;
     $this->modules = modules::with(['roles'=>function($query)use($id){
         $query->where('role_id','=',$id);
     },'submodules.permissions.roles'=>function($query)use($id){
         $query->where('role_id','=',$id);
     }])->get();
    }

    public function assignModule($id){
        $role = roles::whereid($this->role)->first();
        $role->modules()->attach($id);
        $role->save();

        session()->flash('success','Successfully assigned module to role');
        $this->modules = modules::with(['roles'=>function($query){
            $query->where('role_id','=',$this->role);
        },'submodules.permissions.roles'=>function($query){
            $query->where('role_id','=',$this->role);
        }])->get();

        
    }

    public function unassignModule($id){
        $role = roles::whereid($this->role)->first();
        $role->modules()->detach($id);
        $role->save();

        $submodules = submodules::wheremodule_id($id)->with('permissions')->get();
        if(count($submodules)>0){
            foreach ($submodules as $key => $value) {
                 $value->roles()->detach($this->role);
                 
                 foreach($value->permissions as $permission){
                  $permission->roles()->detach($this->role);
                 }
            }
        }

        session()->flash('success','Successfully Detach module to role');
        $this->modules = modules::with(['roles'=>function($query){
            $query->where('role_id','=',$this->role);
        },'submodules.permissions.roles'=>function($query){
            $query->where('role_id','=',$this->role);
        }])->get();   
    }

    public function assignSubmodule($id){

        $role = roles::whereid($this->role)->first();
        $role->submodules()->attach($id);
        $role->save();

        session()->flash('success','Successfully assigned module to role');
        $this->modules = modules::with(['roles'=>function($query){
            $query->where('role_id','=',$this->role);
        },'submodules.permissions.roles'=>function($query){
            $query->where('role_id','=',$this->role);
        }])->get();
    }

    public function unassignSubmodule($id){

        $role = roles::whereid($this->role)->first();
        $role->submodules()->detach($id);
        $role->save();
        $permissions = permissions::wheresubmodule_id($id)->get();
        if(count($permissions)>0){          
               foreach($permissions as $permission){
                  $permission->roles()->detach($this->role);
                 }
        }


        session()->flash('success','Successfully Detached SubModule to role');
        $this->modules = modules::with(['roles'=>function($query){
            $query->where('role_id','=',$this->role);
        },'submodules.permissions.roles'=>function($query){
            $query->where('role_id','=',$this->role);
        }])->get();
    }


    public function assignPermission($id){
        $role = roles::whereid($this->role)->first();
        $role->permissions()->attach($id);
        $role->save();

        session()->flash('success','Successfully assigned permission to role');
        $this->modules = modules::with(['roles'=>function($query){
            $query->where('role_id','=',$this->role);
        },'submodules.permissions.roles'=>function($query){
            $query->where('role_id','=',$this->role);
        }])->get();  
    }

    public function unassignPermission($id){
        $role = roles::whereid($this->role)->first();
        $role->permissions()->detach($id);
        $role->save();

        session()->flash('success','Successfully assigned permission to role');
        $this->modules = modules::with(['roles'=>function($query){
            $query->where('role_id','=',$this->role);
        },'submodules.permissions.roles'=>function($query){
            $query->where('role_id','=',$this->role);
        }])->get();  
    }

   
    public function render()
    {
        return view('livewire.admin.roles.assign');
    }
}
