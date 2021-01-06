<?php

namespace App\Http\Controllers\administrator;

use App\documents;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class documentController extends Controller
{
     public  function index($id){
         $documents = documents::whereaccounttype_id($id)->get();
         return response()->json(['documents'=>$documents],200);
     }

     public function store(Request $request){
         $request->validate(['locality'=>'required','name'=>'required']);
         documents::create(['name'=>$request->name,'locality'=>$request->locality,'accounttype_id'=>$request->accounttype]);
         return response()->json(['message'=>'success'],200);
     }

     public function update(Request $request,documents $document){
        $request->validate(['locality'=>'required','name'=>'required']);
        $document->name = $request->name;
        $document->locality = $request->locality;
        $document->save();
        return response()->json(['message'=>'success'],200);
     }

     public function destroy(documents $document){
          if(is_null($document->company))
           {
            $document->delete();
           }else{
             $document->status = "DELETED";
             $document->save();
           }
           return response()->json(['message'=>'success'],200);
     }
}
