<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
class financeReport implements WithMultipleSheets
{
    use Exportable;
   
     protected $startdate;
     protected $enddate;

     public function __construct($startdate,$enddate)
     {
         $this->startdate = $startdate;
         $this->enddate = $enddate;
     }
    public function sheets(): array
    {
        $sheets = [];
        $sheets[] = new InvoicesExport($this->startdate,$this->enddate);
        $sheets[] = new ReceiptsExport($this->startdate,$this->enddate);
        return $sheets;
    }
}
