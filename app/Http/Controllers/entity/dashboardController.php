<?php

namespace App\Http\Controllers\entity;

use App\category;
use App\currency;
use App\Http\Controllers\Controller;
use App\pclassification;
use App\pnotice;
use App\ptypes;
use Illuminate\Http\Request;

class dashboardController extends Controller
{
     public function index(){
        $notices = pnotice::with('type','products','company','category.category','currency')->orderby('id','desc')->wherestatus('PUBLISHED')->paginate(100);
        return  response()->json(['notices'=>$notices],200);
     }
   
     public function settings(){
        $types = ptypes::get(); 
        $currency = currency::get();
        $categories = category::get();
        $classifications = pclassification::get();
        return response()->json(['types'=>$types,'currency'=>$currency,'categories'=>$categories,'classifications'=>$classifications]);  
     }

     public function store(){

     }
}

