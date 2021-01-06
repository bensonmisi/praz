<?php

namespace App\Http\Controllers;

use App\Exports\gazzateExport;
use App\gazzate;
use App\gazzate_suppliers;
use App\supplier;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class exportController extends Controller
{
   
    public function __construct()
    {
        $this->middleware('auth:admin');  
    }

    public function export($id){
        $gazzate = gazzate::whereid($id)->first();

        if(!is_null($gazzate))
        {
            $data =  supplier::with('company.contacts')
                              ->wherestatus('APPROVED')
                             ->whereexpire_year(Carbon::now()->year)
                             ->whereBetween('created_at',[$gazzate->from,$gazzate->to])
                             ->get();
            $array=[];
foreach ($data as $key => $value) {
  gazzate_suppliers::firstOrCreate(['supplier_id'=>$value->id,'gazzate_id'=>$gazzate->id],['supplier_id'=>$value->id,'gazzate_id'=>$gazzate->id]);
     if(!is_null($value->company)){
    $code= !is_null($value->category) ? $value->category->code : "";
    $description= !is_null($value->category) ? $value->category->name : "";
    $name=!is_null($value->company) ? $value->company->name : "";
    $date=$value->created_at;    
    $emails=!is_null($value->company->contacts) ? $value->company->contacts->email : "";
    $phones=!is_null($value->company->contacts) ? $value->company->contacts->phones : "";
    $address=!is_null($value->company->contacts) ? $value->company->contacts->address : "";
    $array[] = array("code"=>$code,"description"=>$description,"name"=>$name,"date"=>$date,"email"=>$emails,"phones"=>$phones,"address"=>$address);
    }
    }
         $export = new gazzateExport($array);
         return Excel::download($export,'invoices.xlsx');

        }
    }
}
