<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class supplier_jobs extends Model
{
     protected $guarded = [];

     public function user(){
         return $this->hasOne(administrator::class,'user_id','id');
     }
}
