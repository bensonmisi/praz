<?php

namespace App\Http\Livewire\Entity\Tenders;

use App\category;
use App\currency;
use App\pbondcap;
use App\pclassification;
use App\pnotice;
use App\pnotice_category;
use App\pnotice_products;
use App\ptypes;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithFileUploads;
use serviceHelper;

class Edit extends Component
{ 
    use WithFileUploads;
    public $tendernumber;
    public $description;
    public $close_date;
    public $classifications =[];
    public $currencylist = [];
    public $currency;
    public $bidvalue;
    public $bidbond;
    public $classification;
    public $file;
    public $type;
    public $types=[];
    public $categories =[];
    public $query;
    public $catgoryArray=[];
    public $products = [];
    public $period;
    public $product;
    public $quantity;
    public $notice;

    public function mount($id){
        $this->classifications = pclassification::get();
        $this->currencylist= currency::get();
        $this->types =  ptypes::get();
        $this->notice = pnotice::where(['id'=>$id,'company_id'=>Auth::user()->company->id])->first();
        if(!is_null($this->notice)){
          $this->tendernumber = $this->notice->tendernumber;
          $this->description = $this->notice->description;
          $this->close_date = $this->notice->close_date;
          $this->classification = $this->notice->pclassification_id;
          $this->currency = $this->notice->currency_id;
          $this->bidbond = $this->notice->bidbond;
          $this->bidvalue = $this->notice->bidvalue;
          $this->type = $this->notice->ptype_id;
          $this->period = $this->notice->period;
          $this->product = $this->notice->product;
          $this->quantity = $this->notice->quantity;

          if(count($this->notice->category)>0){
              foreach ($this->notice->category as $key => $value) {
                  $this->catgoryArray[] = array("id"=>$value->category_id,'code'=>$value->category->code,"name"=>$value->category->name);
              }
          }

          if(count($this->notice->products) >0){
               foreach ($this->notice->products as $key => $value) {
                    $this->products[]= array("id"=>$value->id,"name"=>$value->name,"quantity"=>$value->quantity);
               }
          }
        }else{
            session()->flash('error','Notice not found');
            return redirect()->route('home');
        }
    }
    public function remove($index){
        $arry = $this->catgoryArray;
        unset($arry[$index]);
        $this->catgoryArray = $arry;
    }
    public function addCategory($id,$code,$name){
        
        $this->catgoryArray[] = array("id"=>$id,"code"=>$code,"name"=>$name);
        $this->categories=[];
        $this->query ="";
    }
    public function addProduct(){
        $this->products[] = array("name"=>$this->product,"quantity"=>$this->quantity);
        $this->product ="";
        $this->quantity ="";
    }

    public function removeProduct($index){
        $array = $this->products;
        unset($array[$index]);
        $this->products = $array;
    }
    public function updatedQuery(){
        $search = preg_replace('/[^A-Za-z0-9\-]/', '',$this->query);
        $this->categories = category::orderBy('code','ASC')->where('code','like','%'.$search.'%')->orWhere('name','like','%'.$search.'%')->get();
    }

    public function save(){
        $this->validate([
            'tendernumber'=>'required|unique:pnotices,id',
            'description'=>'required',
            'close_date'=>'required|date',
            'classification'=>'required',
            'currency'=>'required',
            'period'=>'required',
            'type'=>'required',
            'bidbond'=>'required|integer',
            'bidvalue'=>'required|integer',
             'catgoryArray'=>'required|array'
            ]);

            $service = new serviceHelper();
            /** check if the  bid bond value is  less the  bidbond cap */
         //dd($this->period);
             $bidcap = pbondcap::first();
             if(!is_null($this->file)){
             $filename = $service->clean($this->tendernumber).'.'.$this->file->extension();
             $file = $this->file->storePubliclyAs('tenders', $filename,'my_files');
             $this->notice->file = $file;
             }
             $bid_bond_cap = $this->bidvalue * ($bidcap->value/100);
             if($this->bidbond <= $bid_bond_cap){ 

                $this->notice->tendernumber = $this->tendernumber;
                $this->notice->description = $this->description;
                $this->notice->close_date = $this->close_date;
                $this->notice->pclassification_id = $this->classification;
                $this->notice->currency_id = $this->currency;
                $this->notice->bidbond = $this->bidbond;
                $this->notice->bidvalue = $this->bidvalue;
                $this->notice->ptype_id = $this->type;
                $this->notice->period = $this->period;
               
                $this->notice->save();
                pnotice_category::wherepnotice_id($this->notice->id)->delete();
                foreach ($this->catgoryArray as $key => $value) {                     
                    pnotice_category::create(['category_id'=>$value['id'],'pnotice_id'=>$this->notice->id]);
               }

               pnotice_products::wherepnotice_id($this->notice->id)->delete();
                  foreach ($this->products as $key => $product) {
                    pnotice_products::create(['pnotice_id'=>$this->notice->id,"name"=>$product['name'],"quantity"=>$product["quantity"]]);
              
                  }
               $service->notice_log($this->notice->id,Auth::user()->id,'EDIT','EDITTED NOTICE '.$this->tendernumber);
               session()->flash('success','SUCCESSFULLY UPDATED YOUR TENDER IT NOW AWAITS  APPROVAL AND PUBLICATION');
   
               return redirect()->route('home');
          
             }else{
                session()->flash('error','Bid Bond Should be less than '.$bidcap->value.'% of the bid value. Bid bond inputed is above the cap');
                return;
             }
    }
    public function render()
    {
        return view('livewire.entity.tenders.edit');
    }
}
