<?php

namespace App\Http\Controllers;

use App\budgets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class budgetController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function download($id){
        $plan = budgets::where(['company_id'=>Auth::user()->company->id,'id'=>$id])->first();
        $path = public_path().'/budgets/'.Auth::user()->company->id.'/'.$plan->file;
        return response()->file($path);
    }
}
