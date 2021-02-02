<?php
namespace App\Repositories;

use App\category;
use App\Interfaces\welcomeInterface;
use App\Http\Requests\searchRequest;
use App\supplier;
use App\Traits\ResponseAPI;
use Carbon\Carbon;

class welcomeRepository implements welcomeInterface{
    use ResponseAPI;
    public function searchCertificate(searchRequest $request)
    {
        $supplier = supplier::where(['code'=>$request->search,'status'=>'APPROVED','expire_year'=>Carbon::now()->year])->get();
        if(count($supplier)>0){
           $data = $supplier->map(function($sup){
           return[
               "code"=>$sup->category->code,
               "name"=>$sup->category->name,
               "company"=>$sup->company->name,
               "regnumber"=>$sup->company->regnumber,
               "address"=>$sup->company->contacts->address,
               "emails"=>$sup->company->contacts->emails,
               "phones"=>$sup->company->contacts->phones,
               "city"=>$sup->company->city,
               "country"=>$sup->company->country,
               'date'=>$sup->created_at
           ];
           });

           return $this->success("SUCCESS",$data);
        }else{
           return $this->error("Certificate not found",500);
        }
    }

    public function getRegisteredSuppliers()
    {
        $categorylist = category::wherestatus('CREATED')->with(['suppliers'=>function($query){
            $query->where('expire_year','=',Carbon::now()->year);
            $query->where('status','=','APPROVED');
           },'suppliers.company.contacts'])->get();

           return $this->success('SUCCESS',$categorylist);
          
    }

    public function download($category)
    {
        
    }
}
