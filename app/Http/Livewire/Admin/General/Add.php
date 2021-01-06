<?php

namespace App\Http\Livewire\Admin\General;

use App\currency;
use App\general_exchange;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Add extends Component
{
    public $currency =[];
    public $base;
    public $value;

    public function mount(){
        $this->currency = currency::get();
    }

    public function add(){
        $this->validate(['base'=>'required','value'=>'required']);
        general_exchange::create(['currency_id'=>$this->base,'value'=>$this->value,'user_id'=>Auth::guard('admin')->user()->id]);
        session()->flash('success','Succcessfully Created General Exchange');
        return redirect()->route('admin.general');
    }
    public function render()
    {
        return view('livewire.admin.general.add');
    }
}
