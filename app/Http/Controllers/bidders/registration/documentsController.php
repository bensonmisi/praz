<?php

namespace App\Http\Controllers\bidders\registration;

use App\company;
use App\Helpers\generalHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\companyDocumentRequest;
use App\Interfaces\bidder\documentInterface;
use Illuminate\Http\Request;

class documentsController extends Controller
{
    private $document;
    private $helper;
    public function __construct(documentInterface $document,generalHelpers $helper)
    {
        $this->document = $document; 
        $this->helper = $helper;
    }
   public function index(){
       $company = $this->helper->getCompany();
    return $this->document->getDocuments($company);
   }
   public function upload(companyDocumentRequest $request){
    $company = $this->helper->getCompanyById(); 
    return $this->document->updateCompanyDocuments($request,$company);
  }
}
