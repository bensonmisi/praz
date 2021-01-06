<?php

namespace App\Http\Livewire\Admin\Suppliers;

use App\administrator;
use App\company;
use App\supplier;
use App\supplier_jobs;
use Livewire\Component;

class Assign extends Component
{
    public $query;
    public $users=[];
    public $company;
    public function mount($id){
      $this->company = company::whereid($id)->first();
    }

    public function updatedQuery(){
        $this->users = administrator::where('name','like','%'.$this->query.'%')
                                    ->orwhere('surname','like','%'.$this->query.'%')
                                    ->orwhere('email','like','%'.$this->query.'%')
                                    ->get();
    }

    public function assign($id){
         $job = supplier_jobs::where(['company_id'=>$this->company->id])->first();
         if(is_null($job)){
               supplier_jobs::create(['user_id'=>$id,'company_id'=>$this->company->id,'status'=>'PENDING']);
         }else{
          $job->user_id = $id;
          $job->save();
         }

      session()->flash('success','Successfully Assigned job to user');
      return redirect()->route('can_view_suppliers',$this->company->id); 
    }
    public function render()
    {
        return view('livewire.admin.suppliers.assign');
    }
}
