<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class capture_receipts extends Model
{
     protected $guarded = [];

     public function categories(){
         return $this->hasOne(category::class,'code','category');
     }
}
