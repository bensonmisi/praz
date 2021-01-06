<?php

namespace App\Http\Livewire\Admin\Pclass;

use App\pclass;
use App\pclass_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Index extends Component
{
    public $pclass=[];

     public function mount(){
         $this->pclass = pclass::wherestatus('CREATED')->get();
     }

     public function remove($id){
         $class = pclass::whereid($id)->first();
         pclass_log::create(['pclass_id'=>$class->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'DELETED','old_value'=>'','new_value'=>$class->toJSON()]);
        $class->status='DELETED';
        $class->save();
        session()->flash('success','Successfully Deleted Procurement Class');
        $this->mount();
     }
    public function render()
    { 
        return view('livewire.admin.pclass.index');
    }
}
