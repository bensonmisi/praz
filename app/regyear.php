<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class regyear extends Model
{
     public function formate(){
         return[
             'year'=>$this->year
         ];
     }
}
