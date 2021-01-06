<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pestabishmentfee extends Model
{
    protected $guarded =[];
    public function currency(){
        return $this->hasOne(currency::class,'id','currency_id');
    }

    public function logs(){
        return $this->hasMany(pestablishmentfee_log::class,'pestablishmentfee_id','id');
    }
}
