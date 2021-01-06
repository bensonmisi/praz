<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
class permissions extends Model {

    protected $guarded =[];

    public function roles(){
      return $this->belongsToMany(roles::class,'role_permissions','permission_id','role_id');
    }

    public function submodule(){
      return $this->belongsTo(submodules::class,'submodule_id','id');
    }
    
   
}
