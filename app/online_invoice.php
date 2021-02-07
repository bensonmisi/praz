<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class online_invoice extends Model
{
     protected $guarded=[];
     public function category(){
         return $this->hasOne('App\category','id','category_id');
     }

     public function currency(){
         return $this->hasOne('App\currency','id','currency_id');
     }

     public function onlinepayments(){
         return $this->hasMany('App\onlinepayments','invoice_number','invoice_number');
     }

     public function rtgs(){
         return $this->hasMany('App\rtgs','invoice_number','invoice_number');
     }

     public function internal_payments(){
         return $this->hasMany(internal_payments::class,'invoice_number','invoice_number');
     }

      public function logs(){
          return $this->hasMany(online_invoice_log::class,'invoice_number','invoice_number');
      }

      public function receipts(){
          return $this->hasMany(receipt::class,'invoicenumber','invoice_number');
      }

      public function company(){
          return $this->belongsTo(company::class);
      }

      public function transfers(){
          return $this->hasMany(transfers::class,'invoicenumber','invoice_number');
      }

      public function assigned(){
          return $this->hasOne(operationtasks::class,'company_id','company_id')->where(['action'=>'INVOICE_APPROVAL','status'=>'PENDING']);
      }

      public function formate(){
          return[
              "id"=>$this->id,
               "invoice_number"=>$this->invoice_number,
               "created_at"=>$this->created_at,
               "currency"=>$this->currency->name,
               "year"=>$this->year,
               "amount"=>$this->cost,
               "category"=>$this->category,
               "status"=>$this->status,
               "receipts"=>$this->receipts
          ];
      }
}
