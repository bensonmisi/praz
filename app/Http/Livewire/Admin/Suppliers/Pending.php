 <?php

namespace App\Http\Livewire\Admin\Suppliers;

use App\supplier;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class Pending extends Component
{
    public $pending=[];

    public function mount(){
    
     $data = DB::table('suppliers') 
                          ->join('companies','companies.id','=','suppliers.company_id')
                          ->select('suppliers.*','companies.name')
                          ->groupBy('suppliers.company_id')
                          ->where('expire_year','=',Carbon::now()->year)
                           ->where('status','=','PENDING')
                           ->orderBy('id','desc')
                           ->get();

     $this->pending = $data->toArray();
        
            foreach ($variable as $key => $value) {
                # code...
            }             
     
     }
    public function render()
    {
        return view('livewire.admin.suppliers.pending');
    }
}
