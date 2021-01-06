<?php

namespace App\Console\Commands;

use App\banktransactions;
use App\Http\Livewire\Notifications;
use App\Notifications\generalnotification;
use App\online_invoice;
use App\receipt;
use App\rtgs;
use App\supplier;
use App\transfers;
use App\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Log;
use paymentHelper;
use serviceHelper;

class autosynctransfers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:transfers';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'this function auto synchronises transfers';

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
     $transfers = transfers::wherestatus('PENDING')->get();
     $paymentHelper = new paymentHelper();
     $servicehelper = new serviceHelper();
     if(count($transfers)>0)
     {
        foreach ($transfers as $key => $value) {
          $bank =   banktransactions::where(['source_reference'=>$value->referencenumber])->first();
      
          if(!is_null($bank)){
               /**
                * get invoice
                */

                   $invoice = online_invoice::where(['invoice_number'=>$value->invoicenumber,'status'=>'AWAITING'])->get();
                   $total_invoice=0;
                    /**
                     * calculate total invoice
                     */
                    $currency = '';
                    $company_id=0;
                    $user_id=0;
                    $categorylist = [];
                   if(count($invoice)>0)
                   {
                          foreach ($invoice as $ky => $val) {
                            $total_invoice = $total_invoice + $val->cost;  
                            $currency = $val->currency->name;
                            $company_id = $val->company_id;
                            $user_id = $val->user_id;
                            $code = $servicehelper->helper_generate_code($val->id);
                            $check_docs = $servicehelper->helper_checkDocuments_admin($val->company_id);
                            $current = 'PENDING';
                             if($check_docs)
                              {
                              $current = 'APPROVED';
                               }
                             $categorylist[] = array('company_id'=>$val->company_id,'category_id'=>$val->category_id,'expire_year'=>$val->year,'status'=>$current,'code'=>$code); 
                          }
                        
                   }
                   /**
                    * check if currencies match
                    */

                   if($currency == $bank->currency)
                   {
                          /**
                   * check if the invoice has been processed 
                   */
                   
                    if($total_invoice >0)
                   {
                    Log::info('inv:'.$value->invoicenumber.'total_invoice:'.$total_invoice.' bank pamount: '.$bank->amount);
         
                       $amount_due = 0;
                        $status ="PENDING";
                       if($total_invoice > (int)$bank->amount)
                       {
                              $amount_due = (int)$bank->amount;
                       }
                       else
                       {
                           $status ="PAID";
                           $amount_due = $total_invoice;
                       }
                      
                       $receiptnumber = $paymentHelper->receipt_number();
                       receipt::firstOrCreate(['source_id'=>$bank->id],
                                         ['invoicenumber'=>$value->invoicenumber,
                                        'receiptnumber'=>$receiptnumber,
                                        'source_id'=>$bank->id,
                                        'company_id'=>$company_id,
                                        'method'=>'internal',
                                        'currency'=>$currency,
                                        'amount'=>$amount_due,
                                        'user_id'=>$user_id]);
                                        rtgs::whereinvoice_number($value->invoicenumber)->update(['status'=>'APPROVED','paymentdate'=>$bank->trans_date,'refnumber'=>$bank->source_reference,'transdate'=>$bank->trans_date,'amount'=>$bank->amount]);
                  if($status =="PAID")
                  {
                     if(count($categorylist)>0){
                         for ($i=0; $i < count($categorylist) ; $i++) { 
                            supplier::firstOrCreate(
                                                ['company_id'=>$categorylist[$i]['company_id'],
                                              'category_id'=>$categorylist[$i]['category_id'],
                                              'expire_year'=>$categorylist[$i]['expire_year']],
                                              ['company_id'=>$categorylist[$i]['company_id'],
                                              'category_id'=>$categorylist[$i]['category_id'],
                                              'expire_year'=>$categorylist[$i]['expire_year'],
                                              'status'=>$categorylist[$i]['status'],
                                              'code'=>$categorylist[$i]['code']]);                       
           
                         }
                     }

                     online_invoice::whereinvoice_number($value->invoicenumber)->update(['status'=>'PAID']);
                  }
                   
                  $bank->status ='CLAIMED';
                  $bank->customer_number=$invoice[0]->company->regnumber; 
                  $bank->save();
                  $value->status='CLAIMED';
                  $value->save();

                  Log::info($value->invoicenumber.'   CLAIMED ');
                  $status ="PROCESSED";
                  $message ="YOUR PRAZ registration has been proceed check your portal ";
                  $invoice = online_invoice::whereinvoice_number($value->invoicenumber)->first();
                  $users = User::wherecompany_id($invoice->company_id)->get();
                  Notification::send($users, new generalnotification($status,$message));
                      
                   }
                   else
                   {
                     $value->status='CLAIMED';
                     $value->save();
                   }
                }
                else
                {
                  $bank->status ='PENDING';
                  $bank->save();

                  $value->status='CANCELLED';
                  $value->save();
                  $status ="CANCELLED";
                  $message =" Currency on invoice: ".$currency." Currency Transferred ".$bank->currency;
                  online_invoice::whereinvoice_number($value->invoicenumber)->update(['status'=>'CANCELLED']);
                  $invoice = online_invoice::whereinvoice_number($value->invoicenumber)->first();
                  $users = User::wherecompany_id($invoice->company_id)->get();
                  Notification::send($users, new generalnotification($status,$message));
                  
                }


          }
        }
    }
    }
}
