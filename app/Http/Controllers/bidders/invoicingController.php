<?php

namespace App\Http\Controllers\bidders;

use App\Helpers\generalHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\addInvoiceRequest;
use App\Interfaces\bidder\invoicingInterface;
class invoicingController extends Controller
{

     private $invoicing;
     private $helper;
     public function __construct(invoicingInterface $invoicing,generalHelpers $helper)
     {
        $this->invoicing = $invoicing;  
        $this->helper = $helper;   
     }

     public function index(){
       return $this->invoicing->getInvoice($this->helper->getCompanyById());
     }

    public function getAll(){
      return $this->invoicing->getInvoices($this->helper->getCompanyById());
    }
 
    public function add(addInvoiceRequest $request){
      return $this->invoicing->addItem($request,$this->helper->getCompanyById());
    }
    public function download($inv)
     {
      return $this->invoicing->downloadInvoice($inv);  
     }

     public function destroy($id){
       return $this->invoicing->removeItem($id,$this->helper->getCompanyById());
     }




}
