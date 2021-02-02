<?php 
namespace App\Repositories;

use App\Helpers\generalHelpers;
use App\Http\Requests\addInvoiceRequest;
use App\Interfaces\bidder\invoicingInterface;
use App\online_invoice;
use App\regyear;
use Carbon\Carbon;
use App\Traits\ResponseAPI;
use App\Services\invoicePDF;
class invoicingRepository implements invoicingInterface{
 use ResponseAPI;
    
    private $helper;
    protected $pdf;
    public function __construct(generalHelpers $helper,invoicePDF $pdf)
    {
         $this->helper = $helper;
         $this->pdf = $pdf;  
         ini_set('memory_limit', '2048M'); 
    }

    public function getInvoice($company)
    {
         $regyears = regyear::where('year','>=',Carbon::now()->year)->get()->map(function($regyear){return['year'=>$regyear->year];});
         $invoices = online_invoice::where(['company_id'=>$company,'status'=>'PENDING'])
                                   ->whereIn('year',$regyears)
                                   ->get()
                                   ->map
                                   ->formate();
         return $this->success('success',$invoices);
    }

    public function addItem(addInvoiceRequest $request, $company)
    {
         $invoice_number = $this->helper->get_invoice_number($company,$request->year);
         $user_id = $this->helper->getUserById();
         $pricingarray = $this->helper->get_price($request->currency,$company);

         /**
          * check if there is a existing pending invoice
          */

          $invoices = online_invoice::where(['company_id'=>$company,'year'=>$request->year])->get();
          if(count($invoices)>0){
              foreach ($invoices as $key => $invoice) {
                if($invoice->status !='CANCELLED' && $invoice->category_id == $request->category){
                    return $this->error('CATEGORY ALREADY ADDED TO INVOICE NUMBER ( '.$invoice->invoice_number.') ON: '.$invoice->created_at.' WITH STATUS:'.$invoice->status,500);
               }
       
                if($invoice->currency_id != $request->currency){
                   return $this->error('Multiple Currency Not Permitted on invoice',500);        
                }
              }
           
          }
          online_invoice::create(['invoice_number'=>$invoice_number,
                                  'category_id'=>$request->category,
                                  'company_id'=>$company,
                                  'currency_id'=>$request->currency,
                                  'exchange_id'=>$pricingarray['exchange'],
                                  'year'=>$request->year,
                                  'status'=>'PENDING',
                                  'cost'=>$pricingarray['price'],
                                  'user_id'=>$user_id
                                  ]);
         return $this->getInvoice($company);
    
    }

    public function removeItem($id,$company)
    {
        $item = online_invoice::where(['id'=>$id,'company_id'=>$company])->where('status','!=','PAID')->first();
        if(!is_null($item)){
            if($item->status==='PENDING'){
                 if(count($item->onlinepayments)==0 && is_null($item->rtgs) && count($item->internal_payments)==0)
                 {
                     $item->delete();
                 }
                 else{
                        $item->status='CANCELLED';
                        $item->save();   
                 }
            }
        }
        
        return $this->getInvoice($company);
    }

 

    public function downloadInvoice($inv){
     
           $invoice = online_invoice::whereinvoice_number($inv)->first();
            return response($this->pdf->generate($inv), 200)->withHeaders([
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => "{$this->pdf->action()}; filename='invoice-{$invoice->invoice_number}.pdf'",
            ]);
        
    }
}