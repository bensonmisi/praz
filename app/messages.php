<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class messages extends Model
{
     protected $guarded =[];

     public function company()
     {
         return $this->hasOne(company::class,'id','company_id');
     }

     public function administrator(){
         return $this->hasOne(administrator::class,'id','user_id');
     }

}
