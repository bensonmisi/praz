<?php

namespace App\Console\Commands;

use App\banktransactions;
use App\Imports\importstatement as ImportsImportstatement;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Facades\Excel;

class importStatement extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:statement';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'this comment manually imports CSV statement from the bak';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $name = $this->ask("filename");
        $data =  Excel::toArray(new ImportsImportstatement,$name);
        for ($i=0; $i <count($data) ; $i++) { 
            for ($j=0; $j < count($data[$i]) ; $j++) 
            { 
                $description = $data[$i][$j][5];
                $accountnumber = "107".$data[$i][$j][1];
                $date =$data[$i][$j][3];
                $amount = $data[$i][$j][4];
                $referencenumber = $data[$i][$j][6];
                $source_reference = $data[$i][$j][7];
                $currency = $data[$i][$j][2];
                banktransactions::firstOrCreate(['source_reference'=>$source_reference],['bank_id'=>2,'trans_date'=>$date,'referencenumber'=>$referencenumber,'source_reference'=>$source_reference,'amount'=>$amount,'status'=>'PENDING','accountnumber'=>$accountnumber,'currency'=>$currency,'description'=>$description]); 
   
            }
        }
        
    }
}
