<?php

namespace App\Http\Controllers;

use App\receipt;
use App\Services\ReceiptPdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class receiptController extends Controller
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
