<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class rtgs extends Model
{
    protected  $guarded =[];

    public function invoice(){
     return $this->hasMany(online_invoice::class,'invoice_number','invoice_number');
    }

    public function company(){
        return $this->hasOne(company::class,'id','company_id');
    }

    public function currency(){
        return $this->hasOne(currency::class,'id','currency_id');
    }

    public function comments(){
        return $this->hasMany(rtgs_comments::class,'rtgs_id','id');
    }

    public function logs(){
        return $this->hasMany(rtgs_log::class,'rtgs_id','id');
    }

    public function statement(){
        return $this->hasOne(manual_statement::class,'refnumber','refnumber');
    }

    public function receipts(){
        return $this->hasMany(receipt::class,'invoicenumber','invoice_number');
    }
    public function transfer(){
        return $this->hasOne(transfers::class,'invoicenumber','invoice_number');
      }
    
}
