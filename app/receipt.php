<?php

namespace App;

use App\Http\Controllers\administrator\finance\onlineController;
use Illuminate\Database\Eloquent\Model;

class receipt extends Model
{
  protected $guarded =[];
  protected $casts = [
    'created_at' => 'date',
];

public function invoice(){
  return $this->hasOne(onlineController::class,'invoice_number','invoicenumber');
}
}
