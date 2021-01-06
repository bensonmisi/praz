<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pbondcap extends Model
{
     protected $guarded=[];

     public function logs(){
         return $this->hasMany(pbondcap_log::class,'pbondcap_id','id');
     }
}
