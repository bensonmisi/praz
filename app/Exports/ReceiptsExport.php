<?php

namespace App\Exports;

use App\online_invoice;
use App\receipt;
use Maatwebsite\Excel\Concerns\FromArray;

class ReceiptsExport implements FromArray
{
    protected $startdate;
    protected $enddate;

    public function __construct($startdate,$enddate)
    {
         $this->startdate = $startdate;
         $this->enddate = $enddate;
    }
    public function array(): array
    {
         /* $receipts= receipt::get()
                                   ->map(function($receipt){
                                        return[
                                            'id'=>$receipt->id,
                                            "receiptnumber"=>$receipt->receiptnumber,
                                            "invoicenumber"=>$receipt->invoicenumber,                                            
                                            "type"=>$receipt->type,
                                            "method"=>$receipt->method,
                                            "currency"=>$receipt->currency,
                                            "amount"=>$receipt->amount
                                        ];
                                       
                                    
                                   });
        return $receipts; */

        $invoices = online_invoice::with('receipts')
                                    ->whereBetween('created_at',[$this->startdate,$this->enddate])
                                    ->whereIn('status',['PAID'])
                                    ->get();
       $receipts = [];

       if(count($invoices)>0){
            foreach ($invoices as $key => $value) {
                   if(count($value->receipts)>0){
                         foreach ($value->receipts as $key => $receipt) 
                         {
                             $receipts[] = array(
                                'id'=>$receipt->id,
                                "receiptnumber"=>$receipt->receiptnumber,
                                "invoicenumber"=>$receipt->invoicenumber,                                            
                                "type"=>$receipt->type,
                                "method"=>$receipt->method,
                                "currency"=>$receipt->currency,
                                "amount"=>$receipt->amount);
                         }
                   }
            }
       }
       return $receipts;
    }
}
