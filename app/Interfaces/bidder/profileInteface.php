<?php 

namespace App\Interfaces\bidder;

use App\Http\Requests\changeRequest;
use App\Http\Requests\companyDocumentRequest;
use App\Http\Requests\companyPofileRequest;
use App\Http\Requests\contactsRequest;
use App\Http\Requests\userPofileRequest;

interface  profileInterface{
    
     
     public function updateUserProfile(userPofileRequest $request,$user);

     public function updateCompanyProfile(companyPofileRequest $request,$company);

     public function changeCategory(changeRequest $request,$company);
}