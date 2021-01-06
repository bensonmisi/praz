<?php

namespace App\Http\Controllers\administrator;

use App\accounttype;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class accounttypeController extends Controller
{
    public function index(){
        $types = accounttype::get();
        return response()->json(['types'=>$types],200);
    }

    public function store(Request $request){
        $request->validate(['name'=>'required']);
        accounttype::firstOrCreate(['name'=>$request->name],['name'=>$request->name]);
        return response()->json(['message'=>'success'],200);
    }

    public function update(Request $request,accounttype $accounttype){
        $request->validate(['name'=>'required']);
        $accounttype->name = $request->name;
        $accounttype->save();
        return response()->json(['message'=>'success'],200);
    }

    public function destroy($id){
        $accounttype = accounttype::with('companies')->whereid($id)->first();
        if(count($accounttype->companies)>0){
            $accounttype->status = 'DELETED';
            $accounttype->save();
        }
        else
        {
            $accounttype->delete();
        }
        return response()->json(['message'=>'success'],200);
    }
}
