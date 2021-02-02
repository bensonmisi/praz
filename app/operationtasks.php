<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class operationtasks extends Model
{
     protected $guarded=[];

     public function users(){
         return $this->hasMany(operationtask_user::class,'operationtask_id','id');
     }
}
