<?php

namespace App\Console\Commands;

use App\banktransactions;
use App\Http\Livewire\Notifications;
use App\Notifications\autoregistration;
use App\Notifications\generalnotification;
use App\online_invoice;
use App\receipt;
use App\rtgs;
use App\supplier;
use App\transfers;
use App\User;
use Illuminate\Console\Command;
use Illuminate\Notifications\Notification as NotificationsNotification;
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
  
  if(count($transfers)>0)
  {
    foreach ($transfers as $key => $transfer) {
      Log::info($transfer);
     $invoice = online_invoice::whereinvoice_number($transfer->invoicenumber)->with('company.users')->first();
     if(!is_null($invoice))
     {
      $message="";
  $bank = banktransactions::wheresource_reference($transfer->referencenumber)->first();
   if(!is_null($bank))
   {
      if($bank->status =='PENDING'){
        $online = online_invoice::whereinvoice_number($transfer->invoicenumber)->get();
        $total_invoice = $online->sum('cost') ;
        $total_receipted = receipt::whereinvoicenumber($transfer->invoicenumber)->sum('amount');
        if($total_invoice > $total_receipted){
          $paymentHelper = new paymentHelper();
          $service = new serviceHelper(); 

          $receiptnumber = $paymentHelper->receipt_number();
           $status ="PENDING";
           $doc_status ="PENDING";
          if(($total_receipted+(int)$bank->amount) >= $total_invoice)
          {
             $status = "PAID";
             $check_docs = $service->helper_checkDocuments_admin($invoice->company->id);
             if($check_docs){
              $doc_status = 'APPROVED';
             }

          }
      
          receipt::create(['invoicenumber'=>$transfer->invoicenumber,'receiptnumber'=>$receiptnumber,'source_id'=>$bank->id,'company_id'=>$invoice->company->id,'method'=>'internal','currency'=>$bank->currency,'amount'=>(int)$bank->amount,'user_id'=>$invoice->company->users[0]->id]);
          $bank->status="CLAIMED";
          $bank->customer_number = $invoice->company->regnumber;
          $bank->save();
          $transfer->status="CLAIMED";
          $transfer->save();
          rtgs::whereinvoice_number($transfer->invoicenumber)->update(['status'=>'APPROVED','paymentdate'=>$bank->trans_date,'refnumber'=>$bank->source_reference,'transdate'=>$bank->trans_date,'amount'=>$bank->amount]);
          $balance = $total_invoice-($total_receipted+(int)$bank->amount);
        Log::info($balance);
          if($balance<=0)
          {
            foreach ($online as $inv) {
              if(!supplier::where(['company_id'=>$inv->company->id,'category_id'=>$inv->category_id,'expire_year'=>$inv->year])->exists())
              {
               $code = $service->helper_generate_code($inv->id);
                supplier::create(['company_id'=>$inv->company->id,'category_id'=>$inv->category_id,'expire_year'=>$inv->year,'status'=>$doc_status,'code'=>$code]);
                  /**
                   * update each invoice  entry to paid
                   */
                  
                  $inv->status ='PAID';
                  $inv->save();
              }
            } 
           /**
            * registration successfully completed
            */
            $message ="You registration was automatically completed please login to your portal and download your certificate";
         
          }
          else
          {
            /**
             * payment receipt but balance remaining
             */
            $message = 'Transfer of :'.$bank->amount.' was found and receipted. HOWEVER REGISTRATION COULD NOT BE COMPLETED  BECAUSE THERE IS AN OUTSTANDING INVOICE BALANCE :'.$balance;
           
   
          }
          }

      }else{
        $message = "Your registration could not be processed because the reference number you captured has already been utilized";
   
      }
   }
   else
   {
     $message =" The reference number of ".$transfer->referencenumber.' could be found in our database  please  contact your bank and ask for a correct one. HINT it usual starts with BANK initials, however if  you paid using ZIPIT please ask your bank for transaction STAN CODE. Once in possesion of the new reference number please login to your portal, click on the verify button, enter the new reference number click update , then proceed to click the verify button again. If there refernce number is correct registration will automatically complete';
   }
   Notification::send($invoice->company->users,new autoregistration($message));
  }
       
        }
  }
    }
}
