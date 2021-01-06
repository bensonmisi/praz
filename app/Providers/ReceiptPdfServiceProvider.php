<?php

namespace App\Providers;

use App\Services\ReceiptPdf;
use Illuminate\Support\ServiceProvider;

class ReceiptPdfServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */

    protected $defer=true;
    public function register()
    {
        $this->app->bind(ReceiptPdf::class,function($app){
            return new ReceiptPdf($app['config']['dompdf']);
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        return [ReceiptPdf::class];
    }
}
