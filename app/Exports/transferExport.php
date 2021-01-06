<?php

namespace App\Exports;

use App\banktransactions;
use Maatwebsite\Excel\Concerns\FromCollection;

class transferExport implements FromCollection
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
       return  banktransactions::wherebetween('created_at',[$this->startdate,$this->enddate])->get();
   }
}
