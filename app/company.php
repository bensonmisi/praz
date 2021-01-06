<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class company extends Model
{
     protected $guarded=[];

     public function users(){
          return $this->hasMany('App\User','company_id','id');
     }

     public function contacts(){
          return $this->hasOne('App\company_contacts','company_id','id');
     }

     public function pclass(){
          return $this->hasOne('App\pcompanyclass','company_id','id');
     }

     public function documents(){ 
          return $this->belongsToMany(documents::class,'company_documents','company_id','document_id');
     }

     public function documentlist(){
          return $this->hasMany(documents::class,'accounttype_id','accounttype_id');
     }
     public function registrations(){
          return $this->hasMany(supplier::class,'company_id','id');
     }

     public function onlinepayments(){
          return $this->hasMany(onlinepayments::class,'company_id','id'); 
     }
     public function rtgs(){
          return $this->hasMany(rtgs::class,'company_id','id');
     }

     public function awards(){
          return $this->hasMany(pawards::class,'company_id','id');
     }
     public function banktransactions(){
          return $this->hasMany(banktransactions::class,'customer_number','regnumber');
      }

      public function receipts(){
           return $this->hasMany(receipt::class,'company_id','id');
      }

      public function supplier_jobs(){
           return $this->hasOne(supplier_jobs::class,'company_id','id');
      }

      public function supplier_comments(){
           return $this->hasMany(supplier_comments::class,'company_id','id');
      }

      public function invoices(){
           return $this->hasMany(online_invoice::class,'company_id','id');
      }

      public function accounttype(){
           return $this->hasOne(accounttype::class,'id','accounttype_id');
      }

      public function companyDocuments(){
           return $this->hasMany(company_documents::class,'company_id','id');
      }

      public function comments(){
           return $this->hasMany(company_document_comments::class,'company_id','id');
      }
}
