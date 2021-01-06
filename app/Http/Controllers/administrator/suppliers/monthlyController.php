<?php

namespace App\Http\Controllers\administrator\suppliers;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class monthlyController extends Controller
{
     public function index(){
         $array =[];

         for ($i=1; $i <=12 ; $i++) { 
              $data = DB::table('suppliers')->whereexpire_year(Carbon::now()->year)->whereMonth('created_at',$i)->count();
              $array[] = array("month"=>$i,"year"=>Carbon::now()->year,"total"=>$data);
         }

         return response()->json(['data'=>$array],200);
     }

     public function search(Request $request){
         $request->validate(['year'=>'required']);
         $array =[];
         for ($i=1; $i <=12 ; $i++) { 
            $data = DB::table('suppliers')->whereexpire_year($request->year)->whereMonth('created_at',$i)->count();
            $array[] = array("month"=>$i,"year"=>$request->year,"total"=>$data);
       }

       return response()->json(['data'=>$array],200);
     }

}
