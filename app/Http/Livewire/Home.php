<?php

namespace App\Http\Livewire;

use App\online_invoice;
use App\pnotice_category;
use App\rtgs;
use App\supplier;
use App\tender_invoice;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Home extends Component
{
    public $invoice=[];
    public $categories=[];
    public $awaiting=[];
    public $tenderfee=0;
    public function mount(){
        $company = Auth::user()->company;
        $contacts = Auth::user()->company->contacts;
        if(Auth::user()->type ==='SUPPLIER')
        {
           
            $this->categories = supplier::where(['company_id'=>$company->id])->where('expire_year','>=',Carbon::now()->year)->with('category')->get();
            $this->invoice = online_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->with('category')->get();
            $this->awaiting = rtgs::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->get();
            $this->tenderfee = tender_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->first();
        
            if(is_null($contacts)){
                session()->flash('error','PLEASE FILL IN ALL YOUR COMPANY CONTACTS TO CONTINUE. PLEASE NOTE THESE WILL BE THE CONTACTS THAT WILL BE VIEWED AND USED BY CLIENTS SEEKING YOUR SERVICES');
                return redirect()->route('contacts');
            }
        }
        else{
            return redirect()->route('entity'); 
        }
    }

    public function read(){
        $user = User::whereid(Auth::user()->id)->first();
        $user->unreadNotifications->markAsRead();
    }

    public function getNotices($id){
        return pnotice_category::wherecategory_id($id)->with(['notice'=>function($query){
              $query->where('status','=','PUBLISHED');

        }])->orderBy('id','desc')->get();
    }

    public function render()
    {
        return view('livewire.home');
    }
}
