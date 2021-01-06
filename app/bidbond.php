<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class bidbond extends Model
{
    protected $guarded=[];

    public function notice(){
        return $this->belongsTo(pnotice::class,'pnotice_id','id');
    }
    public function receipt(){
        return $this->hasOne(receipt::class,'receiptnumber','receipt_number');
    }

}

