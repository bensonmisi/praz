<?php

namespace App\Http\Controllers\administrator;

use App\Exports\gazzateExport;
use App\gazzate;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;

class gazateController extends Controller
{
     public function index(){
         $data = gazzate::with('suppliers')
                        ->get()
                        ->map(function($dt){
                            return[
                                'id'=>$dt->id,
                                'name'=>$dt->name,
                                'suppliers'=>count($dt->suppliers)
                            ];
                        });
         return response()->json(['data'=>$data],200);
     }

     public function store(Request $request){
         $request->validate(['name'=>'required']);
          gazzate::create(['name'=>$request->name,'administrator_id'=>Auth::user()->id]);
          return response()->json(['message'=>'success'],200);
        }


       public function update(Request $request,gazzate $gazzate){
        $request->validate(['name'=>'required']);  
        $gazzate->name = $request->name;
        $gazzate->save();
        return response()->json(['message'=>'success'],200);
       }

       public function destroy(gazzate $gazzate){
           $gazzate->delete();
           return response()->json(['message'=>'success'],200);  
       }

       public function download($id){
          return  Excel::download(new gazzateExport($id),'gazzate.csv');
       }
}
