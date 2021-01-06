<?php

namespace App\Http\Controllers\bidders;

use App\Http\Controllers\Controller;
use App\receipt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Services\ReceiptPdf;

class receiptsController extends Controller
{
    protected $pdf;

    public function __construct(ReceiptPdf $pdf)
    {
        $this->pdf = $pdf;
    }

     public function index(){
         $receipts = receipt::wherecompany_id(Auth::user()->company->id)->get();
         return response()->json(['receipts'=>$receipts],200);
     }
     public function download($rpt){
        $receipt = receipt::wherereceiptnumber($rpt)->first();
        return response($this->pdf->generate($rpt), 200)->withHeaders([
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => "{$this->pdf->action()}; filename='receipt-{$receipt->receiptnumber}.pdf'",
        ]);
    }
}
