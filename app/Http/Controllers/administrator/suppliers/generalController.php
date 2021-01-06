<?php

namespace App\Http\Controllers\administrator\suppliers;

use App\Http\Controllers\Controller;
use App\supplier;
use Carbon\Carbon;
use Illuminate\Http\Request;

class generalController extends Controller
{
     public function index()
     {
         $suppliers= supplier::whereDate('created_at',Carbon::now())
                             ->get()
                             ->map(function($supplier){
                              return[
                                  'id'=>$supplier->id,
                                   'company'=>!is_null($supplier->company) ? $supplier->company->name : '',
                                   'expire_year'=>$supplier->expire_year,
                                   'category'=>!is_null($supplier->category) ? $supplier->category->code :''
                              ];
                             });
       
        $total = count($suppliers);
         return response()->json(['data'=>$suppliers,'total'=>$total],200);
     }

  public function search(Request $request){
     $request->validate(['startdate'=>'required','enddate'=>'required']);
     $suppliers= supplier::whereBetween('created_at',[$request->startdate,$request->enddate])
    ->get()
    ->map(function($supplier){
     return[
         'id'=>$supplier->id,
          'company'=>!is_null($supplier->company) ? $supplier->company->name : '',
          'expire_year'=>$supplier->expire_year,
          'category'=>!is_null($supplier->category) ? $supplier->category->code :''
     ];
    });

$total = count($suppliers);
return response()->json(['data'=>$suppliers,'total'=>$total],200);
  }
}
