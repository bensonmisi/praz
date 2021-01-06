<?php

namespace App\Http\Controllers\administrator\finance;

use App\Exports\onlinepaymentExport;
use App\Http\Controllers\Controller;
use App\onlinepayments;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class onlineController extends Controller
{
     public function index(){
         $transactions = onlinepayments::wheredate('created_at','=',Carbon::now())->wherestatus('PAID')->get();
         $ecocash = 0;
         $onemoney=0;
         $visa =0;
         if(count($transactions)>0){
             foreach ($transactions as $key => $value)
              {
                  if($value->mode=='ecocash')
                    {
                      $ecocash = $ecocash + (int)$value->amount;
                    }elseif($value->mode =='onemoney'){
                        $onemoney = $onemoney + (int)$value->amount;
                    }else{
                        $visa = $visa+(int)$value->amount;
                    }
              }
         }
          return response()->json(['transactions'=>$transactions,'ecocash'=>$ecocash,'onemoney'=>$onemoney,'visa'=>$visa],200);
     }

     public function search(Request $request){
         $request->validate(['start'=>'required','end'=>'required']);

         $transactions = onlinepayments::wherebetween('created_at',[$request->start,$request->end])->wherestatus('PAID')->get();
         $ecocash = 0;
         $onemoney=0;
         $visa =0;
         if(count($transactions)>0){
             foreach ($transactions as $key => $value)
              {
                  if($value->mode=='ecocash')
                    {
                      $ecocash = $ecocash + (int)$value->amount;
                    }elseif($value->mode =='onemoney'){
                        $onemoney = $onemoney + (int)$value->amount;
                    }else{
                        $visa = $visa+(int)$value->amount;
                    }
              }
         }
          return response()->json(['transactions'=>$transactions,'ecocash'=>$ecocash,'onemoney'=>$onemoney,'visa'=>$visa],200);
  
     }

     public function download(Request $request){
        $request->validate(['start'=>'required','end'=>'required']);
        return Excel::download(new onlinepaymentExport($request->start,$request->end),'report.csv');
     }
}
