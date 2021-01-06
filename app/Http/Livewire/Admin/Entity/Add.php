<?php

namespace App\Http\Livewire\Admin\Entity;

use App\accounttype;
use App\company;
use App\pclass;
use App\pcompanyclass;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class Add extends Component
{
    public $company;
    public $sector;
    public $city;
    public $country="Zimbabwe";
    public $address;
    public $types=[];
    public $accounttype=1;
    public $province;
    public $district;
    public $pclass;
    public $pclasslist=[];

    public function mount(){
        $this->types = accounttype::get();
        $this->pclasslist = pclass::get();
    }

  public function add(){
      $this->validate(['company'=>'required','sector'=>'required','city'=>'required','address'=>'required','province'=>'required','district'=>'required','pclass'=>'required']);
       if($this->check_company($this->company)==0){
         $regnumber = $this->regnumber();
         $company = company::create([
             'name'=>$this->company,
             'regnumber'=>$regnumber,
              'sector'=>$this->sector,
              'city'=>$this->city,
              'address'=>$this->address,
              'province'=>$this->province,
              'district'=>$this->district,
              'country'=>$this->country,
              'locality'=>'local',
              'accounttype_id'=>$this->accounttype
              ]);
            pcompanyclass::firstOrCreate(['company_id'=>$company->id,'pclass_id'=>$this->pclass],['company_id'=>$company->id,'pclass_id'=>$this->pclass,'assigned_by'=>Auth::guard('admin')->user()->id]);
          session()->flash('success','Entity Successfully Created');
          return redirect()->route('admin.entity.index');
        }else{
           session()->flash('error','Company Name Already Exists');
           return;
       }
  }
  
  function check_company($name){
    $cleanname =  preg_replace('/\s+/', '', $name);
    $cleanname = str_ireplace('(Private)Limited','',$cleanname);
    $cleanname = str_ireplace('P/L','',$cleanname);
    $cleanname = str_ireplace('PrivateLimited','',$cleanname);
    $cleanname = str_ireplace('Investments','',$cleanname);
    $cleanname = str_ireplace('Investment','',$cleanname);
    $cleanname = str_ireplace('Pvtltd','',$cleanname);
    $first_three_letters = substr($cleanname,0,4);
    $customers =  DB::select("select * from companies where name LIKE '%".$first_three_letters."%'");
     if(count($customers)>0)
     {
        foreach ($customers as $key => $value) {
            //$request_array = str_split(strtoupper($cleanname));
            $db_name = preg_replace('/\s+/', '', $value->name);
            $db_name = str_ireplace('(Private)Limited','',$db_name);
            $db_name = str_ireplace('P/L','',$db_name);
            $db_name = str_ireplace('PrivateLimited','',$db_name);
            $db_name = str_ireplace('Investments','',$db_name);
            $db_name = str_ireplace('Investment','',$db_name);
            $db_name = str_ireplace('Pvtltd','',$db_name);
            $compare = strcasecmp(strtoupper($cleanname),strtoupper(preg_replace('/\s+/', '', $db_name)));
              if($compare==0)
                {
                    return $value->id;
                }
               
                             
        } 
        return 0;
     }

}

function regnumber(){
    $company = count(company::get());
    return "PR".\Carbon\Carbon::now()->micro."".($company+1);
}
    public function render()
    {
        return view('livewire.admin.entity.add');
    }
}
