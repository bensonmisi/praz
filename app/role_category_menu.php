<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class role_category_menu extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    protected $guarded =[];
    public function category()
    {
        return $this->hasOne(category_menu::class,'id','category_menu_id');
    }
}
