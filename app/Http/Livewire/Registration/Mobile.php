<?php

namespace App\Http\Livewire\Registration;

use App\Notifications\paymentSuccess;
use App\online_invoice;
use App\onlinepayments;
use App\receipt;
use App\supplier;
use App\User;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use paymentHelper;
use serviceHelper;

class Mobile extends Component
{
    public $mode;
    public $phone;
    public $amount;
    public $showconfirm = false;
    public $showform= true;
    public $invoicenumber;
    public $total;
    public $pollurl;
    public $trans_id;
    public function mount($mode){
     $this->mode = $mode;
    }

    public function sendPayment(){
      $this->validate(['amount'=>'required|integer','phone'=>'required']);
      $paynow = new paymentHelper();
      $service = new serviceHelper();
      $company = Auth::user()->company;
      $invoice = online_invoice::where(['company_id'=>$company->id,'status'=>'PENDING'])->first();
       if(!is_null($invoice))
       {
       $balance = $service->get_balance();
       $this->invoicenumber = $invoice->invoice_number;
       if($this->amount > $balance){
              session()->flash('error','You cannot enter amount greater than: $'.$balance);
              return;
       }else{      
      $response =  $paynow->mobileTransaction($this->phone,$this->mode,$this->amount,$invoice->invoice_number,'admin@biznotifier.co.zw');
      if(\strtoupper($response->data()['status']) == \strtoupper('ok'))
       {
      
      $this->pollurl = $response->pollUrl();
      $onlinepayments = onlinepayments::create(['invoice_number'=>$invoice->invoice_number,'company_id'=>$company->id,'poll_url'=>$response->pollUrl(),'amount'=>$this->amount,'mode'=>$this->mode,'status'=>'PENDING']);
      $this->trans_id = $onlinepayments->id;
      $this->showform = false;
      $this->showconfirm = true;
       }else{
         session()->flash('error',$response->data()['error']);
         return;
       }
      }
    }else{
      session()->flash('error','No invoice found please try again');
      return redirect()->route('registration_payment');
    }

    }

    public function checkpayment(){
     $paynow = new paymentHelper();
     $helper = new serviceHelper();
     $company = Auth::user()->company;
     $message="";
     $status = $paynow->checkTransaction($this->pollurl);
          if($status->paid())
          {
            /// update  payments table
             $payments = onlinepayments::whereid($this->trans_id)->first();
             $payments->status ='PAID';
             $payments->save();
             $receiptnumber = $paynow->receipt_number();
             if(!receipt::whereinvoicenumber($this->invoicenumber)->exists())
               {
               receipt::create(['invoicenumber'=>$this->invoicenumber,'receiptnumber'=>$receiptnumber,'company_id'=>$company->id,'method'=>$this->mode,'amount'=>$payments->amount,'user_id'=>Auth::user()->id]);
               }
               $balance = $helper->get_balance();
               if($balance<=0){
             $invoices = online_invoice::whereinvoice_number($this->invoicenumber)->get();
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
           $data =['message'=>'Successfully Completed payment. '.$message,'type'=>'Success','url'=>'/payments'];
           $user->notify(new paymentSuccess($data));
           session()->flash('success','Successfully completed payment. '.$message);
            return redirect()->route('home');
          }
          else{
            session()->flash('error','Transaction Not Completed Please click on check payment if money has  been deducted in your account. INVOICE NUMBER:'.$this->invoicenumber);
            return redirect()->route('payments');
          }
       
    }
    public function render()
    {
        return view('livewire.registration.mobile');
    }
}
