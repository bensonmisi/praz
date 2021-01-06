<?php

namespace App\Http\Livewire\Entity\Awards;

use App\Notifications\awardNotice;
use App\pawards;
use App\pnotice;
use App\pnotice_products;
use App\supplier;
use Carbon\Carbon;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification as FacadesNotification;
use Livewire\Component;
use serviceHelper;

class Add extends Component
{
    public $notice;
    public $code;
    public $supplier;
    public $product;
    public $amount;
    public $quantity;

    public function mount($id){
        $this->notice =  pnotice::where(['id'=>$id,'company_id'=>Auth::user()->company->id])->first();
    }

    public function search(){
        $this->validate(['code'=>'required']);
   
        $supplier = supplier::where(['code'=>$this->code,'expire_year'=>Carbon::now()->year,'status'=>'APPROVED'])->with('company','category')->first();
         $match = 0;
        if(!is_null($supplier)){
             foreach ($this->notice->category as $key => $category) {
                  if($category->category->id == $supplier->category_id){
                    $match++;
                  }
             }

             if($match>0){
                $this->supplier = $supplier;           
             }else{
                 session()->flash('error','Category registered on certificate is ('.$supplier->category->code.'('.$supplier->category->name.'). This  does not match any category specified on notice');
                 return;
             }
        
        
        }else{
            session()->flash('error','Certificate Number invalid or Expired');
            return;
        }
   
    }

    public function award()
    {
        $this->validate(['product'=>'required','quantity'=>'required','amount'=>'required']);
        $service =  new serviceHelper();
        $product =  pnotice_products::whereid($this->product)->first();
        $awarded =  pawards::where(['pnotice_id'=>$this->notice->id,'pnotice_product_id'=>$this->product,'status'=>'AWARDED'])->sum('quantity');
         $balance = $product->quantity - $awarded;
         if($this->quantity <= $balance){
             pawards::create(['pnotice_id'=>$this->notice->id,'pnotice_product_id'=>$this->product,'company_id'=>$this->supplier->company_id,'currency_id'=>$this->notice->currency_id,'value'=>$this->amount,'quantity'=>$this->quantity,'status'=>'AWARDED']);
             session()->flash('success','Contract Successfully Awarded to Supplier');
             $message ="Congratulations you have been awarded an contract to supply ".$this->quantity.''.$product->name;
             $data =['message'=>$message,'type'=>'Success','url'=>'/award/'.$this->notice->id];  
             $service->notice_log($this->notice->id,Auth::user()->id,'AWARDED','AWARD NOTICE '.$this->notice->tendernumber);          
             FacadesNotification::send( $this->supplier->company->users,new awardNotice($data));
             return redirect()->route('tender.awards.index',$this->notice->id);
         }else{
             session()->flash('error','Quantity remaining for award: '.$balance);
             return;
         }
    }

    public function render()
    {
        return view('livewire.entity.awards.add');
    }
}
