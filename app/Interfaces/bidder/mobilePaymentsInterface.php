<?php

 namespace App\Interfaces\bidder;

use App\Http\Requests\mobilePaymentRequest;

interface mobilePaymentsInterface{
     public function initiate(mobilePaymentRequest $request,$company);

     public function confirm($id);
 }