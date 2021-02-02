<?php 

 namespace App\Interfaces;

 interface generalInterface {
     public function getCategories();

     public function getRegistrations($companyid);

     public function getInvoices($companyid,$args);

     public function getInvoiceTotals($company,$args);

     public  function getRegistrationsYears();

     public function getCompanyProfile($companyid);

     public function getAccountype();

     public function getCurrency();

     public function getCompanyById();

     public function getUserById();

    

 }