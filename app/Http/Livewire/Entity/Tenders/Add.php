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


class Add extends Component
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
    public $period;
    public $product;
    public $quantity;
    public $products=[];

    public function mount(){
        $this->classifications = pclassification::get();
        $this->currencylist= currency::get();
        $this->types =  ptypes::get();

    }

    public function save(){
        $this->validate([
                         'tendernumber'=>'required|unique:pnotices',
                         'description'=>'required',
                         'close_date'=>'required|date',
                         'classification'=>'required',
                         'currency'=>'required',
                         'period'=>'required',
                         'type'=>'required',
                         'bidbond'=>'required|integer',
                         'bidvalue'=>'required|integer',
                         'file'=>'file|mimes:pdf',
                          'catgoryArray'=>'required|array',
                          'products'=>'required|array'
                         ]);


        $service = new serviceHelper();
       /** check if the  bid bond value is  less the  bidbond cap */
    //dd($this->period);
        $bidcap = pbondcap::first();

        $bid_bond_cap = $this->bidvalue * ($bidcap->value/100);
        if($this->bidbond <= $bid_bond_cap){
            $filename = $service->clean($this->tendernumber).'.'.$this->file->extension();
            $file = $this->file->storePubliclyAs('tenders', $filename,'my_files');

           $notice= pnotice::create([
                            'tendernumber'=>$this->tendernumber,
                            'description'=>$this->description,
                            'close_date'=>$this->close_date,
                            'pclassification_id'=>$this->classification,
                            'currency_id'=>$this->currency,
                            'bidbond'=>$this->bidbond,
                            'bidvalue'=>$this->bidvalue,
                            'company_id'=>Auth::user()->company->id,
                            'created_by'=>Auth::user()->id,
                            'ptype_id'=>$this->type,
                            'file'=>$file,
                            'period'=>$this->period
                            ]);
                   
                         foreach ($this->catgoryArray as $key => $value) {
                              pnotice_category::create(['category_id'=>$value['id'],'pnotice_id'=>$notice->id]);
                         }

                         foreach ($this->products as $key => $product) {
                             pnotice_products::create(['pnotice_id'=>$notice->id,"name"=>$product['name'],"quantity"=>$product["quantity"]]);
                         }
                             $service->notice_log($notice->id,Auth::user()->id,'CREATED','CREATED NOTICE '.$this->tendernumber);
                            session()->flash('success','SUCCESSFULLY CREATED YOUR TENDER IT NOW AWAITS  APPROVAL AND PUBLICATION');
   
            return redirect()->route('entity');

        }else{
            session()->flash('error','Bid Bond Should be less than '.$bidcap->value.'% of the bid value. Bid bond inputed is above the cap');
          return;
        }
    }
    public function updatedQuery(){
        $search = preg_replace('/[^A-Za-z0-9\-]/', '',$this->query);
        $this->categories = category::orderBy('code','ASC')->where('code','like','%'.$search.'%')->orWhere('name','like','%'.$search.'%')->get();
    }

    public function addCategory($id,$code,$name){
        
        $this->catgoryArray[] = array("id"=>$id,"code"=>$code,"name"=>$name);
        $this->categories=[];
        $this->query ="";
    }
    public function remove($index){
        $arry = $this->catgoryArray;
        unset($arry[$index]);
        $this->catgoryArray = $arry;
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
    public function render()
    {
        return view('livewire.entity.tenders.add');
    }
}

