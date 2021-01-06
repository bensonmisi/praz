<?php

namespace App\Http\Livewire\Admin\Threshold;

use App\pthreshold;
use App\pthreshold_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Index extends Component
{
    public $thresholds =[];

    public function mount(){
        $this->thresholds = pthreshold::wherestatus('CREATED')->get(); 
    }
    public function remove($id){
        $class =pthreshold::whereid($id)->first();
        $class->status='DELETED';
        $class->save();
     pthreshold_log::create(['pthreshold_id'=>$class->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'DELETED','old_value'=>'','new_value'=>$class->toJSON()]);
        session()->flash('success','Threshold successfully deleted');
        $this->mount();
    }
    public function render()
    {
        return view('livewire.admin.threshold.index');
    }
}
