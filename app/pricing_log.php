<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pricing_log extends Model
{
     protected $guarded =[];

      public function user(){
          return $this->hasOne(user::class,'user_id','id');
      }
}
