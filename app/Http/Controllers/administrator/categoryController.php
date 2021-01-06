<?php

namespace App\Http\Controllers\administrator;

use App\category;
use App\Http\Controllers\Controller;
use App\sections;
use Illuminate\Http\Request;
use App\Imports\categoryImport;
use Maatwebsite\Excel\Facades\Excel;

class categoryController extends Controller
{
    public function index(){
        $sections = sections::get();
        $categorylist = category::with('section')->get()->map(function($category){
            return[
              'id'=>$category->id,
              'name'=>$category->name,
              'code'=>$category->code,
              'status'=>$category->status,
              'section'=>$category->section->name
            ];
        });
        return response()->json(['sections'=>$sections,'category'=>$categorylist],200);
    }
 
    public function store(Request $request){
        $request->validate(['name'=>'required','code'=>'required']);
 
        category::firstOrCreate(['code'=>$request->code],['name'=>$request->name,'code'=>$request->code,'section_id'=>$request->section]);
         return response()->json(['message'=>'success'],200);
    }
 
    public function update(Request $request, category $category){
        $request->validate(['name'=>'required','code'=>'required']);
        $category->name = $request->name;
        $category->code = $request->code;
        $category->section_id = $request->section;
        $category->save();
        return response()->json(['message'=>'success'],200);
    }

    public function upload(Request $request){
     Excel::import(new categoryImport,$request->filename);
     
    }
 
    public function destroy(category $category){
          if(count($category->suppliers)>0)
            {
               $category->status ="DELETED";
            }
            else
            {
            $category->delete();
            }
 
            return response()->json(['message'=>'success'],200);
    }
}
