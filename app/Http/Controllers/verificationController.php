<?php

namespace App\Http\Controllers;

use App\supplier;
use Illuminate\Http\Request;

class verificationController extends Controller
{
    
    public function search(Request $request){
        $this->validate($request,['code'=>'required']);
        $supplier = supplier::where(['code'=>$request->code,'status'=>'APPROVED'])->first();
        return view('results')->with(compact('supplier'));
    }
}
