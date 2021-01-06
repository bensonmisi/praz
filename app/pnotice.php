<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pnotice extends Model
{
    protected $guarded =[];

    public function company(){

        return $this->hasOne('App\company','id','company_id');
    }

    public function classification(){
        return $this->hasOne('App\pclassification','id','pclassification_id');
    }

    public function currency(){
        return $this->hasOne('App\currency','id','currency_id');
    }

    public function awards(){
        return $this->hasMany(pawards::class);
    }

    public function category(){
        return $this->hasMany(pnotice_category::class,'pnotice_id','id');
    }

    public function type(){
        return $this->belongsTo(ptypes::class,'ptype_id','id');
    }

    public function logs(){
        return $this->hasMany(pnotice_log::class,'pnotice_id','id');
    }

    public function products(){
        return $this->hasMany(pnotice_products::class,'pnotice_id','id');
    }
    public function tenderInvoices(){
        return $this->hasMany(tender_invoice::class,'pnotice_id','id');
    }

    public function qoutations(){
        return $this->hasMany(qoutations::class,'pnotice_id','id');
    }
}
