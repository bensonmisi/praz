<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;
class category_menu extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    protected $guarded =[];
    
    public function modules()
    {
        return $this->hasMany(modules::class,'category_menu_id','id');
    }
    
    public function assigned()
    {
        return $this->hasOne(role_category_menu::class,'category_menu_id','id');
    }
    
   
}
