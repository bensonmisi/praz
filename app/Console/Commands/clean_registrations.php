<?php

namespace App\Console\Commands;

use App\online_invoice;
use App\onlinepayments;
use App\receipt;
use App\rtgs;
use App\supplier;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class clean_registrations extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'clean:registrations';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'this command will clean registrations and reverse all invoices that havent been settled';

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
        $invoice = online_invoice::with('currency')->get();
        
       $grouped = $invoice->groupBy('invoice_number');
       $array=[];
    
       foreach ($grouped as $key => $value) {
            $currency ="";
            $invoicedate="";
            $totalinvoiced=0;
            $totalreceipted=0;
            $year="";
            $status="";
              foreach ($value as $val) {
                 $currency = $val->currency->name;
                 $invoicedate = $val->created_at;
                 $totalinvoiced = $totalinvoiced + $val->cost;
                 $status = $val->status;
                 $year = $val->year;
           
              }
               $receipts  = receipt::whereinvoicenumber($key)->get();
               if(count($receipts)>0){
                    foreach ($receipts as $ky => $vl) {
                        $totalreceipted = $totalreceipted + $vl->amount;
                    }
                
               }

               
        }
    }
}
