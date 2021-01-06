<?php

namespace App\Http\Controllers;

use App\pnotice;
use Faker\Provider\File as ProviderFile;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class showTenderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function download($id){
        $notice = pnotice::where(['id'=>$id,'company_id'=>Auth::user()->company->id])->first();         
        $path = public_path().'/'.$notice->file;
        return response()->file($path);
        /*if(File::exists($path)){
            
        }*/
    }
}
