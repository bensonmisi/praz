<?php

namespace App\Listeners;

use App\Events\paymentEvent;
use App\Notifications\paymentNotication;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;

class paymentNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  paymentEvent  $event
     * @return void
     */
    public function handle(paymentEvent $event)
    {
       
         Notification::send($event->users,new paymentNotication($event->info));
    }
}
