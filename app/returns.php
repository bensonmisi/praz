<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class returns extends Model
{
    use SoftDeletes;
     protected $guarded=[];

     public function uploads(){
         return $this->hasMany(returns_response::class,'return_id','id');
     }

     public function comments(){
         return $this->hasMany(returns_comments::class,'return_id','id');
     }
}
