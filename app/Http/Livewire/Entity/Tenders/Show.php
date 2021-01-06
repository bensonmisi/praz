<?php

namespace App\Http\Livewire\Entity\Tenders;

use App\pnotice;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use serviceHelper;

class Show extends Component
{ 
    public $notice;

    public function mount($id){
        $this->notice = pnotice::where(['id'=>$id,'company_id'=>Auth::user()->company->id])->first();
    
        if(is_null($this->notice)){
         
            session()->flash('error','Tender Not Found');
            return redirect()->route('tenders');
        }
       
    }

    public function publish($id){
        $notice = pnotice::whereid($id)->first();
        $notice->status = 'PUBLISHED';
        $notice->save();
        $this->notice = $notice;
        $service = new serviceHelper();
        $service->notice_log($this->notice->id,Auth::user()->id,'PUBLISHED','PUBLISHED NOTICE '.$notice->tendernumber);
     session()->flash('success','Procurement successfully Published');
     return redirect()->route('home');

    }
    public function render()
    {
        return view('livewire.entity.tenders.show');
    }
}
