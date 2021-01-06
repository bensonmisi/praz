<?php

namespace App\Http\Controllers\bidders;

use App\bidbond;
use App\Http\Controllers\Controller;
use App\pnotice;
use App\Services\bidPdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class bidbondController extends Controller
{
    protected $pdf;
    public function __construct(bidPdf $pdf)
    {
        $this->middleware('auth');
        $this->pdf = $pdf;
    }

    public function index(){
        $bonds = bidbond::with('notice.company','receipt')->wherecompany_id(Auth::user()->company->id)->orderBy('id','desc')->get();
        return response()->json(['bonds'=>$bonds],200);
    }

    public function download($id){
        $tender = pnotice::where(['id'=>$id])->first();
        
        return response($this->pdf->generate($id), 200)->withHeaders([
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => "{$this->pdf->action()}; filename='bidbond-{$tender->id}.pdf'",
        ]);
     }

}
