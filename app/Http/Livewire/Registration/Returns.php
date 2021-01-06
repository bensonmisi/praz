<?php

namespace App\Http\Livewire\Registration;

use Livewire\Component;
use paymentHelper;
use serviceHelper;
use App\online_invoice;
use App\onlinepayments;
use App\receipt;
use App\supplier;
use App\User;
use App\Notifications\paymentSuccess;
use Illuminate\Support\Facades\Auth;

class Returns extends Component
{
    public $inv;

    public function mount($invo){
        $this->inv = $invo;
        $paynow = new paymentHelper();
        $helper = new serviceHelper();
        $company = Auth::user()->company;
        $message="";
        $payment = onlinepayments::whereinvoice_number($invo)->orderBy('id','desc')->first();
        $status = $paynow->checkTransaction($payment->poll_url);
             if($status->paid())
             {
               /// update  payments table
                
                $payment->status ='PAID';
                $payment->save();
                $receiptnumber = $paynow->receipt_number();
                receipt::create(['invoicenumber'=>$payment->invoice_number,'receiptnumber'=>$receiptnumber,'company_id'=>$company->id,'method'=>$payment->mode,'amount'=>$payment->amount,'user_id'=>Auth::user()->id]);
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
              $user = User::whereid(Auth::user()->id)->first();
              $data =['message'=>'Successfully Completed payment. '.$message,'type'=>'Success'];
              $user->notify(new paymentSuccess($data));
              session()->flash('success','Successfully completed payment. '.$message);
               return redirect()->route('home');
             }
             else{
                $payment->status = $status->status();
                $payment->save(); 
                session()->flash('error','Transaction Not Completed Please click on check payment if money has  been deducted in your account. INVOICE NUMBER:'.$this->inv);
                return redirect()->route('payments');
             }
    }
    public function render()
    {
        return view('livewire.registration.returns');
    }
}
