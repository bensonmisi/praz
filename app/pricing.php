<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pricing extends Model
{
    protected $guarded =[];

    public function item(){
        return $this->hasOne(inventory_item::class,'id','inventory_id');
    }

    public function currency(){
        return $this->hasOne(currency::class,'id','currency_id');
    }

    public function logs(){
        return $this->hasMany(pricing_log::class,'id','pricing_id');
    }
}
