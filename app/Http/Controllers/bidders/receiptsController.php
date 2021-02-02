<?php

namespace App\Http\Controllers\bidders;

use App\Helpers\generalHelpers;
use App\Http\Controllers\Controller;
use App\Interfaces\bidder\receiptInterface;

class receiptsController extends Controller
{
    private $receipt;
    private $helper;
    public function __construct(receiptInterface $receipt,generalHelpers $helper)
    {
        $this->receipt = $receipt;
        $this->helper = $helper;
    }

     public function index(){
          return $this->receipt->getReceipts($this->helper->getCompany());
   
     }
     public function download($rpt){
      return $this->receipt->downloadReceipt($rpt);
    }
}
