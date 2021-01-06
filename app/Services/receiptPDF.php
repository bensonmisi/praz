<?php
namespace App\Services;

use App\receipt;
use Dompdf\Dompdf;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
class ReceiptPdf extends Dompdf{
    public function __construct(array $config=[])
    {
        parent::__construct($config);
    }

    public function action()
    {
        return request()->has('download') ?'attachment' :'inline';
    }

    public function generate($rpt){
        
        $receipt = receipt::where(['receiptnumber'=>$rpt,'company_id'=>Auth::user()->company->id])->first();
        $this->loadHtml( View::make('receipt',compact('receipt','rpt'))->render());
        $this->render();
        return $this->output();
    }
}