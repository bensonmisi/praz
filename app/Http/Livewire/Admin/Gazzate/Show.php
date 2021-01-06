<?php

namespace App\Http\Livewire\Admin\Gazzate;

use App\gazzate;
use App\supplier;
use Carbon\Carbon;
use Livewire\Component;

class Show extends Component
{
    public $suppliers=[];
    public $gazzate;

    public function mount($id){
        $this->gazzate = gazzate::whereid($id)->first();

        if(!is_null($this->gazzate))
        {
            $data =  supplier::with('company')
                              ->wherestatus('APPROVED')
                             ->whereexpire_year(Carbon::now()->year)
                             ->whereBetween('created_at',[$this->gazzate->from,$this->gazzate->to])
                             ->get();
           $grouped =  $data->groupBy('category.code');
          $this->suppliers = $grouped->toArray();

        }
    }
    public function render()
    {
        return view('livewire.admin.gazzate.show');
    }
}
