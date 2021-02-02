<?php

namespace App\Listeners;

use App\Events\messageActioned;
use App\Notifications\responseMassage;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Notification;

class SendEmailNotification
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
     * @param  messageActioned  $event
     * @return void
     */
    public function handle(messageActioned $event)
    {
        Notification::send($event->administrator,new responseMassage($event->administrator,$event->message,$event->company));
    }
}
