<?php

//use Paynow\Payments\Paynow;

use App\invoicenumber;
use App\receiptnumber;
use Carbon\Carbon;
use Illuminate\Support\Env;
use Paynow\Payments\Paynow;

//require_once '../vendor/autoload.php';

class paymentHelper {
public function mobileTransaction($mobile,$mode,$amount,$inv,$email){
   $paynow =new Paynow(Env('INTEGRATION_ID'),Env('INTEGRATION_KEY'),'http://127.0.0.1:8000/paynow/mobile','http://127.0.0.1:8000/paynow/mobile');
   $payment = $paynow->createPayment($inv,$email);
   $payment->add($inv,$amount);
   $response = $paynow->sendMobile($payment,$mobile,$mode);
    return $response;
 }

 public function checkTransaction($pollUrl){
   $paynow =new Paynow(Env('INTEGRATION_ID'),Env('INTEGRATION_KEY'),'http://127.0.0.1:8000/paynow/mobile','http://127.0.0.1:8000/paynow/mobile');
    $status = $paynow->pollTransaction($pollUrl);
    return $status;
 }

 public function paynowTransaction($inv,$email,$amount){
   $paynow =new Paynow(Env('INTEGRATION_ID'),Env('INTEGRATION_KEY'),Env('APP_URL').'/paynow/return/'.$inv,Env('APP_URL').'/paynow/return/'.$inv);
   $payment  = $paynow->createPayment($inv,$email);
   $payment->add($inv,$amount);
   $response = $paynow->send($payment);
   return $response;

 }

 public function receipt_number(){
    $number = receiptnumber::first();
     $receipt = 'rpt'.Carbon::now()->year.''.Carbon::now()->month.''.Carbon::now()->day.''.$number->receipt;
     $number->receipt = $number->receipt+1;
     $number->save();
     return $receipt;
 }
 public function invoice_number(){
   $number = invoicenumber::first();
    $invoice= 'inv'.Carbon::now()->year.''.Carbon::now()->month.''.Carbon::now()->day.''.$number->invoice;
    $number->invoice = $number->invoice+1;
    $number->save();
    return $invoice;
}
}