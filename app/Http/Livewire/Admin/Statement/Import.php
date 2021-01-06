<?php

namespace App\Http\Livewire\Admin\Statement;

use App\Imports\StatementImport;
use Livewire\Component;
use Livewire\WithFileUploads;
use Maatwebsite\Excel\Facades\Excel;

class Import extends Component
{
    use WithFileUploads;
    public $document;

    public function save(){   
      $filename =rand(10,100).'.csv';
      $this->document->store('statements');
      $excel = Excel::import(new StatementImport, storage_path().'/statements/'.$filename);
      dd($excel);
    }
    public function render()
    {
        return view('livewire.admin.statement.import');
    } 
}
