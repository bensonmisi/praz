<?php

namespace App\Imports;

use App\banktransactions;
use App\manual_statement;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\ToModel;

class StatementImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        $bank = banktransactions::whererefnumber($row[0])->first();
        if(is_null($bank))
        {
            manual_statement::firstOrCreate(
            ['refnumber'=>$row[0]],
            [ 
            'refnumber'=>$row[0],
            'name'=>$row[1],
            'amount'=>$row[2],
            'currency'=>$row[3],
            'transaction_date'=>$row[4],
            'user_id'=>Auth::guard('admin')->user()->id
            ]);
        }
     
    }
}
