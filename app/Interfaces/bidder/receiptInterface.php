<?php
namespace App\Interfaces\bidder;

interface receiptInterface{
    public function getReceipts($company);

    public function downloadReceipt($receipt);
}