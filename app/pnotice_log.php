<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pnotice_log extends Model
{
     protected $guarded=[];

     public function user(){
         return $this->hasOne(User::class,'id','user_id');
     }
}
