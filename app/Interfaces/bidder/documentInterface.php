<?php
namespace App\Interfaces\bidder;

use App\Http\Requests\companyDocumentRequest;

interface documentInterface{

    public function updateCompanyDocuments(companyDocumentRequest $request,$company);
}