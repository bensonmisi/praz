<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\online_invoice;
use App\Services\invoicePDF;

class invoiceController extends Controller
{
    protected $pdf;
     public function __construct(invoicePDF $pdf)
     {
        $this->pdf = $pdf;
//$this->middleware('auth');
        
     }

   
     public function download($inv)
     {
        $invoice = online_invoice::whereinvoice_number($inv)->first();
         return response($this->pdf->generate($inv), 200)->withHeaders([
             'Content-Type' => 'application/pdf',
             'Content-Disposition' => "{$this->pdf->action()}; filename='invoice-{$invoice->invoice_number}.pdf'",
         ]);
     }
}
