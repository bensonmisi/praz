<?php

namespace App\Providers;

use App\Interfaces\bidder\AuthInterface;
use App\Interfaces\bidder\bankpaymentsInterface;
use App\Interfaces\bidder\documentInterface;
use App\Interfaces\bidder\invoicingInterface;
use App\Interfaces\bidder\mobilePaymentsInterface;
use App\Interfaces\bidder\onlinepaymentInterface;
use App\Interfaces\bidder\profileInterface;
use App\Interfaces\bidder\profileRepository;
use App\Interfaces\generalInterface;
use App\Interfaces\welcomeInterface;
use App\Repositories\AuthRepository;
use App\Repositories\bankpaymentsRepository;
use App\Repositories\documentRepository;
use App\Repositories\generalRepository;
use App\Repositories\invoicingRepository;
use App\Repositories\mobilePaymentRepository;
use App\Repositories\onlinepaymentRepository;
use App\Repositories\welcomeRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(generalInterface::class,generalRepository::class);
        $this->app->bind(profileInterface::class,profileRepository::class);
        $this->app->bind(AuthInterface::class,AuthRepository::class);
        $this->app->bind(documentInterface::class,documentRepository::class);
        $this->app->bind(invoicingInterface::class,invoicingRepository::class);
        $this->app->bind(mobilePaymentsInterface::class,mobilePaymentRepository::class);
        $this->app->bind(onlinepaymentInterface::class,onlinepaymentRepository::class);
        $this->app->bind(bankpaymentsInterface::class,bankpaymentsRepository::class);
        $this->app->bind(welcomeInterface::class,welcomeRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
      
    }
}
