<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pnotice_products extends Model
{
     protected $guarded =[];

     public function notice(){
          return $this->belongsTo(pnotice::class,'pnotice_id','id');
     }
}
