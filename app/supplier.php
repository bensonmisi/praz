<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class supplier extends Model
{
    protected $guarded =[];

    public function company(){
        return $this->hasOne('App\company','id','company_id');
    }
    public function category(){
        return $this->hasOne('App\category','id','category_id');
    }

    public function agent(){
        return $this->hasOne('App\administrator','id','assigned_to');
    }
    public function admin(){
        return $this->hasOne('App\administrator','id','assigned_by');
    }

    public function formate(){
        return[
            "id"=>$this->id,
            "expire_year"=>$this->expire_year,
            "category"=>$this->category,
            "status"=>$this->status,
            "printed"=>$this->printed
        ];
    }
}
