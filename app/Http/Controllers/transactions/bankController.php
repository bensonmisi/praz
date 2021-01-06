<?php

namespace App\Http\Controllers\transactions;

use App\banks;
use App\banktransactions;
use App\company;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class bankController extends Controller
{
    public function index()
    {
        $customers = company::get();
        return response()->json(compact('customers'), 200);
    }

   
    public function store(Request $request)
    {
         
        $bank = banks::whereauthcode($request->authcode)->first();         
        if(!is_null($bank))
        {
         
            if(!banktransactions::wherereferencenumber($request->referencenumber)->exists())
            {
                   $customer = $this->check_description($request->description);
                    $customer_number="";
                    $status="PENDING";
                  if(!is_null($customer)){
                       $customer_number = $customer->regnumber;
                       $status ="CLAIMED";
                   }
              
                 banktransactions::create(['bank_id'=>$bank->id,
                                            'trans_date'=>$request->trans_date,
                                            'referencenumber'=>$request->referencenumber,
                                            'source_reference'=>$request->source_reference,
                                            'customer_number'=>$customer_number,
                                            'description'=>$request->description,
                                            'amount'=>$request->amount,
                                            'status'=>$status,
                                            'accountnumber'=>$request->accountnumber,
                                            'currency'=>$request->currency
                                        ]);
              
              
                return response()->json(['response' => ['status'=>'success','description'=>'Reference number saved']], 200);
            }
            else
            {
                return response()->json(['response' => ['status'=>'error','description'=>'Reference Already Exists']], 406);
            }
           
        }
        else{
            return response()->json(['response' => ['status'=>'error','description'=>'UNAUTHORIZED']], 406);
        }
    }

     function check_description($description){
        $db_name = preg_replace('/\s+/', '', $description);
        Log::info($db_name);
         $customer = company::with('users')->whereregnumber($db_name)->first();
         Log::info($customer);
          return $customer;
     }

}
