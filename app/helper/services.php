<?php

use App\administrator;
use App\banktransactions;
use App\documents;
use App\pcompanyclass;
use App\pestabishmentfee;
use App\pnotice;
use App\pspocfee;
use App\bidbond;
use App\company;
use App\currency;
use App\general_exchange;
use App\Notifications\procurementNotification;
use App\online_invoice;
use App\pawards;
use App\pcontractfee;
use App\pnotice_log;
use App\pthreshold;
use App\receipt;
use App\tender_invoice;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use PhpParser\Node\Expr\Cast\Double;

class serviceHelper{
public function helper_checkDocuments(){

    $company = Auth::user()->company;
    $documents = documents::where(['locality'=>$company->locality,'accounttype_id'=>$company->accounttype_id])
    ->with(['company'=>function($query){
        $query->where('company_id','=',Auth::user()->company->id);
    }])
    ->get();
      $approved = 0;
    foreach ($documents as $doc) {
           if(!is_null($doc->company))
           {
          if($doc->company->status =='APPROVED'){
            $approved++;
          }
        }
    }

    if(count($documents)==$approved){
        return true;
    }
    else{
        return false;
    }

}
public function helper_checkDocuments_admin($id){

  $company =  company::whereid($id)->first();
  if(!is_null($company)){
  $documents = documents::where(['locality'=>$company->locality,'accounttype_id'=>$company->accounttype_id])
  ->with(['company'=>function($query)use($id){
      $query->where('company_id','=',$id);
  }])
  ->get();
    $approved = 0;
  foreach ($documents as $doc) {
           if(!is_null($doc->company))
           {
        if($doc->company->status =='APPROVED'){
          $approved++;
        }
      }
  }

  if(count($documents)==$approved){
      return true;
  }
  else{
      return false;
  }
}
return false;

}

public function  helper_generate_code($id){
  $rand = rand(1000,2000);    
  return "PRAZ-".Carbon::now()->year."-".$rand.'-'.$id;
}

public function  helper_bid_code($id){
  $rand = rand(1000,2000);    
  return "BID-".Carbon::now()->year."-".$rand.'-'.$id;
}

public function clean($string) {
  $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.

  return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
}

public function getSpocFee($id){

  $tender = pnotice::whereid($id)->first();
  if($tender->ptype_id==2)
  {
  $pclass = pcompanyclass::wherecompany_id($tender->company_id)->first();
  if(!is_null($pclass)){
     $threshold = pthreshold::where(['pclass_id'=>$pclass->pclass_id,'pclassification_id'=>$tender->pclassification_id,'locality'=>Auth::user()->company->locality])->first();

     if(!is_null($threshold)){
        if($threshold->value  <= $tender->bidvalue){
          $fee = pspocfee::where(['pthreshold_id'=>$threshold->id,'locality'=>Auth::user()->company->locality])->first();
          if(!is_null($fee)){
            return $fee->value;
          }
          else{
            return 0;
          }
        }
        else{
          return 0;
        }
     }else{
       return 0;
     }
   }
  }
return 0;


}

public function getExchangeRate(){
 $rate =  general_exchange::orderBy('id','desc')->first();
 if(!is_null($rate)){
   return $rate->value;
 }else{
   return 1;
 }
  
}

public function getCurrency(){
  $current ='ZWL';
  if(Auth::user()->company->locality ==='foreign'){
    $current ='USD';
  }
  $data =  currency::wherename($current)->first();
  return $data->id;
}

public function getContractFee($id){

  $award = pawards::whereid($id)->first();
   $fees = pcontractfee::get();
  $new = 0;


   if(count($fees) > 0){
     foreach($fees as $fee){
       if($fee->lower <= $award->value && $fee->upper >= $award->value ){
         $new = $fee->value;
       }
     }

   }

   if($new > 0){
      if(Auth::user()->company->locality ==='foreign'){
        $flat = $new / $this->getExchangeRate();
         return round($flat);
      }
   }
   return $new;




}

public function getEstablishmentFee($id){

  /**
   * 1  get tender details 
   * 2  check bidbond threshold 
   * 3  retrieve  estabilshment fee based on  bidbond threshold 
   */



  $tender = pnotice::whereid($id)->first();
 if($tender->ptype_id==2)
 {
  $fees = pestabishmentfee::wherelocality(Auth::user()->company->locality)->get();
  if(count($fees)>0){
    foreach($fees as $fee){
      if($fee->lower < $tender->bidbond && $tender->bidbond  < $fee->upper && $fee->validity = $tender->period){
         return $fee->value;
      }
    }
  }
}

  return 0;

}
public function getEstablishmentFeeExchange($id){

  /**
   * 1  get tender details 
   * 2  check bidbond threshold 
   * 3  retrieve  estabilshment fee based on  bidbond threshold 
   */



  $tender = pnotice::whereid($id)->first();
 if($tender->ptype_id==2)
 {
  $fees = pestabishmentfee::wherelocality(Auth::user()->company->locality)->get();
  if(count($fees)>0){
    foreach($fees as $fee){
      if($fee->lower < $tender->bidbond && $tender->bidbond  < $fee->upper && $fee->validity = $tender->period){
         $amount = $fee->value/$this->getExchangeRate();
         return $amount;
      }
    }
  }
}

  return 0;

}

public function getPayment($invoice_number,$description){
   return receipt::where(['invoicenumber'=>$invoice_number,'type'=>$description])->sum('amount');
}
public function getSpocFeeExchange($id){

  $tender = pnotice::whereid($id)->first();
  if($tender->ptype_id==2)
  {
  $pclass = pcompanyclass::wherecompany_id($tender->company_id)->first();
  if(!is_null($pclass)){
     $threshold = pthreshold::where(['pclass_id'=>$pclass->pclass_id,'pclassification_id'=>$tender->pclassification_id,'locality'=>Auth::user()->company->locality])->first();

     if(!is_null($threshold)){
        if($threshold->value  <= $tender->bidvalue){
          $fee = pspocfee::where(['pthreshold_id'=>$threshold->id,'locality'=>Auth::user()->company->locality])->first();
          if(!is_null($fee)){
            $amount = $fee->value/$this->getExchangeRate();
              return $amount;
          }
          else{
            return 0;
          }
        }
        else{
          return 0;
        }
     }else{
       return 0;
     }
   }
  }
}

public function saveBid($invoice_number,$receiptnumber,$id){
  $notice = pnotice::whereid($id)->first();
  $close_date = Carbon::parse($notice->close_date)->addDays($notice->period);
  if(!bidbond::where(['invoice_number'=>$invoice_number,'receipt_number'=>$receiptnumber,'pnotice_id'=>$id])->exists())
  {
    bidbond::create(['invoice_number'=>$invoice_number,'company_id'=>Auth::user()->company->id,'receipt_number'=>$receiptnumber,'pnotice_id'=>$id,'code'=>$this->helper_bid_code(Auth::user()->company->id),'expire_date'=>$close_date]);
  }
}

public function get_last_administrator_id(){
  $user = administrator::orderBy('id','desc')->first();
  return $user->id;
}

public function get_total_invoice(){
  return online_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->sum('cost');
}

public function get_total_Paid()
{
    $invoice = online_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->with(['onlinepayments'=>function($query){
        $query->where('status','=','PAID');
    },'rtgs'=>function($query){
            $query->where('status','=','PAID');
    },'internal_payments'])->first();
      $paid = 0;
    if(!is_null($invoice)){
        if(count($invoice->onlinepayments)>0){
         foreach ($invoice->onlinepayments as $key => $value) {
             $paid = $paid+$value->amount; 
         }
        }
        if(count($invoice->internal_payments)>0){
            foreach ($invoice->internal_payments as $key => $value) {
              $paid = $paid+$value->amount;
          }
          }

        if(!is_null($invoice->rtgs)){
            
                $paid = $paid + $invoice->rtgs->amount;
            
        }
    }
    return $paid;
}
public function get_balance(){
/**
 * check if there is a pending invoice   and check  to amount of receipts paid
 */

  $invoice = online_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'PENDING'])->first();
  $paid = 0;

  if(!is_null($invoice))
  {
      if(count($invoice->receipts))
      {
          foreach ($invoice->receipts as $key => $value) {
            $paid = $paid + $value->amount;
          }
      }
    $invoice = $this->get_total_invoice();
    return $invoice-$paid;
  }
  else{
    return $paid;
  }

}

public function myBalance($currency,$account)
{
   $receipts = receipt::where(['company_id'=>Auth::user()->company->id,'method'=>'internal','currency'=>$currency])->where('type','!=','BIDBOND')->sum('amount');
   $bank = banktransactions::where(['customer_number'=>Auth::user()->company->regnumber,'accountnumber'=>$account])->sum('amount');
   return  (int)$bank-(int)$receipts;
}
public function myrefundabeBalance($currency,$account)
{
   $receipts = receipt::where(['company_id'=>Auth::user()->company->id,'method'=>'internal','currency'=>$currency,'type'=>'BIDBOND'])->sum('amount');
   $bank = banktransactions::where(['customer_number'=>Auth::user()->company->regnumber,'accountnumber'=>$account])->sum('amount');
   return  $bank-$receipts;
}

public function broadCast_Notice($id){
  $notice = pnotice::whereid($id)->first();
  $product ="";
  if(count($notice->products)>0){
        foreach ($notice->products as $key => $prod) {
           $product .= "Name:".$prod->name."Quantity".$prod->quantity;
        }
  }
  if(count($notice->category)>0){
    foreach ($notice->category as $key => $value) {
       $suppliers = $value->category->suppliers;
       if(count($suppliers)>0){
           foreach ($suppliers as $key => $supplier) {
                 $company=$supplier->company;
                if(!is_null($company)){
                    $users = $company->users;
                    if(count($users) >0){
                         foreach ($users as $key => $user) {
                          
                          $data =['message'=>'New procurement notice  '.$product,'type'=>'Success','url'=>'/Notice/'.$notice->id];
                            $user->notify( new procurementNotification($data));
                         }
                    }
                }
           }
       }
    }
 }
}

public function notice_log($id,$user,$action,$comment){
  pnotice_log::create(['user_id'=>$user,'pnotice_id'=>$id,'action'=>$action,'comment'=>$comment]);
}

function check_company($currentname,$compare_name)
{
    $cleanname =  preg_replace('/\s+/', '', $currentname);
    $cleanname = str_ireplace('(Private)Limited','',$currentname);
    $cleanname = str_ireplace('P/L','',$currentname);
    $cleanname = str_ireplace('PrivateLimited','',$currentname);
    $cleanname = str_ireplace('pvt ltd','',$currentname);
   
 
    
            //$request_array = str_split(strtoupper($cleanname));
            $db_name = preg_replace('/\s+/', '',$compare_name);
            $db_name = str_ireplace('(Private)Limited','',$compare_name);
            $db_name = str_ireplace('P/L','',$compare_name);
            $db_name = str_ireplace('PrivateLimited','',$compare_name);
            $db_name = str_ireplace('pvt ltd','',$compare_name);
               return $compare = strcasecmp($cleanname,preg_replace('/\s+/', '', $db_name));
              if($compare==0)
                {
                    return true;
                }
                else{
                    return false;
                }
                             
      
    
           
}

function compare_first_words($string1,$string2)
{
    $first_word = explode(' ',trim($string1));
    $secord_word = explode(' ',trim($string2));

   // return $first_word[0]."   ".$secord_word[0];
    return $compare = strcasecmp(strtoupper(substr($first_word[0],0,5)), strtoupper(substr($secord_word[0],0,5)));
   
          

}





}