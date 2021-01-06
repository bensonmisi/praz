<?php

namespace App\Http\Controllers;

use App\pnotice;
use App\Services\bidPdf;
use Illuminate\Http\Request;

class bidbondController extends Controller
{
    protected $pdf;
    public function __construct(bidPdf $pdf)
    {
        $this->middleware('auth');
        $this->pdf = $pdf;
    }

    public function download($id){
        $tender = pnotice::where(['id'=>$id])->first();
        
        return response($this->pdf->generate($id), 200)->withHeaders([
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => "{$this->pdf->action()}; filename='bidbond-{$tender->id}.pdf'",
        ]);
     }
}
