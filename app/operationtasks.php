<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class operationtasks extends Model
{
     protected $guarded=[];

     public function users(){
         return $this->hasOne(operationtask_user::class,'operationtask_id','id');
     }

     public function company(){
         return $this->hasOne(company::class,'id','company_id');
     }
}
