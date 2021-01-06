<?php

namespace App\Http\Controllers\administrator;

use App\accounttype;
use App\category;
use App\company;
use App\Http\Controllers\Controller;
use App\regyear;
use App\supplier;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class companyController extends Controller
{
     public function index(Request $request){
        $company = company::query()
        ->where('name', 'LIKE', "%".$request->search."%") 
        ->orWhere('regnumber', 'LIKE', "%".$request->search."%") 
        ->get();
        $types = accounttype::get();
         return response()->json(['company'=>$company,'types'=>$types],200);
     }

     public function show($id){
         $company = company::whereid($id)->with('accounttype','users','onlinepayments','rtgs.comments','invoices.category','receipts','registrations.category','companyDocuments.document','contacts','comments','banktransactions')->first();
         $categories = category::wherestatus('CREATED')->get();
         $years = regyear::where('year','>=',Carbon::now()->year)->get();
         return response()->json(['company'=>$company,'category'=>$categories,'years'=>$years],200);
     }

     public function update(Request $request){
      
         $request->validate(['name'=>'required','country'=>'required','accounttype'=>'required']);
        if($this->check_company($request->name)==0){
           $company = company::whereid($request->id)->first();
           $locality='local';
           if(strtoupper($request->country) != 'ZIMBABWE'){
              $locality ="foreign";
           }
           $company->name = $request->name;
           $company->country = $request->country;
           $company->accounttype_id = $request->accounttype;
           $company->locality = $locality;
           $company->save();
           $company = company::whereid($request->id)->with('accounttype','users')->first();
           return response()->json(['company'=>$company],200);
        }else
        {
         return response()->json(['message'=>'Company Name already Exist in our data basse'],406);
        }
     }

     public function passwordreset($id){
         $user = User::whereid($id)->first();
         $user->password = '20192020';
         $user->save();
         $company = company::whereid($user->company_id)->with('accounttype','users')->first();
         return response()->json(['company'=>$company],200);

     }

     public function add(Request $request){
         $request->validate(['name'=>'required','surname'=>'required','email'=>'required|email|unique:users,email']);
         $user = new User();
         $user->name = $request->name;
         $user->surname = $request->surname;
         $user->email = $request->email;
         $user->password = '20192020';
         $user->company_id = $request->id;
         $user->status ='ACTIVATED';
         $user->save();
         $company = company::whereid($user->company_id)->with('accounttype','users')->first();
         return response()->json(['company'=>$company],200);



     }

     public function registration(Request $request,supplier $supplier){
         $request->validate(['category'=>'required','regyear'=>'required']);
         if(!supplier::where(['company_id'=>$supplier->company_id,'category_id'=>$request->category,'expire_year'=>$supplier->expire_year])->exists())
         {
         $supplier->category_id = $request->category;
         $supplier->expire_year = $request->regyear;
         $supplier->save();
         return response()->json(['message'=>'success'],200);
         }else{
             return response()->json(['message'=>'Category already registered'],500);
         }
     }

     function check_company($name){
        $cleanname =  preg_replace('/\s+/', '', $name);
        $cleanname = str_ireplace('(Private)Limited','',$cleanname);
        $cleanname = str_ireplace('P/L','',$cleanname);
        $cleanname = str_ireplace('PrivateLimited','',$cleanname);
        $cleanname = str_ireplace('Investments','',$cleanname);
        $cleanname = str_ireplace('Investment','',$cleanname);
        $cleanname = str_ireplace('Pvtltd','',$cleanname);
        $first_three_letters = substr($cleanname,0,4);
        $customers =  DB::select("select * from companies where name LIKE '%".$first_three_letters."%'");
         if(count($customers)>0)
         {
            foreach ($customers as $key => $value) {
                //$request_array = str_split(strtoupper($cleanname));
                $db_name = preg_replace('/\s+/', '', $value->name);
                $db_name = str_ireplace('(Private)Limited','',$db_name);
                $db_name = str_ireplace('P/L','',$db_name);
                $db_name = str_ireplace('PrivateLimited','',$db_name);
                $db_name = str_ireplace('Investments','',$db_name);
                $db_name = str_ireplace('Investment','',$db_name);
                $db_name = str_ireplace('Pvtltd','',$db_name);
                $compare = strcasecmp(strtoupper($cleanname),strtoupper(preg_replace('/\s+/', '', $db_name)));
                  if($compare==0)
                    {
                        return $value->id;
                    }
                   
                                 
            } 
            return 0;
         }

    }
    

    
}
