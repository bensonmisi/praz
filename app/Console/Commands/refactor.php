<?php

namespace App\Console\Commands;

use App\online_invoice;
use App\onlinepayments;
use App\receipt;
use App\rtgs;
use App\supplier;
use App\transfers;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use paymentHelper;
use serviceHelper;

class refactor extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'refactor:invoices';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'generates receipts for un receipted invoices';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->removeDuplicates();
        $this->checkreceipts();
    }
   
    function removeDuplicates(){
        $invoice = online_invoice::with('currency')->wherein('status',['PAID','AWAITING'])->get();
    
        $data=[];

         foreach ($invoice as $key => $value) {

             // removing duplicate entries 
             $data = $this->checkarray($value->invoice_number,$value->company_id,$value->category_id,$value->year,$value->currency_id,$value->exchange_id,$value->status,$value->cost,$value->user_id,$data);
         }

           /**
            *  converting the invoice into a collection
            */

         $invoice_collection = collect($data);

         /**
          * grouping the collection by invoicenumber 
          */

          $grouped_invoice_collect = $invoice_collection->groupBy('invoice_number');
              $array = [];
            foreach ($grouped_invoice_collect as $key => $value) {
                 $invoice_total =  online_invoice::whereinvoice_number($key)->sum('cost');
                  $filtered_invoice_total = $value->sum('cost');
                    if($filtered_invoice_total != $invoice_total)
                    {
                         /**
                          * remove invoice data with duplicates and replace filtered data
                          */
                          
                        
                       online_invoice::whereinvoice_number($key)->delete();
                       online_invoice::insert($value->toArray());
                    } 
            }
   }

    function checkreceipts(){
        $paymentHelper = new paymentHelper();
        $servicehelper = new serviceHelper();
        $invoice = online_invoice::with('currency')->wherein('status',['PAID'])->get();  
        $grouped = $invoice->groupBy('invoice_number');
        
         foreach ($grouped as $key => $value) {
               $total_invoiced = $value->sum('cost');
               $total_receipted =  receipt::whereinvoicenumber($key)->sum('amount');
               if($total_receipted != $total_invoiced)
               {
                  /**
                   * check online payments
                   */

                       $online = onlinepayments::where(['invoice_number'=>$key,'status'=>'PAID'])->get();
                        if(count($online)>0)
                        {
                           $total = $online->sum('amount');
                            if($total_invoiced > $total_receipted)
                               {
                                    
                                     foreach ($value as $ky => $vl) {
                                           supplier::where(['company_id'=>$vl->company_id,'category_id'=>$vl->category_id,'expire_year'=>$vl->year])->delete();
                                           $vl->status ="PENDING";
                                           $vl->save();
                                     }
                               }

                               if($total_invoiced <=$total && $total != $total_receipted){

                                 receipt::whereinvoicenumber($key)->delete();
                                  foreach ($online as $keys => $val) {
                                      $receiptnumber = $paymentHelper->receipt_number();
                                      receipt::firstOrCreate(['source_id'=>$val->id],['invoicenumber'=>$key,'source_id'=>$val->id,'receiptnumber'=>$receiptnumber,'company_id'=>$val->company_id,'method'=>$val->mode,'currency'=>$val->invoice->currency->name,'amount'=>$val->amount,'user_id'=>$val->invoice->user_id]);
                                  
                                  }
                                  $check_docs = $servicehelper->helper_checkDocuments_admin($value[0]->company_id);
                                  $current = 'PENDING';
                                  if($check_docs){
                                       $current = 'APPROVED';
                                  }
                                  foreach ($value as $ky => $vl) {
                                      $code = $servicehelper->helper_generate_code($vl->id);
                                      supplier::firstOrCreate(['company_id'=>$vl->company_id,'category_id'=>$vl->category_id,'expire_year'=>$vl->year],['company_id'=>$vl->company_id,'category_id'=>$vl->category_id,'expire_year'=>$vl->year,'status'=>$current,'code'=>$code]);
                         
                                  }
                               }
                              
                          }
                       

                   /**
                    * check rtgs payments
                    */
                       $rtgs = rtgs::whereinvoice_number($key)->first();
                       $transfer = transfers::whereinvoicenumber($key)->get();
                        if(!is_null($rtgs)){
                             
                             if(count($transfer) ==0){
                                  if($total_receipted==0){
                                      $receiptnumber = $paymentHelper->receipt_number();
                                      receipt::Create(['invoicenumber'=>$key,'receiptnumber'=>$receiptnumber,'company_id'=>$rtgs->company_id,'source_id'=>$rtgs->id,'method'=>'rtgs','currency'=>$rtgs->invoice[0]->currency->name,'amount'=>$total_invoiced,'user_id'=>$rtgs->invoice[0]->user_id]);
                                  
                                  }else{
                                       receipt::whereinvoicenumber($key)->update(['amount'=>$total_invoiced]);
                                  }
                             }else{
                                 receipt::whereinvoicenumber($key)->delete();
                                 foreach ($transfer as $k => $v) {
                                   
                                     $receiptnumber = $paymentHelper->receipt_number();
                                      //Log::info($v.':'.$v->transaction);
                                      if(!is_null($v->transaction))
                                      {
                                     receipt::Create(['invoicenumber'=>$key,'receiptnumber'=>$receiptnumber,'company_id'=>$v->invoice->company_id,'method'=>'internal','source_id'=>$v->id,'currency'=>$v->invoice->currency->name,'amount'=>$v->transaction->amount,'user_id'=>$v->invoice->user_id]);
                                      }
                                 } 
                             }

                             $rtgs->status='APPROVED';
                             $rtgs->save();
                            //  Log::info('invoice number :'.$key.'-total invoiced:'.$total_invoiced.'-rtgs status:'.$rtgs->status.'-api status:'.$status.'- total receipted:'.$total_receipted);
                                 Log::info($value[0]);
                            $check_docs = $servicehelper->helper_checkDocuments_admin($value[0]->company_id);
                            $current = 'PENDING';
                            if($check_docs){
                                 $current = 'APPROVED';
                            }
                            foreach ($value as $ky => $vl) {
                                $code = $servicehelper->helper_generate_code($vl->id);
                                supplier::firstOrCreate(['company_id'=>$vl->company_id,'category_id'=>$vl->category_id,'expire_year'=>$vl->year],['company_id'=>$vl->company_id,'category_id'=>$vl->category_id,'expire_year'=>$vl->year,'status'=>$current,'code'=>$code]);
                            
                            }
                       }else{
                            if(count($transfer) >0){
                                $receipt= receipt::whereinvoicenumber($key)->first();
                                 $check_docs = $servicehelper->helper_checkDocuments_admin($value[0]->company_id);
                                 $current = 'PENDING';
                                 if($check_docs){
                                      $current = 'APPROVED';
                                 }
                                 foreach ($value as $ky => $vl) {
                                     $code = $servicehelper->helper_generate_code($vl->id);
                                     supplier::firstOrCreate(['company_id'=>$vl->company_id,'category_id'=>$vl->category_id,'expire_year'=>$vl->year],['company_id'=>$vl->company_id,'category_id'=>$vl->category_id,'expire_year'=>$vl->year,'status'=>$current,'code'=>$code]);
                                 
                                 }
                                  foreach ($transfer as $k => $v) {
                                    
                                      $receiptnumber = $paymentHelper->receipt_number();
                                       //Log::info($v.':'.$v->transaction);
                                       if(!is_null($v->transaction))
                                       {
                                      receipt::Create(['invoicenumber'=>$key,'receiptnumber'=>$receiptnumber,'company_id'=>$v->invoice->company_id,'method'=>'internal','source_id'=>$v->id,'currency'=>$v->invoice->currency->name,'amount'=>$v->transaction->amount,'user_id'=>$v->invoice->user_id]);
                                       }
                                  }
                            }    
                        }

                       

                    /**
                     * check transfers
                     */
               }
         }
    }

   function checkarray($invoicenumber,$company_id,$category_id,$year,$currency_id,$exchange_id,$status,$cost,$user_id,$data){
        if(count($data)>0)
        {
             $j=0;
        for ($i=0; $i < count($data) ; $i++) { 
               if($data[$i]['invoice_number'] == $invoicenumber && $data[$i]['company_id'] == $company_id && $data[$i]['category_id']==$category_id && $data[$i]['year']==$year)
                  {
                      $j++;
                  }
                
         }
         if($j==0)
         {
         $data[] = array('invoice_number'=>$invoicenumber,'company_id'=>$company_id,'category_id'=>$category_id,'currency_id'=>$currency_id,'exchange_id'=>$exchange_id,'status'=>$status,'year'=>$year,'cost'=>$cost,'user_id'=>$user_id);
         }
        }else{
             $data[] = array('invoice_number'=>$invoicenumber,'company_id'=>$company_id,'category_id'=>$category_id,'currency_id'=>$currency_id,'exchange_id'=>$exchange_id,'status'=>$status,'year'=>$year,'cost'=>$cost,'user_id'=>$user_id);
       
        }

        return $data;
   }

}
