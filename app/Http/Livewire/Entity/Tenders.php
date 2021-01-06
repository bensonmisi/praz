<?php

namespace App\Http\Livewire\Entity;

use App\pnotice;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Tenders extends Component
{
    public $notices=[];
    public function mount(){
       $this->notices = pnotice::wherecompany_id(Auth::user()->company->id)->with('classification','currency')->orderBy('id','desc')->get();
    }

    public function publish($id){
        $permissions = Auth::user()->permissions;
        $permitted = 0;
        if(count($permissions)>0)
        {
          foreach ($permissions as $key => $value) {
              
             if($value->permission==='can_approve'){
                $permitted++;
             }
           }

           if($permitted > 0){
              $notice = pnotice::whereid($id)->first();
              $notice->status = 'APPROVED';
              $notice->save();
              $this->notices = pnotice::wherecompany_id(Auth::user()->company->id)->with('classification','currency')->orderBy('id','desc')->get();
 
            }
       }else{
           session()->flash('error','You do not have permission to publish tenders');
           return ;
       }

       
    }
    public function render()
    {
        return view('livewire.entity.tenders');
    }
}
