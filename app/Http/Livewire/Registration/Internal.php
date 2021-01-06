<?php

namespace App\Http\Livewire\Registration;

use App\banktransactions;
use App\internal_payments;
use App\Notifications\paymentSuccess;
use App\online_invoice;
use App\receipt;
use App\supplier;
use App\User;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use paymentHelper;
use serviceHelper;

class Internal extends Component
{
    public $balance =0;
    public $due =0;
    public $refnumber;
    public $receiptnumber;

    public function mount(){
        $service = new serviceHelper();
        $paynow = new  paymentHelper();
        $current ='ZWL';
       
        $accountnumber='10721064850020';
          if(Auth::user()->company->locality ==='foreign'){
            $current ='USD';
            $accountnumber='10721064850040';
          }
        $this->balance= $service->myBalance($current,$accountnumber); 
        $this->due = $service->get_balance();
        $this->receiptnumber = $paynow->receipt_number();
    }

    public function refresh(){
        $service = new serviceHelper();
        $current ='ZWL';
       
        $accountnumber='10721064850020';
        if(Auth::user()->company->locality ==='foreign'){
          $current ='USD';
          $accountnumber='10721064850040';
        }
        $service->myBalance($current,$accountnumber);  
    }

    public function search(){
        $this->validate(['refnumber'=>'required']);
        $service = new serviceHelper();
        $bank = banktransactions::where(['source_reference'=>$this->refnumber])->first();
      
        if(!is_null($bank)){
            $bank->customer_number = Auth::user()->company->regnumber;
            $bank->save();
            $current =$bank->currency;
       
            $accountnumber='10721064850020';
          if(Auth::user()->company->locality ==='foreign'){
            $current =$bank->currency;
            $accountnumber='10721064850040';
          }
            $this->mount();
            session()->flash('success','Successfully updated your internal balance please proceed with  your registration');
            return ;
        }else{
            session()->flash('error','reference number not found');
            return ; 
        }
    }

    public function register(){
        $service = new serviceHelper();
        $current ='ZWL';
       
        $accountnumber='10721064850020';
      if(Auth::user()->company->locality ==='foreign'){
        $current ='USD';
        $accountnumber='10721064850040';
      }
        $this->balance= (int)$service->myBalance($current,$accountnumber); 
        $this->due = (int)$service->get_balance();
        $message="";
        $amount =0;
        if($this->balance <= $this->due){
            $amount = $this->balance;
        }else{
           $amount = $this->due;
        }
        
        $company = Auth::user()->company;
        $invoice = online_invoice::where(['company_id'=>$company->id,'status'=>'PENDING'])->first();
         if(!internal_payments::wherereceiptnumber($this->receiptnumber)->exists())
         {
        internal_payments::create(['receiptnumber'=>$this->receiptnumber,'invoice_number'=>$invoice->invoice_number,'company_id'=>$company->id,'amount'=>$amount]);
        receipt::create(['invoicenumber'=>$invoice->invoice_number,'receiptnumber'=>$this->receiptnumber,'company_id'=>$company->id,'method'=>'internal','amount'=>$amount,'currency'=>$current,'user_id'=>Auth::user()->id]);
        $due = $service->get_balance(); 
        if($due==0){
            $invoices = online_invoice::whereinvoice_number($invoice->invoice_number)->get();
            $check_docs = $service->helper_checkDocuments();
            $current = 'PENDING';
            $message = 'Your registration is now PENDING document approval this may take 24-48 hours during working days. Our system will send a notification once document status changes';
            $code ='';
              if($check_docs){
               $current = 'APPROVED';
               $message ='Your registration has been approved please check under registered categories  and click the download button';
               $code = $service->helper_generate_code($company->id);
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
             $user = User::whereid(Auth::user()->id)->first();
             $data =['message'=>'Successfully Completed payment. '.$message,'type'=>'Success','url'=>'/payments'];
             $user->notify(new paymentSuccess($data));
             session()->flash('success','Successfully completed payment. '.$message);
              return redirect()->route('home');
        }else{
            $user = User::whereid(Auth::user()->id)->first();
            $data =['message'=>'Successfully Completed payment. '.$message,'type'=>'Success','url'=>'/registration/payment'];
            $user->notify(new paymentSuccess($data));
            session()->flash('success','Successfully completed payment. '.$message);
             return redirect()->route('registration_payment');
        }
      }else{
         session()->flash('error','Receipt already captured');
         return redirect()->route('registration_payment');
    }
    }

    public function render()
    {
        return view('livewire.registration.internal');
    }
}
