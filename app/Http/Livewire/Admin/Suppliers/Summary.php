<?php

namespace App\Http\Livewire\Admin\Suppliers;
use App\supplier;
use Carbon\Carbon;
use Livewire\Component;

class Summary extends Component
{
    public $suppliers =[];
    public $supplier_summary =[];
    public $codelabels;
    public $codedataset;
    public $monthlabels;
    public $monthdataset;
    public $colors;
    public $total=0;


    public function mount($from,$to){
        $suppliers = supplier::with('company')->where(['expire_year'=>Carbon::now()->year]) ->whereBetween('created_at',[$from,$to])->get();
         $data  = count($suppliers->groupBy('company.name')->toArray());
        $this->suppliers =$data;
        $grouped_status = $suppliers->groupby('status');
        $supplier_dataset = $grouped_status->toArray();
        
        $final_supplier['APPROVED'] = array_key_exists('APPROVED',$supplier_dataset) ? count($supplier_dataset['APPROVED']) :0;
        $final_supplier['PENDING'] = array_key_exists('PENDING',$supplier_dataset) ? count($supplier_dataset['PENDING']) : 0;
        $final_supplier['VERIFIED'] = array_key_exists('VERIFIED',$supplier_dataset) ? count($supplier_dataset['VERIFIED']) : 0;
        $this->total = $final_supplier['APPROVED']+$final_supplier['PENDING']+$final_supplier['VERIFIED'];  
        $this->supplier_summary = $final_supplier;
        $raw_month = $this->group_by_month($suppliers);
        $group_by_month = $raw_month->groupBy('month');      
        $group_by_code =  $raw_month->groupBy('code');
        $final_by_month = $this->summarize_data($group_by_month);      
        $final_by_code = $this->summarize_data($group_by_code);
        $this->codelabels = array_keys($final_by_code);
        $this->codedataset = array_values($final_by_code);
        $this->monthlabels = array_keys($final_by_month);
      
        $this->monthdataset = array_values($final_by_month);
        $this->colors = $this->get_colours($suppliers);
        
    }

    public function group_by_month($data){
       $final=[];

        foreach ($data as $key => $value) {
            $code ="null";
             if(!is_null($value->category)){
                 $code=$value->category->code;
             }
            $final[]= array("month"=>$value->created_at->englishMonth,"code"=>$code);
        }
        return collect($final);
    }

    public function summarize_data($data){
            $array=[];
            foreach ($data as $key => $value) {
                $array[$key]= count($value);
            }
            return $array;
        
    }
    public function get_colours($data)
    {
       $colours=[];
       for ($i=0; $i < count($data) ; $i++) { 
           $colours[] = '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6);
  
       }
       return $colours;
    }
    public function render()
    {
        return view('livewire.admin.suppliers.summary');
    }
}
