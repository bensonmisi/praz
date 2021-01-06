<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class returns_response extends Model
{
 protected $guarded=[];

 public function returns(){
     return $this->belongsTo(returns::class,'id','return_id');
 }
  public function company()
  {
      return $this->hasOne(company::class,'id','company_id');
  }
 public function comments(){
     return $this->hasMany(returns_comments::class,'returns_response_id','id');
 }
}
