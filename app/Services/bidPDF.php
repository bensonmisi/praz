<?php
namespace App\Services;

use App\bidbond;
use App\pnotice;
use App\receipt;
use App\tender_invoice;
use Dompdf\Dompdf;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
class bidPdf extends Dompdf{
    public function __construct(array $config=[])
    {
        parent::__construct($config);
    }

    public function action()
    {
        return request()->has('download') ?'attachment' :'inline';
    }

    public function generate($id){
        
       $bid = bidbond::where(['id'=>$id,'company_id'=>Auth::user()->company->id])->first();
       $invoices = tender_invoice::where(['pnotice_id'=>$bid->pnotice_id,'company_id'=>Auth::user()->company->id,'status'=>'PAID'])->get();
       $tender = pnotice::whereid($bid->pnotice_id)->first();
       
        $this->loadHtml( View::make('bidbond',compact('bid','invoices','tender'))->render());
        $this->render();
        return $this->output();
    }
}