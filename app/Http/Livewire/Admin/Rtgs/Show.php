<?php

namespace App\Http\Livewire\Admin\Rtgs;

use App\Notifications\approvedNoticiation;
use App\online_invoice;
use App\online_invoice_log;
use App\rtgs;
use App\supplier;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;
use Livewire\Component;
use serviceHelper;

class Show extends Component
{
    public $rtgs;

    public function mount($id){
         $this->rtgs = rtgs::whereid($id)->first();
    }

    public function getTotalInvoice(){
        $total = 0;
       foreach($this->rtgs->invoice  as $invoice){
           $total = $total + $invoice->cost;
       }
        return $total;
    }

     public function process()
     {
         $service = new serviceHelper();
          if($this->rtgs->amount >= $this->getTotalInvoice()){
            $checkDoc = $service->helper_checkDocuments_admin($this->rtgs->company_id);
            $status = "PENDING";
            $message ="";
            $code ="";
            if($checkDoc){
                $status = 'APPROVED';
               
            } 
            
            foreach($this->rtgs->invoice  as $invoice){            
               if($status=='APPROVED'){
                $code = $service->helper_generate_code($this->rtgs->company_id);
                $message .= "code: ".$invoice->category->code." name: ".$invoice->category->name;
               }
               if(!supplier::where(['company_id'=>$this->rtgs->company_id,'category_id'=>$invoice->category_id,'expire_year'=>$invoice->year])->exists()){
                supplier::create(['company_id'=>$this->rtgs->company_id,'category_id'=>$invoice->category_id,'expire_year'=>$invoice->year,'status'=>$status,'code'=>$code]);
                online_invoice_log::create(['invoice_number'=>$this->rtgs->invoice_number,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'APPROVED','old_value'=>'','new_value'=>$invoice->toJSON()]);
        
               }
            }  
            
            $this->rtgs->status = 'APPROVED';
            $this->rtgs->save();
            online_invoice::whereinvoice_number($this->rtgs->invoice_number)->update(['status'=>'PAID']);
            if($status == 'APPROVED'){
                Notification::send($this->rtgs->company->users,new approvedNoticiation($message));
            }
            session()->flash('success','Successfully Completed Registration');
            return redirect()->route('can_view_rtgs',$this->rtgs->id);
          }
     }
    public function render()
    {
        return view('livewire.admin.rtgs.show');
    }
}
