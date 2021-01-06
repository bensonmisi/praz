<?php

namespace App\Http\Controllers\administrator\finance;

use App\banktransactions;
use App\Exports\transferExport;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class bankController extends Controller
{
     public function index(){

         $transactions = banktransactions::whereDate('created_at',Carbon::now())->get();
         $totalreceived = 0;
        $totalclaimed = 0;
         if(count($transactions)>0){
              foreach ($transactions as $key => $value) {
                   $totalreceived = $totalreceived+(int)$value->amount;
                   if($value->status =='CLAIMED'){
                       $totalclaimed = $totalclaimed+(int)$value->amount;
                   }

              }
         }
         return response()->json(['transactions'=>$transactions,'totalreceived'=>$totalreceived,'totalclaimed'=>$totalclaimed],200);
     }

     public function search(Request $request){
         $request->validate(['start'=>'required','end'=>'required']);
         $transactions=[];
          if(!is_null($request->accountnumber))
           {
            $transactions = banktransactions::whereaccountnumber($request->accountnumber)->whereBetween('created_at',[$request->start,$request->end])->get();
           }
           else{
            $transactions = banktransactions::whereBetween('created_at',[$request->start,$request->end])->get();
           }
       
        $totalreceived = 0;
        $totalclaimed = 0;
         if(count($transactions)>0){
              foreach ($transactions as $key => $value) {
                   $totalreceived = $totalreceived+(int)$value->amount;
                   if($value->status =='CLAIMED'){
                       $totalclaimed = $totalclaimed+(int)$value->amount;
                   }

              }
         }
         return response()->json(['transactions'=>$transactions,'totalreceived'=>$totalreceived,'totalclaimed'=>$totalclaimed],200);
   
     }

     public function download(Request $request){
          $request->validate(['start'=>'required','end'=>'required']);
          return Excel::download(new transferExport($request->start,$request->end),'report.csv');
       }
}
