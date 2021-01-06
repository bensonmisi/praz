<?php

namespace App\Http\Livewire\Admin\Rtgs;

use App\currency;
use App\manual_statement;
use App\manual_statement_log;
use App\rtgs;
use App\rtgs_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Edit extends Component
{
    public $rtgs;
    public $currencylist=[];
    public $currency;
    public $amount;
    public $refnumber;
    public $statements=[];
    public $query;

    public function mount($id){
        $this->rtgs = rtgs::whereid($id)->first();
        $this->currencylist = currency::get();
    }

    public function updatedQuery()
    {
        $this->statements = manual_statement::where('refnumber' ,'like','%'.$this->query.'%')->orWhere('name' ,'like','%'.$this->query.'%')->get();
   
    }
    public function update($id){
        $statement = manual_statement::whereid($id)->first();

         if(!is_null($statement))
         {
             $rtgs = rtgs::whererefnumber($statement->refnumber)->first();
              if(is_null($rtgs))
              {
             $currency = currency::wherename($statement->currency)->first();
             $currency_id = 2;
             if(!is_null($currency)){
               $currency_id = $currency->id;
             }
            $this->rtgs->amount = $statement->amount;
            $this->rtgs->currency_id =$currency_id;
            $this->rtgs->refnumber = $statement->refnumber;
            $this->rtgs->transdate =$statement->transaction_date;
            $this->rtgs->save();
            $statement->status = 'CLAIMED';
            $statement->save();
            manual_statement_log::create(['manual_statement_id'=>$statement->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'UPDATED','old_value'=>'','new_value'=>$statement->toJSON()]);
            rtgs_log::create(['rtgs_id'=>$this->rtgs->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'UPDATED','old_value'=>'','new_value'=>$this->rtgs->toJSON()]);
            session()->flash('success','Success Updated RTGS DATA');
            return redirect()->route('can_view_rtgs',$this->rtgs->id);
              }
              else{
                  session()->flash('error','POP already used to  settle invoice number:'.$rtgs->invoice_number);
              }
         }
    }
    public function render()
    {
        return view('livewire.admin.rtgs.edit');
    }
}
