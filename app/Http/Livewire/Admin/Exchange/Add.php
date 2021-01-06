<?php

namespace App\Http\Livewire\Admin\Exchange;

use App\currency;
use App\exchange;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Add extends Component
{
    public  $currency =[];
    public $base;
    public $other;
    public $value;
    public function mount(){
        $this->currency = currency::get();
    }

    public function add(){
        $this->validate(['value'=>'required','base'=>'required','other'=>'required|different:base']);
        exchange::create(['base_id'=>$this->base,'other_id'=>$this->other,'value'=>$this->value,'user_id'=>Auth::guard('admin')->user()->id]);
        session()->flash('success','Exchange Rate successfully Created');
        return redirect()->route('admin.exchange');
    }
    public function render()
    {
        return view('livewire.admin.exchange.add');
    }
}
