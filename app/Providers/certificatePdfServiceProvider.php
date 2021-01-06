<?php

namespace App\Providers;

use App\Services\certificatePDF;
use Illuminate\Support\ServiceProvider;

class certificatePdfServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */

     protected $defer = true;
    public function register()
    {
      $this->app->bind(certificatePDF::class,function($app){
          return new certificatePDF($app['config']['dompdf']);
      });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
         return [certificatePDF::class];
    }
}
