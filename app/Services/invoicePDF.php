<?php
namespace App\Services;

use App\online_invoice;
use Dompdf\Dompdf;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
class invoicePDF extends Dompdf{
    public function __construct(array $config=[])
    {
        parent::__construct($config);
    }

    public function action()
    {
        return request()->has('download') ?'attachment' :'inline';
    }

    public function generate($inv){
        $invoice = online_invoice::where(['invoice_number'=>$inv,'company_id'=>Auth::user()->company->id])->get();
        $this->loadHtml( View::make('invoice',compact('invoice','inv'))->render());
        $this->render();
        return $this->output();
    }
}