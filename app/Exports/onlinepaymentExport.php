<?php

namespace App\Exports;

use App\onlinepayments;
use Maatwebsite\Excel\Concerns\FromCollection;

class onlinepaymentExport implements FromCollection
{
     protected $startdate;
     protected $enddate;

     public function __construct($startdate,$enddate)
     {
         $this->startdate = $startdate;
         $this->enddate = $enddate;
     }
    public function collection()
    {
        return  onlinepayments::wherebetween('created_at',[$this->startdate,$this->enddate])->wherestatus('PAID')->get();
    }
}
