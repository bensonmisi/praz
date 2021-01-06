<?php

namespace App\Imports;

use App\category;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToModel;

class categoryImport implements ToModel
{
    /**
    * @param Collection $collection
    */
    public function model(array $row)
    {
      
         for ($i=0; $i <count($row) ; $i++) { 
            $code = $row[0];
            $name = $row[1];
            Log::info($code.'-----'.$name);
             /*if(!is_null($code))
             {
            $category = category::wherecode($code)->first();
             if(!is_null($category)){
             $category->name = $name;
             }else{
               category::create(['code'=>$code,'name'=>$name]);
             }
            }*/
         }
         /*  $code = $row[0];
          $name = $row[1];
          $category = category::wherecode($code)->first();
           if(!is_null($category)){
           $category->name = $name;
           }else{
             category::create(['code'=>$code,'name'=>$name]);
           } */
    }
}
