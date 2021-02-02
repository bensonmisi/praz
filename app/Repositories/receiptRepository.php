<?php

namespace App\Repositories;

use App\Interfaces\bidder\receiptInterface;
use App\receipt;
use App\Services\ReceiptPdf;
use App\Traits\ResponseAPI;

class receiptRepository implements receiptInterface{

    private $pdf;
    use ResponseAPI;

    public function __construct(ReceiptPdf $pdf)
    {
         $this->pdf = $pdf;
    }

    public function getReceipts($company)
    {
        $receipts = receipt::wherecompany_id($company->id)->get();
        return $this->success("SUCCESS",$receipts);
    }

    public function downloadReceipt($rpt)
    {
        $receipt = receipt::wherereceiptnumber($rpt)->first();
        return response($this->pdf->generate($rpt), 200)->withHeaders([
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => "{$this->pdf->action()}; filename='receipt-{$receipt->receiptnumber}.pdf'",
        ]);
    }
}
