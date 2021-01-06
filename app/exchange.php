<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class exchange extends Model
{
     protected $guarded =[];

     public function base_currency(){
         return $this->hasOne(currency::class,'id','base_id');
     }

     public function other_currency(){
         return $this->hasOne(currency::class,'id','other_id');
     }
     public function user(){
        return $this->hasOne(administrator::class,'id','user_id');
   }

   public function invoices(){
       return $this->hasMany(online_invoice::class);
   }
}
