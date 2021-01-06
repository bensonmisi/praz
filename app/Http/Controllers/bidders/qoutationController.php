<?php

namespace App\Http\Controllers\bidders;

use App\Http\Controllers\Controller;
use App\pnotice;
use App\qoutations;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class qoutationController extends Controller
{
     public function index(){
         $quotations = qoutations::with('notice.company')->wherecompany_id(Auth::user()->company->id)->get();
         return response()->json(['qoutations'=>$quotations],200);
     }

     public function upload(Request $request){
         $request->validate(['amount'=>'required','qoute'=>'required']);
         $path = $request->file('qoute')->store('qoutations');
         qoutations::updateOrCreate(['company_id'=>Auth::user()->company->id,'pnotice_id'=>$request->notice],['company_id'=>Auth::user()->company->id,'pnotice_id'=>$request->notice,'amount'=>$request->amount,'path'=>$path]);
         $notice = pnotice::with(['type','products','company','category.category','currency','type','qoutations'=>function($query){
            $query->where('company_id','=',Auth::user()->company->id);
        }])->whereid($request->notice)->first();
        return response()->json(['notice'=>$notice],200);

     }
}
