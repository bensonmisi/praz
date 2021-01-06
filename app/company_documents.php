<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class company_documents extends Model
{
    protected $guarded=[];
     public function document(){
         return $this->hasOne('App\documents','id','document_id');
     }
}
