<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class operationtask_user extends Model
{
     protected $guarded=[];

     public function user(){
         return $this->hasOne(administrator::class,'id','administrator_id');
     }

     public function task(){
         return $this->hasOne(operationtasks::class,'id','operationtask_id');
     }
}
