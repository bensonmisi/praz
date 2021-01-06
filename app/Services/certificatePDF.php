<?php
namespace App\Services;

use App\supplier;
use Carbon\Carbon;
use Dompdf\Dompdf;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
class certificatePDF extends Dompdf{
    public function __construct(array $config=[])
    {
        parent::__construct($config);
    }

    public function action()
    {
        return request()->has('download') ?'attachment' :'inline';
    }

    public function generate($id){
        $supplier = supplier::where(['id'=>$id,'company_id'=>Auth::user()->company->id,'status'=>'APPROVED','expire_year'=>Carbon::now()->year])->first();
        $this->loadHtml( View::make('certificate',compact('supplier'))->render());
        $this->render();
        return $this->output();
    }
}