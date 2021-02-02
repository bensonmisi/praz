<?php
namespace App\Interfaces\bidder;

use App\Http\Requests\companyDocumentRequest;

interface documentInterface{

    public function getDocuments($company);
    public function updateCompanyDocuments(companyDocumentRequest $request,$company);
}