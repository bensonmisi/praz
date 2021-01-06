<?php

namespace App\Http\Livewire\Entity;

use App\pnotice;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Show extends Component
{
    public $tender;
    public function mount($id)
    {
     $tender = pnotice::where(['id'=>$id,'company_id'=>Auth::user()->company->id])->first();
    
      if(is_null($tender)){
       
          session()->flash('error','Tender Not Found');
          return redirect()->route('tenders');
          dd($tender);
      }
      else{
        $this->tender=$tender;
      }
    }
    public function render()
    {
        return view('livewire.entity.show');
    }
}
