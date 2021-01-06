<?php

namespace App\Http\Livewire\Registration;

use Illuminate\Support\Facades\Auth;
use App\online_invoice;
use App\rtgs;
use App\rtgs_comments;
use Livewire\Component;
use Livewire\WithFileUploads;
use serviceHelper;

class Bank extends Component
{
     use WithFileUploads;
    public $total;
    public $invoicenumber;
    public $file;
    public $bank;
    public $tdate;

    public function mount(){
        $company = Auth::user()->company;
        $invoice = online_invoice::where(['company_id'=>$company->id,'status'=>'PENDING'])->first();
        $total = 0;
        $service = new serviceHelper();
        if(!is_null($invoice)){
          $this->invoicenumber = $invoice->invoice_number;
          $total = $service->get_balance();
         }else{
           session()->flash('error','No Pending Invoice found');
           return redirect()->route('home');
         }
         $this->total = $total;
    }

    public function save(){
        $this->validate([
            'file' => 'file|mimes:pdf',
            'bank'=>'required',
            'tdate'=>'required|date'
        ]);
        
          $company = Auth::user()->company;
          $filename = $this->invoicenumber.'_'.rand(10,100).'.'.$this->file->extension();
          $file = $this->file->storePubliclyAs('pop/'.$company->id, $filename,'my_files');
          if(!rtgs::whereinvoice_number($this->invoicenumber)->exists()){

              $comment ="You registration request has been successfully submitted for approval";

               $rtgs = rtgs::create(['company_id'=>$company->id,'invoice_number'=>$this->invoicenumber,'filename'=>$file,'amount'=>'','name'=>$this->bank,'paymentdate'=>$this->tdate]);
               online_invoice::whereinvoice_number($this->invoicenumber)->update(['status'=>'AWAITING']);
               rtgs_comments::create(['rtgs_id'=>$rtgs->id,'user_id'=>Auth::user()->id,'comment'=>$comment]);
               session()->flash('success','POP successfully uploaded. Your registration certificate will  automatically be generated once our finance department has confirmed your funds');
               return redirect()->route('home'); 
            }
          else{
            session()->flash('error','POP already upload');
            return redirect()->route('home'); 
          }
    }
    public function render()
    {
        return view('livewire.registration.bank');
    }
}
