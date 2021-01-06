<?php

namespace App\Http\Controllers\administrator\suppliers;

use App\Http\Controllers\Controller;
use App\supplier;
use Carbon\Carbon;
use Illuminate\Http\Request;

class categoryController extends Controller
{
     public function index(){
         $suppliers = supplier::whereexpire_year(Carbon::now()->year)
                              ->get()
                              ->map(function($supplier){
                                  return[
                                      'id'=>$supplier->id,
                                      'code'=>$supplier->category->code,
                                      'year'=>$supplier->expire_year
                                  ];
                              });
            $grouped = $suppliers->groupBy('code');
            return response()->json(['data'=>$grouped],200);

     }
}
