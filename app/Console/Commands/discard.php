<?php

namespace App\Console\Commands;

use App\online_invoice;
use App\receipt;
use App\rtgs;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class discard extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'discard:invoices';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        $online_invoices = online_invoice::wherestatus('AWAITING')->get();

        /**
         *  check if the   there is a similar registration  done by that  company
         */

           foreach ($online_invoices as $key => $value) {
                $invoices  =  online_invoice::where(['company_id'=>$value->company_id,'category_id'=>$value->category_id,'year'=>$value->year])->get();
                if(count($invoices)>1){
                     foreach ($invoices as $ky => $val) {
                          if($val->id != $value->id){
                             if($val->status =='PAID' || $val->status=='AWAITING'){
                               $value->status ="CANCELLED";
                               $value->save();
                               rtgs::whereinvoice_number($value->invoice_number)->delete();
                              $receipt= receipt::whereinvoicenumber($value->invoice_number)->first();
                               Log::info($value->invoice_number."discarded    receipt found:".$receipt);
                             }
                          }
                     }
                }
           }
    }
}
