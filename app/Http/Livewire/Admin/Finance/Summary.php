<?php

namespace App\Http\Livewire\Admin\Finance;

use App\banktransactions;
use App\receipt;
use Carbon\Carbon;
use Livewire\Component;
use Illuminate\Support\Arr;

class Summary extends Component
{
    public $groups =[];
    public $labels;
    public $dataset;
    public $colors;
    public $spoclabels;
    public $spocdataset;
    public $supplierlabels;
    public $supplierdataset;
    public $bondlabels;
    public $bonddataset;
    public $establishmentlabels;
    public $establishmentdataset;
    public $depositlabels;
    public $depositdataset;
    public $from;
    public $to;
    

    public function mount(){
       $receipts  = receipt::wherecurrency('ZWL')->whereBetween('created_at',[Carbon::now()->subDays(200),Carbon::now()])->get();
       
       $converted_supplier = $this->convert_array($receipts,'SUPPLIER');
       $supplier_array= $converted_supplier->groupBy('date')->toArray();    
       $this->colors = $this->get_colours($supplier_array);    
       $final_suppliers=$this->summarize_data($supplier_array);
       $this->supplierlabels = array_keys($final_suppliers);
       $this->supplierdataset = array_values($final_suppliers);
       $converted_spoc  = $this->convert_array($receipts,'SPOC');
       $spoc_array= $converted_spoc->groupBy('date')->toArray();      
       $final_spoc=$this->summarize_data($spoc_array);
       $this->spoclabels = array_keys($final_spoc);
       $this->spocdataset = array_values($final_spoc);
       $converted_bond  = $this->convert_array($receipts,'BIDBOND');
       $bond_array= $converted_bond->groupBy('date')->toArray();      
       $final_bond=$this->summarize_data($bond_array);
       $this->bondlabels = array_keys($final_bond);
       $this->bonddataset = array_values($final_bond);
       $converted_establishment  = $this->convert_array($receipts,'ESTABLISHMENT');
       $establishment_array= $converted_establishment->groupBy('date')->toArray();      
       $final_establishment=$this->summarize_data($establishment_array);
       $this->establishmentlabels = array_keys($final_establishment);
       $this->establishmentdataset = array_values($final_establishment);
       $final_transactions = $this->getDeposits();
       $this->depositlabels = array_keys($final_transactions);
       $this->depositdataset = array_values($final_transactions);

      
       

    }
    public function search(){
        $receipts  = receipt::wherecurrency('ZWL')->whereBetween('created_at',[$this->from,$this->to])->get();
        $converted_supplier = $this->convert_array($receipts,'SUPPLIER');
        $supplier_array= $converted_supplier->groupBy('date')->toArray();    
        $this->colors = $this->get_colours($supplier_array);    
        $final_suppliers=$this->summarize_data($supplier_array);
        $this->supplierlabels = array_keys($final_suppliers);
        $this->supplierdataset = array_values($final_suppliers);
        $converted_spoc  = $this->convert_array($receipts,'SPOC');
        $spoc_array= $converted_spoc->groupBy('date')->toArray();      
        $final_spoc=$this->summarize_data($spoc_array);
        $this->spoclabels = array_keys($final_spoc);
        $this->spocdataset = array_values($final_spoc);
        $converted_bond  = $this->convert_array($receipts,'BIDBOND');
        $bond_array= $converted_bond->groupBy('date')->toArray();      
        $final_bond=$this->summarize_data($bond_array);
        $this->bondlabels = array_keys($final_bond);
        $this->bonddataset = array_values($final_bond);
        $converted_establishment  = $this->convert_array($receipts,'ESTABLISHMENT');
        $establishment_array= $converted_establishment->groupBy('date')->toArray();      
        $final_establishment=$this->summarize_data($establishment_array);
        $this->establishmentlabels = array_keys($final_establishment);
        $this->establishmentdataset = array_values($final_establishment);
        
 
     }
 

    public function Overall(){
        $receipts = receipt::wherecurrency('ZWL')->get();
        $grouped =$receipts->groupBy('type');
        $dataset = $grouped->toArray();
        $colours=[];
        for ($i=0; $i < count($dataset) ; $i++) { 
            $colours[] = '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6);
   
        }
         
        $final["SUPPLIER"]= $this->compute_total($dataset["SUPPLIER"]);
        $final["SPOC"]=$this->compute_total($dataset["SPOC"]);
        $final["ESTABLISHMENT"]=$this->compute_total($dataset["ESTABLISHMENT"]);
        $final["BIDBOND"]=$this->compute_total($dataset["BIDBOND"]);
       
        $this->labels = array_keys($final);
        $this->dataset = array_values($final);
        $this->colors = $colours;
    }
     public function get_colours($data)
     {
        $colours=[];
        for ($i=0; $i < count($data) ; $i++) { 
            $colours[] = '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6);
   
        }
        return $colours;
     }
    public function convert_array($data,$type){
        $array =[];
         foreach ($data as $key => $value) {
             if($type == $value->type)
             {
               $array[] = ["date"=>$value->created_at->toDateString(),"amount"=>$value->amount];
             }
         }

         return collect($array);
    }

    public function compute_total($data){
        $total = 0;
        if(count($data)>0)
        {
        for ($i=0; $i <count($data) ; $i++) { 
            $total = $total+$data[$i]['amount'];
        }
       }
       return $total;
    }

    public function summarize_data($data){
        $array=[];
        foreach ($data as $key => $value) {
            $array[$key]= $this->compute_total($value);
        }
        return $array;
    }
    
    public function getDeposits(){
        $deposits = banktransactions::get(); 
        $deposits_grouped = $deposits->groupBy('accountnumber');
        $deposits_array =  $deposits_grouped->toArray();
        $final=[];
        if(count($deposits_array) >0){
            foreach ($deposits_array as $key => $value) {
               $final[$key]= $this->compute_total($value); 
            }
        }
        return $final;
    }

    public function render()
    {
        return view('livewire.admin.finance.summary');
    }
}
