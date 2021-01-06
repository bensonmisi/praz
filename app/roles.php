<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class roles extends Model //implements //Auditable
{
     //use \OwenIt\Auditing\Auditable;
    protected $guarded =[];
    
  
    public function administrators()
    {
        return $this->hasMany(administrator::class,'role_id','id');
    }
     

    public function modules(){
        return $this->belongsToMany(modules::class,'role_modules','role_id','module_id');
    }

    public function submodules()
    {
        return $this->belongsToMany(submodules::class,'role_submodules','role_id','submodule_id');
    }

    public function permissions()
    {
        return $this->belongsToMany(permissions::class,'role_permissions','role_id','permission_id');
    }
}
