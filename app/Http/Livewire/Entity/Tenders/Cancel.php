<?php

namespace App\Http\Livewire\Entity\Tenders;

use App\pnotice;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use serviceHelper;

class Cancel extends Component
{
    public $notice;
    public $comment;

    public function mount($id){
        $notice = pnotice::where(['id'=>$id,'company_id'=>Auth::user()->company->id])->first();
        if(!is_null($notice)){
             $close_date =  Carbon::parse($notice->close_date);
             if(Carbon::now()->gte($close_date)){
                session()->flash('error','Notice has closed cannot be cancelled');
                return redirect()->route('tenders');
             }else{
                 $this->notice = $notice;
             }

        }else{
            session()->flash('error','Notice not found');
            return redirect()->route('home');
        }
    }

    public function save(){
       $this->validate(['comment'=>'required']);
       $this->notice->status ="CANCELLED";
       $this->notice->save();
       $service = new serviceHelper();
        /// boardcast cancel notification
        
       $service->notice_log($this->notice->id,Auth::user()->id,'CANCELLED',$this->comment);
       session()->flash('success','Notice successfully cancelled');    
       return redirect()->route('tender',$this->notice->id);
    }
    public function render()
    {
        return view('livewire.entity.tenders.cancel');
    }
}
