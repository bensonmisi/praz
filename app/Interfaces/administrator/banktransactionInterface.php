<?php

namespace App\Interfaces\administrator;

use App\Http\Requests\reversalRequest;

interface banktransactionInterface{
    public function search($reference);

    public function claim($bank_id,$invoicenumber);

    public function reverse(reversalRequest $request);
}