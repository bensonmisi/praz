<?php

namespace App\Http\Livewire\Admin;

use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Home extends Component
{
    public $user;

    public function mount()
    {
        $this->user = Auth::guard('admin')->user();
    }
    public function render()
    {
        return view('livewire.admin.home');
    }
}
