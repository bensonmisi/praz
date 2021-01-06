<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;
class role_modules extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    protected $guarded =[];
    public function module()
    {
        return $this->hasOne(modules::class,'id','module_id');
    }
}
