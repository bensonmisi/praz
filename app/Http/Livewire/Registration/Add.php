<?php

namespace App\Http\Livewire\Registration;

use App\category;
use App\exchange;
use App\invoicenumber;
use App\online_invoice;
use App\pricing;
use App\supplier;
use App\proof;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithFileUploads;
use Livewire\WithPagination;

class Add extends Component
{
    use WithFileUploads;
    use WithPagination;
    public $categories =null;
    public $query;
    public $showlist = true;
    public $showconfirm = false;
    public $catID ;
    public $catName;
    public $catCode;
    public $type='NEW';
    public $proof;
    public $showupload;


    public function mount()
    {
      $this->categories = category::orderBy('code','ASC')->get();
    }

    public function updatedQuery(){
        $this->categories = category::orderBy('code','ASC')->where('code','like','%'.$this->query.'%')->orWhere('name','like','%'.$this->query.'%')->get();
    }

    public function add($id,$name,$code)
    {
       
        $this->catID = $id;
        $this->catName = $name;
        $this->catCode = $code;
        $this->showlist = false;
        $this->showconfirm = true;

    }

    public function register()
    {
       // $this->validate(['type'=>'required']);
        /// check  registration 

        $company = Auth::user()->company;
        $price = 0;
       /* if($this->type==='RENEW')
        {
            $check = $this->previous_registration();
            if($check)
            {
               $price = $this->getPrice($this->type);
            }else{
                $year = Carbon::now()->year;
                $previous_year = $year-1;
                $proof = proof::where(['company_id'=>$company->id,'category_id'=>$this->catID,'expire_year'=>$previous_year,'status'=>'PENDING'])->first();
                if(!is_null($proof))
                   {
                    session()->flash('error','YOU HAVE ALREADY UPLOAD PROOF OF PREVIOUS REGISTRATION FOUND IT CURRENTLY HAS STATUS:'.\strtoupper($proof->status));
                    return redirect()->route('registration_category_add');
                   }
                   else{
                session()->flash('error','COULD NOT FOUND ANY RECORD OF YOUR PREVIOUS REGISTRATION FOR THE SELECTED CATEGORY. PLEASE UPLOAD ANY PROOF OF REGISTRATION IN THE FORM OF PRAZ TEMPORARY LETTER , RECEIPT OR COPY OF THE GAZATTE IN WHICH YOU APPEARRED. PLEASE NOTE YOU CAN ONLY CONTINUE WITH THE REGISTRATION OF THE SELECTED CATEGORY  ONCE YOUR PROOF HAS BEEN APPROVED');
                 $this->showupload = true;
                 $this->showconfirm = false;
                return;
                   }
            }
       }else{
        $price = $this->getPrice($this->type);
       } */

       $invoicenumber = $this->get_invoice($company);
       $price = $this->getPrice($this->type);
      // dd($invoicenumber);

       $invoice = online_invoice::where(['company_id'=>$company->id,'category_id'=>$this->catID,'year'=>Carbon::now()->year])->orderBy('id','desc')->first();
       if(!is_null($invoice)){
           if($invoice->status !='CANCELLED'){
            session()->flash('error','CATEGORY ALREADY ADDED TO INVOICE NUMBER ( '.$invoice->invoice_number.') ON: '.$invoice->created_at.' WITH STATUS:'.$invoice->status);
              return redirect()->route('registration_category_add');  
           }
       }
       online_invoice::create(['invoice_number'=>$invoicenumber,'category_id'=>$this->catID,'company_id'=>$company->id,'currency_id'=>$price['currency'],'exchange_id'=>$price['exchange'],'year'=>Carbon::now()->year,'status'=>'PENDING','cost'=>$price['price'],'user_id'=>Auth::user()->id]);
       session()->flash('success','SUCCESSFULLY ADDED CATEGORY. PLEASE CLICK ON ADD CATEGORY IF YOU WISH TO REGISTER MORE THAT ONE CATEGORY');
       return redirect()->route('registration_category');
               
         

    }

    public function upload(){
        $this->validate([
            'proof' => 'file',
        ]);
        
          $company = Auth::user()->company;
          $filename = $company->id.'_'.rand(10,100).'.'.$this->proof->extension();
          $file = $this->proof->storePubliclyAs('proof/'.$company->id, $filename,'public');
          $year = Carbon::now()->year;
          $previous_year = $year-1;
          $proof = proof::where(['company_id'=>$company->id,'category_id'=>$this->catID,'expire_year'=>$previous_year])->first();
          if(is_null($proof) || $proof->status==='DENIED')
          {
          proof::create(['company_id'=>$company->id,'category_id'=>$this->catID,'proof'=>$file,'expire_year'=>$previous_year]);
          session()->flash('success','Successfully Uploaded Proof of Previous registration for selected category');
          return redirect()->route('registration_category_add');
          }else{
            session()->flash('error','PROOF OF PREVIOUS REGISTRATION ALREADY UPLOADED  HAS STATUS:'.\strtoupper($proof->status));
            return redirect()->route('registration_category_add');
          }
    }

    function previous_registration(){
        $year = Carbon::now()->year;
        $previous_year = $year-1;
        
         $supplier = supplier::where(['category_id'=>$this->catID,'expire_year'=>$previous_year,'status'=>'APPROVED','company_id'=>Auth::user()->company->id])->first();
         $proof = proof::where(['company_id'=>Auth::user()->company->id,'category_id'=>$this->catID,'expire_year'=>$previous_year,'status'=>'APPROVED'])->first();
        
         if(!is_null($supplier)){
             return true;
         }elseif(!is_null($proof)){
             if(\strtoupper($proof->status)==='VERIFIED')
             {
                 return true;
             }
             else{
                 return false;
             }
         }
         else{
             return false;
         }
    }

    function getPrice($action)
    {
        $price = pricing::where(['locality'=>Auth::user()->company->locality,'action'=>$action,'inventory_id'=>'1'])->first();
        $total = $price->price;
         $currency ='1';
         $exchange_id ='0';
        if(Auth::user()->company->locality==='local'){
            $exchange  = exchange::orderBy('id','desc')->first();
            $total  = $total * $exchange->value;
            $currency = $exchange->other_id;
            $exchange_id = $exchange->id;

        }

        return ['price'=>$total,'currency'=>$currency,'exchange'=>$exchange_id];
    }

    function get_invoice($company){

        $invoice = online_invoice::where(['company_id'=>$company->id,'status'=>'PENDING'])->first();
        $number = invoicenumber::orderBy('id','desc')->first();
        $final ='';
        if(is_null($invoice)){
         // $final = 'inv'.$number->invoice;
         $final = 'inv'.Carbon::now()->year.''.Carbon::now()->month.''.$number->invoice;
          $number->invoice = $number->invoice+1;
          $number->save();
        }else{
            $final = $invoice->invoice_number;
        }
        return $final;
    }

    public function render()
    {
        return view('livewire.registration.add');
    }
    public function filter(){

    }
}
