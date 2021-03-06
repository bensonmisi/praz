<?php 

namespace App\Interfaces\bidder;

use App\company;
use App\company_contacts;
use App\company_documents;
use App\Events\messageActioned;
use App\Helpers\generalHelpers;
use App\Http\Requests\changeRequest;
use App\Http\Requests\companyDocumentRequest;
use App\Http\Requests\companyPofileRequest;
use App\Http\Requests\userPofileRequest;
use App\Interfaces\generalInterface;
use App\messages;
use App\supplier;
use App\Traits\ResponseAPI;
use App\User;

class profileRepository implements profileInterface{
  
     use ResponseAPI;
    private $helper;
    private $general;
     public function __construct(generalHelpers $helper, generalInterface $general)
     {
      $this->helper = $helper; 
      $this->general = $general;
     }

    public function updateUserProfile(userPofileRequest $request,$user){
       $user = User::whereid($user)->first();
       $user->name = $request->name;
       $user->surname = $request->surname;
       $user->phone = $request->phone;
       $user->email = $request->email;
       $user->password = $request->password;
       $user->save();
       return $this->success("Successfully Update User Profile",$user);
    }

    public function updateCompanyProfile(companyPofileRequest $request,$company){
        $locality = 'local';
        if(strtoupper($request->country) !='ZIMBABWE'){
              $locality ="foreign";
        }
       
          $company = company::whereid($company)->first();
          $company->city = $request->city;
          $company->country = $request->country;
          $company->accounttype_id = $request->accounttype;
          $company->locality = $locality;
          $company->save();
          company_contacts::updateOrCreate(['company_id'=>$company->id],['company_id'=>$company->id,'phones'=>$request->phone,'emails'=>$request->email,'address'=>$request->address]);
          $company = $company->formate();
          $data = compact('company');

          return $this->success('Successfully Updated Account Profile',$data);
  
    }

    public function changeCategory(changeRequest $request, $company)
    {
          $registration  =  supplier::where(['company_id'=>$company,'id'=>$request->id])->first();

          if(!is_null($registration)){
               if((int)$registration->printed == 0)
               {
                    $registration->category_id = $request->category;
                    $request->expire_year = $request->regyear;
                    $registration->save();
                     $data = $this->general->getRegistrations($company);
                     return $this->success('Category successfully changed',$data);
               }else{
                  return $this->error("Certificate for current category already downloaded therefore cannot be changed",500);     
               }
          }else{
              return $this->error("Registration not found",500);   
          }
    }

   
}