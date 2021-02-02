<?php

namespace App\Http\Controllers\administrator;

use App\company;
use App\company_document_comments;
use App\company_documents;
use App\Http\Controllers\Controller;
use App\Notifications\supplierNotification;
use App\supplier;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;
use serviceHelper;

class supplierController extends Controller
{
     public function pending(){
        $data = DB::table('suppliers') 
        ->join('companies','companies.id','=','suppliers.company_id')
        ->select('suppliers.*','companies.name')
        ->groupBy('suppliers.company_id')
        ->where('expire_year','=',Carbon::now()->year)
         ->where('status','=','PENDING')
         ->orderBy('id','desc')
         ->get();

        return response()->json(['company'=>$data],200);

     }

     public function show($id){
         $company = company::with('registrations.category','companyDocuments.document','accounttype','comments')->whereid($id)->first();
         return response()->json(['company'=>$company],200);
     }

     public function comment(Request $request){
         $request->validate(['comment'=>'required']);
         company_document_comments::create(['company_id'=>$request->id,'comment'=>$request->comment,'user_id'=>Auth::user()->id]);
        $users = User::wherecompany_id($request->id)->get();
         Notification::send($users,new supplierNotification($request->comment));
         $company = company::with('registrations.category','companyDocuments.document','accounttype','comments')->whereid($request->id)->first();
         return response()->json(['company'=>$company],200);
     }

     public function approve($id){
         company_documents::wherecompany_id($id)->update(['approved_by'=>Auth::user()->id,'approved_on'=>Carbon::now(),'status'=>'APPROVED']);
         $suppliers = supplier::where(['company_id'=>$id,'status'=>'PENDING'])->get();
         $servicehelper = new serviceHelper();
         foreach ($suppliers as $key => $value) {
            $code = $servicehelper->helper_generate_code($value->id);
            supplier::whereid($value->id)->update(['code'=>$code,'status'=>'APPROVED']);
         }

         return response()->json(['message'=>'successful'],200);
     }
}
