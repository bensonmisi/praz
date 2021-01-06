<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pcontractfee_log extends Model
{
     protected $guarded =[];

     public function contractfee(){
         return $this->belongsTo(pcontractfee::class,'pcontractfee_id','id');
     }

     public function user(){
         return $this->hasOne(user::class,'user_id','id');
     }
}
