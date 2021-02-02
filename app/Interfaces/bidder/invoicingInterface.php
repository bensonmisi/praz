<?php
namespace App\Interfaces\bidder;

use App\Http\Requests\addInvoiceRequest;

interface invoicingInterface{
    public function getInvoice($company);

    public function getInvoices($company);

    public function addItem(addInvoiceRequest $request,$company);

    public function removeItem($id,$company);

    public function downloadInvoice($inv);
}