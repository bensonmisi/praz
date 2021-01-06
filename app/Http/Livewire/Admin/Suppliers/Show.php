<?php

namespace App\Http\Livewire\Admin\Suppliers;

use App\company;
use App\company_documents;
use App\supplier;
use App\supplier_comments;
use App\supplier_jobs;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use serviceHelper;

class Show extends Component
{
    public $company;
    public $status;
    public $comment;

    public function mount($id){
        $this->company = company::whereid($id)->first();
    }

    public function process(){
        $this->validate(['status'=>'required']);
        $service = new serviceHelper();
        if($this->status =='DENIED')
         {
             supplier_comments::create(['administrator_id'=>Auth::guard('admin')->user()->id,'company_id'=>$this->company->id,'comment'=>$this->comment]);
             session()->flash('success','Comment successfully Submittd');
             $this->mount($this->company->id);

         }
         else{
              company_documents::wherecompany_id($this->company->id)->update(['status'=>'APPROVED']);
              $suppliers = supplier::where(['company_id'=>$this->company->id,'status'=>'PENDING'])->get();

              foreach ($suppliers as $key => $value) {
                $code = $service->helper_generate_code($this->company->id);
                 $value->status ='APPROVED';
                 $value->code = $code;
                 $value->save();
              }
              supplier_jobs::where(['company_id'=>$this->company->id,'user_id'=>Auth::guard('admin')->user()->id])->update(['status'=>'APPROVED']);
              session()->flash('success','Successfully Approved Registration');
              $this->mount($this->company->id);
         }
    }
    public function render()
    {
        return view('livewire.admin.suppliers.show');
    }
}
