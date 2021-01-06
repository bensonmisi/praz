<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class accounttype extends Model
{
    protected $guarded =[];

    public function companies(){
        return $this->hasMany(company::class);
    }
}
