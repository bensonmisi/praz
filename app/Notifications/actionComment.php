<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class actionComment extends Notification implements ShouldQueue
{
    use Queueable;
    public $id;
    public $name;
    public $comment;
    public function __construct($id,$name,$comment)
    {
         $this->id = $id;
         $this->name = $name;
         $this->comment = $comment;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail','database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->subject($this->name.'RTGS REQUEST ACTIONED')
                    ->line('The following company has actioned your request')
                    ->line($this->name)
                    ->line($this->comment)
                    ->action('View RTGS', url('/administrator/Rtgs/Show/'.$this->id))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toDatabase($notifiable)
    {
        return [
            'data'=>$this->comment.'ACTIONED',
            'notifiable_type'=>'success',
            'url'=>'/administrator/Rtgs/Show/'.$this->id
        ];
    }
}
