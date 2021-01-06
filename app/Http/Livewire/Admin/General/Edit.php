<?php

namespace App\Http\Livewire\Admin\General;

use App\currency;
use App\general_exchange;
use Livewire\Component;

class Edit extends Component
{
    public $currency =[];
    public $base;
    public $value;
    public $general;
    public function mount($id){
        $this->currency = currency::get();
        $this->general = general_exchange::whereid($id)->first();
        $this->base = $this->general->currency_id;
        $this->value = $this->general->value;
    }

    public function update(){
        $this->validate(['base'=>'required','value'=>'required']);

        $this->general->currency_id = $this->base;
        $this->general->value = $this->value;
        $this->general->save();
    }
    public function render()
    {
        return view('livewire.admin.general.edit');
    }
}
