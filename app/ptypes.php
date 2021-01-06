<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ptypes extends Model
{
     protected $guarded = [];

     public function notices(){
         return $this->hasMany(pnotice::class,'id','ptype_id');
     }
}
