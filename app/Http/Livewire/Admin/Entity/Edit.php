<?php

namespace App\Http\Livewire\Admin\Entity;

use App\accounttype;
use App\company;
use App\pclass;
use App\pcompanyclass;
use Livewire\Component;

class Edit extends Component
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
    public $companydata;

    public function mount($id){
        $this->pclasslist = pclass::get();
        $dt = company::whereid($id)->first();
        $this->company =  $dt->name;
        $this->city = $dt->city;
        $this->district =  $dt->district;
        $this->province =  $dt->province;
        $this->sector = $dt->sector;
        $this->address =  $dt->address;
        $this->companydata =  $dt;

    }

    public function update(){
        $this->validate(['company'=>'required','sector'=>'required','city'=>'required','address'=>'required','province'=>'required','district'=>'required','pclass'=>'required']);
        
         $this->companydata->name = $this->company;
         $this->companydata->city = $this->city;
         $this->companydata->district = $this->district;
         $this->companydata->province = $this->province;
         $this->companydata->sector = $this->sector;
         $this->companydata->address = $this->address;
         $this->companydata->save();
         $class = pcompanyclass::wherecompany_id($this->companydata->id)->first();
         $class->pclass_id = $this->pclass;
         $class->save();
         session()->flash('success','Entity Successfully Created');
          return redirect()->route('admin.entity.index');
    }

    public function render()
    {
        return view('livewire.admin.entity.edit');
    }
}
