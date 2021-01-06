<?php

namespace App\Http\Controllers\bidders;

use App\category;
use App\currency;
use App\documents;
use App\exchange;
use App\Http\Controllers\Controller;
use App\invoicenumber;
use App\online_invoice;
use App\pricing;
use App\regyear;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Services\invoicePDF;

class invoicingController extends Controller
{

     protected $pdf;
     public function __construct(invoicePDF $pdf)
     {
       $this->pdf = $pdf;  
       ini_set('memory_limit', '2048M');      
     }

     public function index(){
         $invoices = online_invoice::wherecompany_id(Auth::user()->company->id)->get();
         return response()->json(['invoices'=>$invoices],200);
     }
    public function show(){
      
       /*  $currency = currency::get();
        if(strtoupper(Auth::user()->company->country) !='ZIMBABWE'){
            $currency = currency::whereid(1)->get();   
        }
        $years = regyear::where('year','>=',Carbon::now()->year)->get();
 
                                  
     $documents = documents::where(['locality'=>Auth::user()->company->locality,'accounttype_id'=>Auth::user()->company->accounttype_id])->with('company')->get();
      

       return response()->json(["currencylist"=>$currency,"years"=>$years,"invoice"=>$invoice,'documents'=>$documents]); */
    }
    public function add(Request $request){
      $request->validate(['currency'=>'required','year'=>'required','category'=>'required']);
      $currency = currency::wherename($request->currency)->first();
      $invoice_number = $this->get_invoice();
      $pricingarray = $this->getPrice($currency->id);
      $invoice = online_invoice::where(['company_id'=>Auth::user()->company->id,'category_id'=>$request->category,'year'=>$request->year])->first();
      if(!is_null($invoice)){
        if($invoice->status !='CANCELLED'){
            return response()->json(['message'=>'CATEGORY ALREADY ADDED TO INVOICE NUMBER ( '.$invoice->invoice_number.') ON: '.$invoice->created_at.' WITH STATUS:'.$invoice->status],500);
         }

         if($invoice->currency_id != $currency->id){
            return response()->json(['message'=>'Multiple Currency Not Permitted on invoice'],500);
    
         }
      }
      online_invoice::create(['invoice_number'=>$invoice_number,'category_id'=>$request->category,'company_id'=>Auth::user()->company->id,'currency_id'=>$currency->id,'exchange_id'=>$pricingarray['exchange'],'year'=>$request->year,'status'=>'PENDING','cost'=>$pricingarray['price'],'user_id'=>Auth::user()->id]);
      $invoice = online_invoice::with('currency','category','receipts')
      ->wherecompany_id(Auth::user()->company->id)
      ->wherestatus('PENDING')
       ->get();
       return response()->json(['invoice'=>$invoice],200);
    }
    public function download($inv)
     {
        $invoice = online_invoice::whereinvoice_number($inv)->first();
         return response($this->pdf->generate($inv), 200)->withHeaders([
             'Content-Type' => 'application/pdf',
             'Content-Disposition' => "{$this->pdf->action()}; filename='invoice-{$invoice->invoice_number}.pdf'",
         ]);
     }

     public function destroy($id){
        $company = Auth::user()->company;
        $item = online_invoice::whereid($id)->wherestatus('PENDING')->first();
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
        $invoice = online_invoice::with('currency','category','receipts')
        ->wherecompany_id($company->id)
        ->wherestatus('PENDING')
         ->get();
         return response()->json(['invoice'=>$invoice],200);
     }

 function getPrice($currency)
 {
     $price = pricing::where(['locality'=>Auth::user()->company->locality,'action'=>'NEW'])->orderBy('id','desc')->first();
     $total = 0;
     $exchange =0;
     if(!is_null($price)){
         if($price->currency_id != $currency)
          {
       
            $exchange  = exchange::orderBy('id','desc')->first();
            $total  = $price->price * $exchange->value;
            $exchange = $exchange->id; 
        }
        else{
            $total = $price->price;
        }
     }

     return array("price"=>$total,"exchange"=>$exchange);
 }

 function get_invoice(){

    $invoice = online_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->first();
    $number = invoicenumber::orderBy('id','desc')->first();
    $final ='';
    if(is_null($invoice)){
     // $final = 'inv'.$number->invoice;
     $final = 'inv'.Carbon::now()->year.''.Carbon::now()->month.''.$number->invoice;
      $number->invoice = $number->invoice+1;
      $number->save();
    }else{ 
        $final = $invoice->invoice_number;
    }
    return $final;
}
}
