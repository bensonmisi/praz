<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class transfers extends Model
{
    protected $guarded = [];

    public function transaction(){
        return $this->hasOne(banktransactions::class,'source_reference','referencenumber');
    }

    public function invoice(){
        return $this->hasOne(online_invoice::class,'invoice_number','invoicenumber');
    }
}
