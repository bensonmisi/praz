<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class general_exchange extends Model
{
     protected $guarded = [];

     public function currency(){
          return $this->hasOne(currency::class,'id','currency_id');
     }

     public function user(){
          return $this->hasOne(administrator::class,'id','user_id');
     }
}
