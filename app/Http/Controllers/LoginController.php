<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
     public function index()
     {
          return view('login');
     }

     public function login(Request $request){     
            $request->validate(['email'=>'required|email','password'=>'required|min:8']);
             
           if(Auth::attempt(['email'=>$request->email,'password'=>$request->password]))
            {
               if(Auth::user()->status==='ACTIVATED')
               {
                //Auth::logoutOtherDevices($this->password);
                if(Auth::user()->type=='SUPPLIER')
                 {
                   return redirect(route('home'));
                 }
                 else{
    
                    return redirect()->route('entity');
                 }
               }
               else{
                session()->flash('error','Please Check Your Email And Activate Your Account');
                   Auth::logout();
               }
               
            }else{
                session()->flash('error','Invalid Login Details');
            }
     }
}
