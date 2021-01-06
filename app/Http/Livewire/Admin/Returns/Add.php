<?php

namespace App\Http\Livewire\Admin\Returns;

use App\returns;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithFileUploads;

class Add extends Component
{
    use WithFileUploads;
    public $name;
    public $due;
    public $document;


    public function add(){
        $this->validate(['name'=>'required','due'=>'required','document'=>'required']);
        $filename = rand(1000,100000).'.'.$this->document->extension();
          $file = $this->document->storePubliclyAs('returns', $filename,'my_files');
        returns::create(['name'=>$this->name,'templateUrl'=>$filename,'due_date'=>$this->due,'created_by'=>Auth::guard('admin')->user()->id]);
         session()->flash('success','Successfully Created Return');
         return redirect()->route('admin.returns.index');
    }
    public function render()
    {
        return view('livewire.admin.returns.add');
    }
}
