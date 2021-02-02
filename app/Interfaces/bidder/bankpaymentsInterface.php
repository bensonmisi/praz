<?php

namespace App\Interfaces\bidder;

use App\Http\Requests\claimreferenceRequest;
use App\Http\Requests\uploadProofRequest;
use App\Http\Requests\verifyRequest;

interface bankpaymentsInterface {
    public function getBalance($currency,$company);

    public function getlist($company);
    
    public function claimReference(claimreferenceRequest $request,$company);

    public function uploadProof(uploadProofRequest $request,$company);

    public function registration($company);

    public function  processAwaiting($company,$invoice_number);

    public function verifyReference($company,verifyRequest $request);
}