<?php

namespace App\Http\Livewire\Admin\Returns;

use App\returns_comments;
use App\returns_response;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Comments extends Component
{
    public $response;
    public $comment;
    public function mount($id){
        $this->response = returns_response::whereid($id)->first();
    }

  
    public function render()
    {
        return view('livewire.admin.returns.comments');
    }
    public function add(){
     
        $this->validate(['comment'=>'required']);
        returns_comments::create(['comment'=>$this->comment,'administrator_id'=>Auth::guard('admin')->user()->id,'return_id'=>$this->response->return_id,'returns_response_id'=>$this->response->id]);
        session()->flash('success','Comment Successfully Saved');
        $this->mount($this->response->return_id);
    }
}

