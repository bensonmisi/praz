<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class onlinepayments extends Model
{
    protected $guarded=[];

    public function invoice(){
        return $this->belongsTo(online_invoice::class,'invoice_number','invoice_number');
     }

     public function company(){
         return $this->hasOne(company::class,'id','company_id');
     }

}
