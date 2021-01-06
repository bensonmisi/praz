<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class gazzate extends Model
{
    use SoftDeletes;
     protected $guarded=[];

     public function suppliers()
     {
         return $this->hasMany(supplier::class,'gazzate_id','id');
     }
}
