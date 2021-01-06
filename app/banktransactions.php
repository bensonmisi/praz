<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class banktransactions extends Model
{
     protected $guarded=[];

     public function company(){
         return $this->hasOne(company::class,'regnumber','regnumber');
     }
}
