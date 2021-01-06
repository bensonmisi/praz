<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;
class role_permissions extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    protected $guarded=[];
    
    public function permission()
    {
        return $this->hasOne(permissions::class,'id','permission_id');
    }
   
}
