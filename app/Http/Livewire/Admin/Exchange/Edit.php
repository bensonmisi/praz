<?php

namespace App\Http\Livewire\Admin\Exchange;

use App\currency;
use App\exchange;
use Livewire\Component;

class Edit extends Component
{
    public  $currency =[];
    public $base;
    public $other;
    public $value;
    public $exchange;
    public function mount($id){
        $this->currency = currency::get();
        $this->exchange = exchange::whereid($id)->first();
        $this->other = $this->exchange->other_id;
        $this->base = $this->exchange->base_id;
        $this->value = $this->exchange->value;

    }

    public function update(){
        $this->validate(['value'=>'required','base'=>'required','other'=>'required|different:base']);
         $this->exchange->other_id = $this->other;
         $this->exchange->base_id = $this->base;
         $this->exchange->value = $this->value;
         $this->exchange->save();
        session()->flash('success','Exchange Rate successfully Update');
        return redirect()->route('admin.exchange');
    }
    public function render()
    {
        return view('livewire.admin.exchange.edit');
    }
}
