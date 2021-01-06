<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Auth;
class submodules extends Model {
    protected $guarded=[];
    public function permissions()
    {
        return $this->hasMany(permissions::class,'submodule_id','id');
    }

    public function roles(){
        return $this->belongsToMany(roles::class,'role_submodules','submodule_id','role_id');
    }

    public function module(){
        return $this->belongsTo(modules::class,'module_id','id');
    }

}
