<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Auth;
class modules extends Model
{
    protected $guarded=[];
    
   
    public function submodules()
    {
        return $this->hasMany(submodules::class,'module_id','id');
        
    }

    public function roles(){
        return $this->belongsToMany(roles::class,'role_modules','module_id','role_id');
    }
}
