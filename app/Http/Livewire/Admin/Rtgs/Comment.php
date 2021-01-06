<?php

namespace App\Http\Livewire\Admin\Rtgs;

use App\Notifications\rtgsComment;
use App\rtgs;
use App\rtgs_comments;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification as FacadesNotification;
use Livewire\Component;

class Comment extends Component
{
    public $rtgs;
    public $comment;

    public function mount($id){
        $this->rtgs = rtgs::whereid($id)->first();
    }

    public function add(){
        $this->validate(['comment'=>'required']);

         rtgs_comments::create(['rtgs_id'=>$this->rtgs->id,'user_id'=>Auth::guard('admin')->user()->id,'comment'=>$this->comment]);
          FacadesNotification::send($this->rtgs->company->users, new rtgsComment($this->comment));
          session()->flash('success','Comment Successfully Submitted');
          return redirect()->route('can_view_rtgs',$this->rtgs->id);
    }
    public function render()
    {
        return view('livewire.admin.rtgs.comment');
    }
}
