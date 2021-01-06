<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class qoutations extends Model
{
     protected $guarded=[];

     public function notice(){
         return $this->belongsTo(pnotice::class);
     }
}
