<?php

namespace App\Exports;

use App\supplier;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromCollection;

class gazzateExport implements FromCollection
{
    protected $id;

    public function __construct($id)
    {
        $this->id = $id;
    }
    public function collection()
    {
          $suppliers = supplier::with('company.contacts','category')
                              ->whereexpire_year(Carbon::now()->year)                              
                              ->whereNull('gazzate_id')                              
                              ->get()
                              ->map(function($supplier){
                               $supplier->gazzate_id=$this->id;
                               $supplier->save();
                             return[
                                 "name"=>!is_null($supplier->company) ? $supplier->company->name : 'NULL',
                                 "code"=>!is_null($supplier->category) ? $supplier->category->code : 'NULL',
                                 "address"=>!is_null($supplier->company->contacts) ? $supplier->company->contacts->address : 'NULL',
                                 "emails"=>!is_null($supplier->company->contacts) ? $supplier->company->contacts->emails : 'NULL',
                                 "phones"=>!is_null($supplier->company->contacts) ? $supplier->company->contacts->phones : 'NULL',
                                 "city"=>!is_null($supplier->company) ? $supplier->company->city : 'NULL',
                            
                             ];
                            
                         });

         return $suppliers;
    }
}
