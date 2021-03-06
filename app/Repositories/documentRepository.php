<?php
namespace App\Repositories;

use App\company;
use App\company_documents;
use App\documents;
use App\Http\Requests\companyDocumentRequest;
use App\Interfaces\bidder\documentInterface;
use App\Traits\ResponseAPI;
use App\messages;
use App\Events\messageActioned;
use App\Helpers\generalHelpers;

class documentRepository implements documentInterface{
    use ResponseAPI;
    private $helper;
    public function __construct(generalHelpers $helper )
    {
     $this->helper = $helper; 
    }

    public function getDocuments($company)
    {
        $documents = documents::whereaccounttype_id($company->accounttype_id)->wherelocality($company->locality)->with(['company'=>function($query)use($company){
            $query->wherecompany_id($company->id);
        }])->get()->map(function($document){
            return[
                "id"=>$document->id,
                "name"=>$document->name,
                "uploaded"=> !is_null($document->company) ? true : false,
                "status"=> !is_null($document->company) ? $document->company->status : ''
            ];
        });

        return $this->success("SUCCESS",$documents);
        
    }
    public function updateCompanyDocuments(companyDocumentRequest $request, $company)
    {
      $path =$request->file('filename')->store('documents','my_files');
      company_documents::updateOrCreate(['document_id'=>$request->document,'company_id'=>$company],['document_id'=>$request->document,'company_id'=>$company,'path'=>$path]);
       $company = company::whereid($company)->first();
       $company = $company->formate();
       $data =  $this->helper->getCompanyDocuments($company);

       /**
        * check if the is a  notification  that required notification
        */

        $message = messages::where(['resource'=>'documents','resource_id'=>$request->document,'company_id'=>$company])->first();
        if(!is_null($message)){
            event(new messageActioned($message->message,$message->company,$message->administrator));  
        }
       return $this->success("Successfully Uploaded Company Documents",$data);
    }
}