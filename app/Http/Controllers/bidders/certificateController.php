<?php

namespace App\Http\Controllers\bidders;

use App\Http\Controllers\Controller;
use App\Services\certificatePDF;
use App\supplier;
use Carbon\Carbon;
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
        if($supplier)
        {
            if($supplier->expire_year == Carbon::now()->year || $supplier->status == 'APPRoVED')
            {
                $supplier->printed = $supplier->printed+1;
                $supplier->save();
                return response($this->pdf->generate($id), 200)->withHeaders([
                    'Content-Type' => 'application/pdf',
                    'Content-Disposition' => "{$this->pdf->action()}; filename='certificate-{$supplier->code}.pdf'",
                ]);
            }else{
                return response()->json(['message'=>'registration locked'],500); 
            }
        }else{
            return response()->json(['message'=>'registration not found'],500);
        }
     }

}
