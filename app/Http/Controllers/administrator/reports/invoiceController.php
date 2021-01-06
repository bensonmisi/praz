<?php

namespace App\Http\Controllers\administrator\reports;

use App\currency;
use App\Exports\financeReport;
use App\Http\Controllers\Controller;
use App\online_invoice;
use App\receipt;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Excel as ExcelExcel;
use Maatwebsite\Excel\Facades\Excel;

class invoiceController extends Controller
{

  public function index(){
       $invoice = online_invoice::with('currency')->whereDate('created_at',Carbon::now())->whereIn('status',['AWAITING','PAID'])->get();
        $currencylist = currency::get();
       $grouped = $invoice->groupBy('invoice_number');
       $array=[];
       $totalpaidZWL=0;
       $totalpaidUSD=0;
       $totalawaitingZWL=0;
       $totalawaitingUSD=0;
       foreach ($grouped as $key => $value) {
            $currency ="";
            $invoicedate="";
            $totalinvoiced=0;
            $totalreceipted=0;
            $year="";
            $status="";
              foreach ($value as $val) {
                 $currency = $val->currency->name;
                 $invoicedate = $val->created_at;
                 $totalinvoiced = $totalinvoiced + $val->cost;
                 $status = $val->status;
                 $year = $val->year;
               /*   if($val->status=='PAID' && $val->currency->name=='ZWL'){
                   $totalpaidZWL = $totalpaidZWL + $val->cost;
                 }
                 elseif($val->status=='PAID' && $val->currency->name=='USD'){
                   $totalpaidUSD = $totalpaidUSD + $val->cost;
                 } elseif($val->status=='AWAITING' && $val->currency->name=='ZWL'){
                  $totalawaitingZWL =  $totalawaitingZWL + $val->cost;
                } elseif($val->status=='AWAITING' && $val->currency->name=='USD'){
                  $totalawaitingUSD =  $totalawaitingUSD + $val->cost;
                } */
              }
               $receipts  = receipt::whereinvoicenumber($key)->get();
               if(count($receipts)>0){
                    foreach ($receipts as $ky => $vl) {
                        $totalreceipted = $totalreceipted + $vl->amount;
                    }
                
               }
             $array[] = array("invoice_number"=>$key,"invoicedate"=>$invoicedate,"expireyear"=>$year,"currency"=>$currency,"totalinvoiced"=>$totalinvoiced,"status"=>$status,"receipts"=>$receipts,"totalreceipted"=>$totalreceipted);
       }

       return response()->json(['report'=>$array,'currencylist'=>$currencylist],200);

  }
   public function search(Request $request){
       $request->validate(['startdate'=>'required','enddate'=>'required']);
       
       $invoice = online_invoice::with('currency')->whereBetween('created_at',[$request->startdate,$request->enddate])->whereIn('status',['AWAITING','PAID'])->get();
       $grouped = $invoice->groupBy('invoice_number');
       $array=[];
       $totalpaidZWL=0;
       $totalpaidUSD=0;
       $totalawaitingZWL=0;
       $totalawaitingUSD=0;
       foreach ($grouped as $key => $value) {
            $currency ="";
            $invoicedate="";
            $totalinvoiced=0;
            $totalreceipted=0;
            $year="";
            $status="";
              foreach ($value as $val) {
                 $currency = $val->currency->name;
                 $invoicedate = $val->created_at;
                 $totalinvoiced = $totalinvoiced + $val->cost;
                 $status = $val->status;
                 $year = $val->year;

              /*    if($val->status=='PAID' && $val->currency->name=='ZWL'){
                  $totalpaidZWL = $totalpaidZWL + $val->cost;
                }
                elseif($val->status=='PAID' && $val->currency->name=='USD'){
                  $totalpaidUSD = $totalpaidUSD + $val->cost;
                } elseif($val->status=='AWAITING' && $val->currency->name=='ZWL'){
                 $totalawaitingZWL =  $totalawaitingZWL + $val->cost;
               } elseif($val->status=='AWAITING' && $val->currency->name=='USD'){
                 $totalawaitingUSD =  $totalawaitingUSD + $val->cost;
               } */
              }
               $receipts  = receipt::whereinvoicenumber($key)->get();
               if(count($receipts)>0){
                    foreach ($receipts as $ky => $vl) {
                        $totalreceipted = $totalreceipted + $vl->amount;
                    }
                
               }
             $array[] = array("invoice_number"=>$key,"invoicedate"=>$invoicedate,"expireyear"=>$year,"currency"=>$currency,"totalinvoiced"=>$totalinvoiced,"status"=>$status,"receipts"=>$receipts,"totalreceipted"=>$totalreceipted);
       }

       return response()->json(['report'=>$array],200);



   }

   public function download(Request $request){
    $request->validate(['startdate'=>'required','enddate'=>'required']);
     return(new financeReport($request->startdate,$request->enddate))->download('report.xlsx');
   }

   
}
