<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class manual_statement extends Model
{
     protected $guarded = [];

     public function logs()
     {
         return $this->hasMany(manual_statement_log::class,'manual_statement_id','id');
     }

     public function rtgs(){
         return $this->hasOne(rtgs::class,'refnumber','refnumber');
     }
}
