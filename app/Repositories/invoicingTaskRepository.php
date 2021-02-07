<?php

namespace App\Repositories;

use App\Interfaces\administrator\invoicingTaskInterface;
use App\online_invoice;
use App\operationtask_user;
use App\operationtasks;
use App\Traits\ResponseAPI;

class invoicingTaskRepository implements invoicingTaskInterface{

    use ResponseAPI;
    public function getTasks()
    {
        $invoices = online_invoice::with('company','assigned.users.user')->wherestatus('AWAITING')->orderby('id','desc')->get();
        $grouped = $invoices->groupby('company_id');
        $array = [];
         foreach ($grouped as $key => $value) {
            $total = $value->sum('cost');
            $currency = $value[0]->currency->name;
            $companyname = $value[0]->company->name;
            $invoice_number = $value[0]->invoice_number;
            $year = $value[0]->year;
            $status = $value[0]->status;
            $assigned = $value[0]->assigned;
            $date = $value[0]->created_at->diffForHumans();
           $array[]=array("date"=>$date,"id"=>$key,'invoice_number'=>$invoice_number,"name"=>$companyname,"currency"=>$currency,'status'=>$status,'year'=>$year,"cost"=>$total,'assigned'=>$assigned);
         } 

         return $this->success("Success",$array);
    }

  

    public function showTask($companyid)
    {
        $invoices = online_invoice::with('receipts','rtgs','category','company','currency','transfers.transaction.company')->wherestatus('AWAITING')->wherecompany_id($companyid)->orderby('id','desc')->get();
         $grouped = $invoices->groupby('invoice_number');
         $array = [];
          foreach ($grouped as $key => $value) {
              $due = $value->sum('cost') ;
              $currency = $value[0]->currency->name;
              $companyname = $value[0]->company->name;
              $year = $value[0]->year;
              $paid = $value[0]->receipts->sum('amount');
            $array[]=array("invoice_number"=>$key,'year'=>$year,"name"=>$companyname,"currency"=>$currency,"cost"=>$due,"paid"=>$paid,"data"=>$value);
          }

          return $this->success('SUCCESS',$array);
 
    }

    public function checkTask($companyid){
      $invoices = online_invoice::wherecompany_id($companyid)->wherestatus('AWAITING')->get();

      if(count($invoices)==0){
        $task= operationtasks::wherecompany_id($companyid)->whereaction('INVOICE_APPROVAL')->first();
        $task->status ="ACTIONED";
        $task->save();
        $user = operationtask_user::whereoperationtask_id($task->id)->first();
        $user->status="ACTIONED";
        $user->save();

      }
    }

    public function getInvoice($invoicenumber){
      $invoices = online_invoice::with('receipts','rtgs','category','company','currency','transfers.transaction.company')->wherestatus('AWAITING')->whereinvoice_number($invoicenumber)->orderby('id','desc')->get();
      return $this->success('SUCCESS',$invoices);
    }

}