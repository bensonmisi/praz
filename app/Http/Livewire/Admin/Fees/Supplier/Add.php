<?php

namespace App\Http\Livewire\Admin\Fees\Supplier;

use App\currency;
use App\inventory_item;
use App\pricing;
use App\pricing_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
class Add extends Component
{

    public $currencies = [];

    public $locality;
    public $action;
    public $price;
    public $currency;

    public function mount(){
        $this->currencies = currency::get();
    }

    public function add(){
        $this->validate(['currency'=>'required','locality'=>'required','action'=>'required','price'=>'required']);
        
             $pricing=  pricing::create(['inventory_id'=>1,'currency_id'=>$this->currency,'locality'=>$this->locality,'action'=>$this->action,'price'=>$this->price]);
              pricing_log::create(['pricing_id'=>$pricing->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'CREATED','old_value'=>'','new_value'=>$pricing->toJSON()]);
             session()->flash('success','Inventory Item Successfuly Created');
             return redirect()->route('admin.fees.suppliers'); 
      
    }
    public function render()
    {
        return view('livewire.admin.fees.supplier.add');
    }
}
