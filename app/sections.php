<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class sections extends Model
{
    protected $guarded =[];

    public function categories(){
        return $this->hasMany(category::class,'section_id','id');
    }
}
