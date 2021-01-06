<?php

namespace App\Console\Commands;

use App\online_invoice;
use App\onlinepayments;
use App\receipt;
use App\rtgs;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use paymentHelper;

class generatereceipts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:receipts';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'this command generates receipts from invoices that have been settled';

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
        $paymentHelper = new paymentHelper();
          $invoices =  online_invoice::whereIn('status',['AWAITING','PAID'])->get();
          $grouped = $invoices->groupBy('invoice_number');
           foreach ($grouped as $key => $value) {
                 $total=0;
                 $user_id=0;
                 $currency="ZWL";
                  foreach ($value as $val) {
                     $total = $total + $val->cost;
                     $user_id = $val->user_id;
                     $currency = $val->currency->name;
                  }
               $onlinepayments = onlinepayments::where(['invoice_number'=>$key,'status'=>'PAID'])->get();
               $total_receipted = receipt::whereinvoicenumber($key)->sum('amount');
               if($total_receipted < $total)
               {
               if(count($onlinepayments)>0){
                   foreach ($onlinepayments as  $v) {
                    $receiptnumber = $paymentHelper->receipt_number();
                    
                    receipt::firstOrCreate(['method'=>$v->mode,'source_id'=>$v->id],['invoicenumber'=>$key,'receiptnumber'=>$receiptnumber,'method'=>$v->mode,'source_id'=>$v->id,'invoicenumber'=>$v->invoice_number,'type'=>'SUPPLIER','description'=>'SUPPLIER','company_id'=>$v->company_id,'currency'=>$currency,'amount'=>$v->amount,'user_id'=>$user_id]);
                   }
             
               }
               $rtgs = rtgs::where(['invoice_number'=>$key,'status'=>'APPROVED'])->get();

               foreach ($rtgs as $rtg) {
                $receiptnumber = $paymentHelper->receipt_number();
                    
                receipt::firstOrCreate(['method'=>'rtgs','source_id'=>$rtg->id],['invoicenumber'=>$key,'receiptnumber'=>$receiptnumber,'method'=>'rtgs','source_id'=>$rtg->id,'invoicenumber'=>$rtg->invoice_number,'type'=>'SUPPLIER','description'=>'SUPPLIER','company_id'=>$rtg->company_id,'currency'=>$currency,'amount'=>$rtg->amount,'user_id'=>$user_id]);
        
               }
            }
            }
    }
}
