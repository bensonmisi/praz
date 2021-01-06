<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tender_invoice extends Model
{
     protected $guarded=[];

     public function currency(){
         return $this->hasOne(currency::class,'id','currency_id');
     }
     public function onlinepayments(){
        return $this->hasMany('App\onlinepayments','invoice_number','invoice_number');
    }
}
