<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pthreshold extends Model
{
    protected $guarded =[];

    public function classification(){
        return $this->hasOne(pclassification::class,'id','pclassification_id');
    }

    public function pclass(){
        return $this->hasOne(pclass::class,'id','pclass_id');
    }

    public function currency(){
        return $this->hasOne(currency::class,'id','currency_id');
    }

    public function logs(){
        return $this->hasMany(pthreshold_log::class,'pthreshold_id','id');
    }
}
