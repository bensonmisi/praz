<?php

namespace App\Http\Controllers\bidders;

use App\bidbond;
use App\Http\Controllers\Controller;
use App\pnotice;
use App\ptypes;
use App\receipt;
use App\tender_invoice;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use paymentHelper;
use serviceHelper;

class noticeController extends Controller
{
  public function index(){
      $notices = pnotice::with('type','products','company','category.category','currency')->orderby('id','desc')->wherestatus('PUBLISHED')->paginate(100);
      $types = ptypes::get();
      return  response()->json(['notices'=>$notices,'types'=>$types],200);
  }

  public function show($id){
      $service = new serviceHelper();
      $notice = pnotice::with(['type','products','company','category.category','currency','type','qoutations'=>function($query){
        $query->where('company_id','=',Auth::user()->company->id);
    }])->whereid($id)->first();
      $establishement = $service->getEstablishmentFee($id);
      $spoc = $service->getSpocFee($id);
      $nonrefundable = [];
      if($establishement>0){
          $invoice = tender_invoice::where(['pnotice_id'=>$notice->id,'company_id'=>Auth::user()->company->id,'description'=>'establishment','status'=>'PAID'])->first();
          $status = false;
          if(!is_null($invoice)){
              $status = true;
          }
       
          $nonrefundable[]= array('name'=>'establishment','status'=>'nonrefundable','cost'=>$establishement,'paid'=>$status);
       
      }
      if($spoc>0){
        $invoice = tender_invoice::where(['pnotice_id'=>$notice->id,'company_id'=>Auth::user()->company->id,'description'=>'spoc','status'=>'PAID'])->first();
        $status = false;
        if(!is_null($invoice)){
            $status = true;
        }
          $nonrefundable[] = array('name'=>'spoc','status'=>'nonrefundable','cost'=>$spoc,'paid'=>$status);
      }
      if($notice->bidbond>0){
        $invoice = tender_invoice::where(['pnotice_id'=>$notice->id,'company_id'=>Auth::user()->company->id,'description'=>'bidbond','status'=>'PAID'])->first();
        $status = false;
        if(!is_null($invoice)){
            $status = true;
        }          
        $nonrefundable[] = array('name'=>'bidbond','status'=>'refundable','cost'=>$notice->bidbond,'paid'=>$status); 
      }

      $invoice = tender_invoice::where(['company_id'=>Auth::user()->company->id,'pnotice_id'=>$id,'status'=>'PENDING'])->first();
      return response()->json(['nonrefundable'=>$nonrefundable,'invoice'=>$invoice,'notice'=>$notice]);
  }

  public function additem(Request $request){
      $pending = tender_invoice::where(['pnotice_id'=>$request->notice,'company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->first();
      $notice = pnotice::whereid($request->notice)->first();
      if(is_null($pending))
      {
      $cost = 0 ;
      $service = new serviceHelper();
      if($request->name == 'establishment'){
         $cost = $service->getEstablishmentFee($request->notice);
      }elseif($request->name =='spoc'){
          $cost = $service->getSpocFee($request->notice);
      }else{
           $cost = $notice->bidbond;
      }
     
      if(!tender_invoice::where(['pnotice_id'=>$request->notice,'company_id'=>Auth::user()->company->id,'description'=>$request->name])->exists())
      {
       $invoice_number = $this->generate_invoice($request->notice);
      tender_invoice::create(['pnotice_id'=>$request->notice,
                                  'invoice_number'=>$invoice_number,
                                  'company_id'=>Auth::user()->company->id,
                                  'currency_id'=>$notice->currency_id,
                                  'description'=>$request->name,
                                  'year'=>Carbon::now()->year,
                                  'cost'=>$cost,
                                  'status'=>'PENDING',
                                  'user_id'=>Auth::user()->id
                                  ]);
      $invoice = tender_invoice::where(['company_id'=>Auth::user()->company->id,'pnotice_id'=>$request->notice,'status'=>'PENDING'])->first();

     return response()->json(['invoice'=>$invoice],200);
      }else{
          return response()->json(['message'=>'Fee already added to invoice'],500);
      }
    }
    else{
        return response()->json(['message'=>'Please pay  '.$pending->description.' to proceed'],500);
    }
  }

  public function initiate($id){
    $service = new serviceHelper(); 
      
       /**get the  invoice  */
       $invoice = tender_invoice::whereid($id)->first();
       /** get the amount that was paid  */
       $paid = $service->getPayment($invoice->invoice_number,$invoice->description);
       /**
        * check if the fee is fully paid
        */
        $due = $invoice->cost - $paid;
       if($due>0)
       {
            /**
             * if amount paid is less than the amout due get the balance in wallet based on the description 
             */
               $accountnumber = "";
               $currency = $invoice->currency->name;
               $balance = 0;
               /**check if  the invoice item is to be  paid  from an  non refundable or refunable account  */
              if($invoice->description == "establishment" || $invoice->description =="spoc" || $invoice->description=="contract")
              {
                  /**
                   * get account number  based on  invoice item and currency used
                   */
              
                $accountnumber=env('LOCAL_NON_REFUNDABLE');
                if($currency !=='ZWL'){         
                   $accountnumber=env('FOREIGN_NON_REFUNDABLE');
                }

                /** getting  client internal funds from a non refundable account */

                $balance = $service->myBalance($currency,$accountnumber);
              }
              else{
                $accountnumber=env('LOCAL_REFUNDABLE');
                if($currency !=='ZWL'){         
                   $accountnumber=env('FOREIGN_NON_REFUNDABLE');
                }
                   /** getting client internal funds from a  refundable account  */
                $balance = $service->myrefundabeBalance($currency,$accountnumber);
              }            
           
            return response()->json(['wallet'=>$balance,"due"=>$due,'paid'=>$paid,'accountnumber'=>$accountnumber],200);
              

             

       }else{
           return response()->json(['Fee has already been paid'],405);
       }

  }

  public function pay($id){
    $service = new serviceHelper(); 
     $paynow = new paymentHelper(); 
    /**get the  invoice  */
    $invoice = tender_invoice::whereid($id)->first();
    /** get the amount that was paid  */
    $paid = $service->getPayment($invoice->invoice_number,$invoice->description);
    /**
     * check if the fee is fully paid
     */
     $due = $invoice->cost - $paid;
     
    if($due>0)
    {
         /**
          * if amount paid is less than the amout due get the balance in wallet based on the description 
          */
            $accountnumber = "";
            $currency = $invoice->currency->name;
            $balance = 0;
            /**check if  the invoice item is to be  paid  from an  non refundable or refunable account  */
           if($invoice->description == "establishment" || $invoice->description =="spoc" || $invoice->description=="contract")
           {
               /**
                * get account number  based on  invoice item and currency used
                */
           
             $accountnumber=env('LOCAL_NON_REFUNDABLE');
             if($currency !=='ZWL'){         
                $accountnumber=env('FOREIGN_NON_REFUNDABLE');
             }

             /** getting  client internal funds from a non refundable account */

             $balance = $service->myBalance($currency,$accountnumber);
           }
           else{
             $accountnumber=env('LOCAL_REFUNDABLE');
             if($currency !=='ZWL'){         
                $accountnumber=env('FOREIGN_NON_REFUNDABLE');
             }
                /** getting client internal funds from a  refundable account  */
             $balance = $service->myrefundabeBalance($currency,$accountnumber);
           }   

           $amount = 0;
           $status ='PENDING';
           if($balance > 0){
               if($invoice->description =='bidbond')
               {
                    if($invoice->cost  > $balance){
                        return response()->json(['message'=>'Insufficient Amount in internal wallet. Required amount :'.$invoice->currency->name.$invoice->cost.'  avalable funds : '.$invoice->currency->name.$balance],500);
                    }
               }
               
         
           
            if($due > $balance){
               $amount = $balance;
            }else{
                $amount = $due;
                $status = 'PAID';
            }
        
            $receiptnumber = $paynow->receipt_number();
            receipt::create(['invoicenumber'=>$invoice->invoice_number,
                              'receiptnumber'=>$receiptnumber,
                              'type'=>$invoice->description,
                              'description'=>$invoice->description,
                              'company_id'=>Auth::user()->company->id,
                              'method'=>'internal',
                              'currency'=>$invoice->currency->name,
                              'amount'=>$amount,
                              'user_id'=>Auth::user()->id
                              ]);
             if($status =='PAID')
               {
                   $invoice->status =$status;
                   $invoice->save();
                   if($invoice->description =='bidbond')
                   {
                    $service->saveBid($invoice->invoice_number,$receiptnumber,$invoice->pnotice_id);
                   }
               }

             return response()->json(['message'=>'Successfully made payment'],200);
   
           }else{
            return response()->json(['message'=>'Insufficient amount  in internal wallet please top up'],500);  
           }
        
         return response()->json(['wallet'=>$balance,"due"=>$due,'paid'=>$paid,'accountnumber'=>$accountnumber],200);
           

          

    }else{
        return response()->json(['Fee has already been paid'],405);
    }

  }

  function generate_invoice($id){
      $notice = tender_invoice::where(['pnotice_id'=>$id,'company_id'=>Auth::user()->company->id])->first();
      $paynow = new paymentHelper();
      $invoice_number ="";
      if(!is_null($notice)){
         $invoice_number = $notice->invoice_number;
      }else{
           $invoice_number = $paynow->invoice_number();
      }

       return $invoice_number;
  }

  
}
