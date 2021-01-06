<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;
class role_submodules extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    protected $guarded=[];
    public function submodule()
    {
        return $this->hasOne(submodules::class,'id','module_id');
    }
}
