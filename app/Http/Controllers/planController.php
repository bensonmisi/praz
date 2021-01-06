<?php

namespace App\Http\Controllers;

use App\plans;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class planController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function download($id){
        $plan = plans::where(['company_id'=>Auth::user()->company->id,'id'=>$id])->first();
        $path = public_path().'/plans/'.Auth::user()->company->id.'/'.$plan->file;
        return response()->file($path);
    }
}
