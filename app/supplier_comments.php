<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class supplier_comments extends Model
{
     protected $guarded = [];

     public function administrator()
     {
         return $this->hasOne(administrator::class,'id','administrator_id');
     }
}
