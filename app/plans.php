<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class plans extends Model
{
    protected $guarded =[];

    public function company(){
        return $this->hasOne(company::class,'id','company_id');
    }
}
