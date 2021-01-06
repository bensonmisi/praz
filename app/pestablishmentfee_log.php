<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pestablishmentfee_log extends Model
{
     protected $guarded = [];

     public function pestablishmentfee(){
         return $this->belongsTo(pestablishmentfee_log::class,'pestablishmentfee_id','id');
     }
}
