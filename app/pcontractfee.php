<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pcontractfee extends Model
{
  protected $guarded =[];

  public function currency(){
      return $this->hasOne(currency::class,'id','currency_id');
  }

  public function logs(){
    return $this->hasMany(pcontractfee_log::class,'id','pcontractfee_id');
  }
}
