<?php

namespace App\Http\Controllers\administrator\suppliers;

use App\Http\Controllers\Controller;
use App\regyear;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class yearlyController extends Controller
{
     public function index(){
         $years = [Carbon::now()->year,Carbon::now()->year-1];
         $years = regyear::wherein('year',$years)->get();
         $array =[];
         foreach ($years as $key => $value) {
           $arr=[];
            for ($i=1; $i <=12 ; $i++) { 
               $data = DB::table('suppliers')->whereexpire_year($value->year)->whereMonth('created_at',$i)->count();
               $arr[] = array("month"=>$i,"year"=>$value->year,"total"=>$data);
          }
          $array[] = array("year"=>$value->year,"data"=>$arr);
         }
         return response()->json(['data'=>$array],200);

     }
}
