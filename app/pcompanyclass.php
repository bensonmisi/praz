<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pcompanyclass extends Model
{
    protected $guarded =[];

    public function pclass(){
        return $this->hasOne('App\pclass','id','pclass_id');
    }

    public function company(){
        return $this->hasOne('App\company','id','company_id');
    }
}
