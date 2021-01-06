<?php

namespace App\Http\Controllers;

use App\category;
use Carbon\Carbon;
use Illuminate\Http\Request;

class welcomeController extends Controller
{
    public function index(){
        
    }
     public function suppliers(){
         $categorylist = category::with(['suppliers'=>function($query){
          $query->where('expire_year','=',Carbon::now()->year);
          $query->where('status','=','APPROVED');
         },'suppliers.company'])->get();
         return response()->json(['categorylist'=>$categorylist],200);
     }

     public function notices(){

     }

     public function awards(){

     }
}
