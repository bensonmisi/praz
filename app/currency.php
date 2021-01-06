<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class currency extends Model
{
    protected $guarded =[];

    public function invoices(){
        return $this->hasMany(online_invoice::class);
    }
}
