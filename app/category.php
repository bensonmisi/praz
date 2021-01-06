<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class category extends Model
{
    protected $guarded =[];

    public function section(){
        return $this->belongsTo(sections::class);
    }

    public function suppliers(){
        return $this->hasMany(supplier::class,'category_id','id');
    }

    public function notices(){
        return $this->hasMany(pnotice_category::class,'category_id','id');
    }
}
