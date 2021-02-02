<?php

namespace App\Listeners;

use App\Events\Passwordreset;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Notifications\resetlink;
class SendEmailPasswordReset
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
     * @param  Passwordreset  $event
     * @return void
     */
    public function handle(Passwordreset $event)
    {
        Notification::send($event->use, new resetlink($event->token));
    }
}
