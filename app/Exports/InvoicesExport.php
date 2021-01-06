<?php

namespace App\Exports;

use App\online_invoice;
use Maatwebsite\Excel\Concerns\FromCollection;

class InvoicesExport implements FromCollection
{
    
    protected $startdate;
    protected $enddate;

    public function __construct($startdate,$enddate)
    {
         $this->startdate = $startdate;
         $this->enddate = $enddate;
    }
    public function collection()
    {
         $invoices = online_invoice::with('category','currency','company')
                                    ->whereBetween('created_at',[$this->startdate,$this->enddate])
                                    ->whereIn('status',['PAID'])
                                    ->get()
                                   ->map(function($invoice){
                                       return[
                                           'id'=>$invoice->id,
                                           "company"=>!is_null($invoice->company) ? $invoice->company->name: "NULL",
                                           "invoicenumber"=>$invoice->invoice_number,
                                           "category"=>!is_null($invoice->category) ? $invoice->category->code : "NULL",
                                           "currency"=>$invoice->currency->name,
                                           "status"=>$invoice->status,
                                           "amount"=>$invoice->cost
                                       ];
                                   });
        return $invoices;
    }
}
