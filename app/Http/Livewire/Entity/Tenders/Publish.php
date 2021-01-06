<?php

namespace App\Http\Livewire\Entity\Tenders;

use App\pnotice;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use serviceHelper;

class Publish extends Component
{
    public $notice;
    public function mount($id){
        $notice = pnotice::where(['id'=>$id,'company_id'=>Auth::user()->company->id])->first();
        if(!is_null($notice)){
             $close_date =  Carbon::parse($notice->close_date);
             if(Carbon::now()->gte($close_date)){
                session()->flash('error','Notice closing date has passed cannot be published');
                return redirect()->route('tenders');
             }else{
                 $this->notice = $notice;
             }

        }else{
            session()->flash('error','Notice not found');
            return redirect()->route('home');
        }
    }
    public function render()
    {
        return view('livewire.entity.tenders.publish');
    }
  
 
    public function publish(){
       
        $this->notice->status = 'PUBLISHED';
        $this->notice->save();
        $service = new serviceHelper();
        $service->notice_log($this->notice->id,Auth::user()->id,'PUBLISHED','PUBLISHED NOTICE '.$this->notice->tendernumber);
        $service->broadCast_Notice($this->notice->id);
        session()->flash('success','Procurement successfully Published');
       return redirect()->route('tender',$this->notice->id);

    }
}
