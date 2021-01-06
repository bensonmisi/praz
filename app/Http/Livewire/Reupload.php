<?php

namespace App\Http\Livewire;

use App\administrator;
use App\Notifications\actionComment;
use App\rtgs;
use App\rtgs_comments;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithFileUploads;

class Reupload extends Component
{
    public $media;
    public $bank;
    use WithFileUploads;

    public function mount($id){
      $this->bank = rtgs::where(['company_id'=>Auth::user()->company->id,'id'=>$id])->first();
      if(is_null($this->bank)){
          session()->flash('error','Bank transfer not found');
          return redirect()->route('home');
      }
    }

    public function save(){
        $this->validate(['media'=>'required|file']);
        $filename="";
          $filename = $this->bank->invoice_number.rand(10,100).'.'.$this->media->extension();
       $file =  $this->media->storePubliclyAs('pop/'.Auth::user()->company->id,$filename,'my_files');
        
        $this->bank->filename = $file;
        $this->bank->save();
        $comment = rtgs_comments::where(['rtgs_id'=>$this->bank->id,'actioned'=>'PENDING'])->first();
        if(!is_null($comment)){
            $name =$this->bank->company->name;
            // to continue from here
            $user = administrator::whereid($comment->user_id)->first();
            $user->notify(new actionComment($this->bank->id,$name,$comment->comment));
        }
       
    session()->flash('success','POP successfully uploadded');
    return  redirect()->route('awaiting');


    }


    public function render()
    {
        return view('livewire.reupload');
    }
}
