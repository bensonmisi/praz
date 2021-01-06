<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pnotice_category extends Model
{
     protected $guarded =[];

     public function category(){
         return $this->hasOne(category::class,'id','category_id');
     }
     public function notice(){
         return $this->hasOne(pnotice::class,'id','pnotice_id');
     }
}
