<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pclass extends Model
{
     protected $guarded =[];
     public function threshold(){
         return $this->hasMany(pthreshold::class,'pclass_id','id');
     }

     public function logs(){
         return $this->hasMany(pclass_log::class,'pclass_id','id');
     }
}
