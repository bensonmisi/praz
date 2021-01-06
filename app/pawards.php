<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pawards extends Model
{
     protected $guarded = [];

     public function notice(){
         return $this->belongsTo(pnotice::class,'pnotice_id','id');
     }

     public function company(){
         return $this->hasOne(company::class,'id','company_id');
     }

     public function currency(){
        return $this->hasOne('App\currency','id','currency_id');
    }

    public function product(){
        return $this->hasOne(pnotice_products::class,'id','pnotice_product_id');
    }
}
