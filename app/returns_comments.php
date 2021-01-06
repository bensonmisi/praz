<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class returns_comments extends Model
{
     protected $guarded=[];

     public function user(){
         return $this->hasOne(administrator::class,'id','administrator_id');
     }
}
