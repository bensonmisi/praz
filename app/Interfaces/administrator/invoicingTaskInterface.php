<?php

namespace App\Interfaces\administrator;

interface invoicingTaskInterface {

    public function getTasks();
    
    public function showTask($companyid);

    public function getInvoice($invoicenumber); 
     
    public function checkTask($companyid);
    
}