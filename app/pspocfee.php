<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pspocfee extends Model
{
     protected $guarded =[];
     public function currency(){
        return $this->hasOne(currency::class,'id','currency_id');
    }

    public function threshold(){
      return $this->hasOne(pthreshold::class,'id','pthreshold_id');
    }

    public function logs(){
      return $this->hasMany(pspocfee_log::class,'pspocfee_id','id');
    }
}
