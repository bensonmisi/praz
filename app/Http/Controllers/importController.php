<?php

namespace App\Http\Controllers;

use App\Imports\StatementImport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class importController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin');  
    }
   public function store(Request $request){
   $path= $request->document->storeAs('statements','statement.csv');
    Excel::import(new StatementImport,$path);
    session()->flash('success','Successfully import file');
    return redirect()->route('admin.home');
   }
}
