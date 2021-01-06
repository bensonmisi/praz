<?php

namespace App\Http\Livewire\Admin\Fees\Supplier;

use App\currency;
use App\inventory_item;
use App\pricing;
use App\pricing_log;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Edit extends Component
{

    public $currencies = [];

    public $locality;
    public $action;
    public $price;
    public $pricing;
    public $currency;

    public function mount($id){
        $this->currencies = currency::get();
        $this->pricing = pricing::whereid($id)->first();
        if(!is_null($this->pricing)){
            $this->locality = $this->pricing->locality;
            $this->action = $this->pricing->action;
            $this->price = $this->pricing->price;
            $this->currency = $this->pricing->currency_id;

        }else{
            session()->flash('error','Pricing not found');
            return redirect()->route('admin.fees.suppliers');
        }

    }

    public function update(){
        $this->validate(['currency'=>'required','locality'=>'required','action'=>'required','price'=>'required']);
        $old = $this->pricing;
        pricing_log::create(['pricing_id'=>$this->pricing->id,'user_id'=>Auth::guard('admin')->user()->id,'action'=>'UPDATED','old_value'=>$old->toJSON(),'new_value'=>'']);
    
        $this->pricing->currency_id = $this->currency;
        $this->pricing->locality = $this->locality;
        $this->pricing->action = $this->action;
        $this->pricing->price = $this->price;
        $this->pricing->save();
         
        session()->flash('error','Pricing updated successfully');
        return redirect()->route('admin.fees.suppliers');
    }
    public function render()
    {
        return view('livewire.admin.fees.supplier.edit');
    }
}
