<?php

namespace App\Providers;

use App\Services\invoicePDF;
use Illuminate\Support\ServiceProvider;
use App\Services\Pdf;

class PdfServiceProvider extends ServiceProvider
{
    protected $defer =true; 
    public function register()
    {
        $this->app->bind(invoicePDF::class,function($app){
        return new invoicePDF($app['config']['dompdf']);
        });

    }

   
    public function boot()
    {
        return[invoicePDF::class];
    }
}
