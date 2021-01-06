<?php

namespace App\Http\Controllers;

use App\returns;
use Illuminate\Http\Request;

class returnsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function download($id){
        $plan = returns::whereid($id)->first();
        $path = public_path().'/returns/'.$plan->templateUrl;
        return response()->file($path);
    }
}
