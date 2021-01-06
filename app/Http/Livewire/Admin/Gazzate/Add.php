<?php

namespace App\Http\Livewire\Admin\Gazzate;

use App\gazzate;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Add extends Component
{
    public $name;
    public $from;
    public $to;

    public function add(){
        $this->validate(['name'=>'required','from'=>'required','to'=>'required']);
        gazzate::create(['name'=>$this->name,'from'=>$this->from,'to'=>$this->to,'administrator_id'=>Auth::guard('admin')->user()->id]);
        session()->flash('success','Gazzate successfully created');
        return redirect()->route('admin.gazzate.index');
    }
    public function render()
    {
        return view('livewire.admin.gazzate.add');
    }
}
