<?php

namespace App\Http\Livewire;

use App\online_invoice;
use App\onlinepayments;
use App\Notifications\paymentSuccess;
use App\receipt;
use App\supplier;
use App\tender_invoice;
use App\User;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use paymentHelper;
use serviceHelper;

class Payments extends Component
{
   public $payments =[];
    public function mount(){
        $company = Auth::user()->company;
        $this->payments = onlinepayments::wherecompany_id($company->id)->orderBy('id','desc')->get();

    }

    public function checkPayment($id){
        $paynow = new paymentHelper();
        $helper = new serviceHelper();
        $company = Auth::user()->company;
        $payment = onlinepayments::whereid($id)->first();
        $status = $paynow->checkTransaction($payment->poll_url);
        $message ='';
             if($status->paid())
             {
               /// update  payments table
                
                $payment->status ='PAID';
                $payment->save();
                $receiptnumber = $paynow->receipt_number();
                if(!receipt::whereinvoicenumber($payment->invoice_number)->exists())
                   {
                   receipt::create(['invoicenumber'=>$payment->invoice_number,'receiptnumber'=>$receiptnumber,'type'=>$payment->type,'company_id'=>$company->id,'method'=>$payment->mode,'amount'=>$payment->amount,'user_id'=>Auth::user()->id]);
                   }
              if($payment->type ==='SUPPLIER')
                {
                  $balance = $helper->get_balance();
                  if($balance==0){
                $invoices = online_invoice::whereinvoice_number($payment->invoice_number)->get();
                $check_docs = $helper->helper_checkDocuments();
                $current = 'PENDING';
                $message = 'Your registration is now PENDING document approval this may take 24-48 hours during working days. Our system will send a notification once document status changes';
                $code ='';
                  if($check_docs){
                   $current = 'APPROVED';
                   $message ='Your registration has been approved please check under registered categories  and click the download button';
                   $code = $helper->helper_generate_code($company->id);
                  }
   
                foreach ($invoices as $inv) {
                  if(!supplier::where(['company_id'=>$company->id,'category_id'=>$inv->category_id,'expire_year'=>$inv->year])->exists())
                  {
                     supplier::create(['company_id'=>$company->id,'category_id'=>$inv->category_id,'expire_year'=>$inv->year,'status'=>$current,'code'=>$code]);
                       $invoice =  online_invoice::whereid($inv->id)->first();
                       $invoice->status ='PAID';
                       $invoice->save();
                  }
                       
              }
               }else{
                $user = User::whereid(Auth::user()->id)->first();
                $data =['message'=>'Successfully Completed payment. '.$message,'type'=>'Success','url'=>'/registration/payment'];
                $user->notify(new paymentSuccess($data));
                session()->flash('success','Successfully completed payment. '.$message);
                 return redirect()->route('registration_payment'); 
               }
              }
              else{
                
                $invoice = tender_invoice::where(['invoice_number'=>$payment->invoice_number])->first(); 
                $invoice->status = "PAID";
                $invoice->save();
                $helper->saveBid($invoice->invoice_number,$receiptnumber,$invoice->pnotice_id);
                session()->flash('success','successfully completed payment  please click on the Payment tab to access your receipt');
                return redirect()->route('tendershow',$invoice->pnotice_id);
             
              }
              $user = User::whereid(Auth::user()->id)->first();
              $data =['status'=>'Order Alert','message'=>'Successfully completed payment','type'=>'Success','url'=>'/payments'];
        
              $user->notify(new paymentSuccess($data));
              session()->flash('success','Successfully completed payment. '.$message);
               return redirect()->route('home');
             }
             else{
              session()->flash('error','Transaction found with status '.$status->status());
                $payment->status = $status->status();
                $payment->save(); 
             }

    }
    public function render()
    {
        return view('livewire.payments');
    }
}
