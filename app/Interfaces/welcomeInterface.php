<?php
namespace App\Interfaces;

use App\Http\Requests\searchRequest;

interface welcomeInterface {

    public function searchCertificate(searchRequest $request);

    public function getRegisteredSuppliers();

     public function download($category);

    
}