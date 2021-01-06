<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class rtgs_comments extends Model
{
     protected $guarded =[];

     public function rtgs(){
         return $this->belongsTo(rtgs::class,'rtgs_id','id');
     }

     public function user(){
        return $this->hasOne(administrator::class,'id','user_id');
     }
}
