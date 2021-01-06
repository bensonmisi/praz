<?php

namespace App\Providers;

use App\Services\bidPdf;
use Illuminate\Support\ServiceProvider;

class BidPdfServiceProvider extends ServiceProvider
{
    protected $defer = true;
    public function register()
    {
        $this->app->bind(bidPdf::class,function($app){
            return new bidPdf($app['config']['dompdf']);
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
     return [bidPdf::class];
    }
}
