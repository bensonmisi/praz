<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class documents extends Model
{
    protected $guarded=[];

    public function accounttype(){
        return $this->hasOne(accounttype::class,'id','accounttype_id');
    }

    public function company(){
        return $this->hasOne('App\company_documents','document_id','id');
    }
}
