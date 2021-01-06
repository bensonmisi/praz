<?php

namespace App\Http\Livewire\Admin\Classification;

use App\pclassification;
use App\pclassification_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Index extends Component
{
    public $classifications=[];
    public function mount(){
        $this->classifications = pclassification::wherestatus('CREATED')->get();
    }

    public function remove($id){
        $class = pclassification::whereid($id)->first();
        $class->status='DELETED';
        $class->save();
        pclassification_log::create(['pclassification_id'=>$class->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'CREATED','old_value'=>'','new_value'=>$class->toJSON()]);
        session()->flash('success','Classification successfully deleted');
        $this->mount();
    }
    public function render()
    {
        return view('livewire.admin.classification.index');
    }
}
