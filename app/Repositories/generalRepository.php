<?php

namespace App\Repositories;

use App\accounttype;
use App\category;
use App\company;
use App\currency;
use App\documents;
use App\Interfaces\generalInterface;
use App\online_invoice;
use App\regyear;
use App\supplier;
use App\Traits\ResponseAPI;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class generalRepository implements generalInterface{

    use ResponseAPI;
    
    public function getCategories(){
      return  category::wherestatus('CREATED')->get();
    }

    public function getRegistrations($companyid){
        return supplier::where(['company_id'=>$companyid])->where('expire_year','>=',Carbon::now()->year)->get()->map->formate();
    }

    public function getInvoices($companyid,$args=[]){
     return online_invoice::wherecompany_id($companyid)->whereIn('status',$args)->get()->map->formate();
    }

    public function getInvoiceTotals($company, $args)
    {
      $invoices = online_invoice::wherecompany_id($company)->whereIn('status',$args)->get();
      $grouped = $invoices->groupBy('invoice_number');
       $array=[];
      foreach ($grouped as $key => $value) {
         $array[] = array("invoice_number"=>$key,
                           "total"=>$value->sum('cost'),
                            "receipted"=>$value[0]->receipts->sum('amount')
                        );
      }
      return $array; 

    }

    public  function getRegistrationsYears(){
         return regyear::where('year','>=',Carbon::now()->year)->get()->map->formate();
    }

    public function getCompanyProfile($companyid){
       $company = company::whereid($companyid)->first();
       return $company->formate();
    }

    public function getAccountype(){
        $types = accounttype::get();
        return $types;
    }

    public function getCurrency(){
        $currency = currency::get();
        if(strtoupper(Auth::user()->company->country) !='ZIMBABWE'){
            $currency = currency::whereid(1)->get();   
        }

        return $currency;
    }

    public function getCompanyById()
    {
       return Auth::user()->company->id;  
    }

    public function getUserById()
    {
       return Auth::user()->id;  
    }
   
}