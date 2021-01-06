<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pclassification extends Model
{
     protected $guarded =[];

     public function logs(){
          return $this->hasMany(pclassification_log::class,'pclassification_id','id');
     }
}
