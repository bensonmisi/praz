<?php

namespace App\Http\Controllers;

use App\Services\certificatePDF;
use App\supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class certificateController extends Controller
{
     protected $pdf;
     public function __construct(certificatePDF $pdf)
     {
         $this->middleware('auth');
         $this->pdf = $pdf;

     }

     public function download($id){
        $supplier = supplier::where(['id'=>$id,'company_id'=>Auth::user()->company->id])->first();
        return response($this->pdf->generate($id), 200)->withHeaders([
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => "{$this->pdf->action()}; filename='certificate-{$supplier->code}.pdf'",
        ]);
     }
}
