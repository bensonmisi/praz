<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class activation extends Notification implements ShouldQueue
{
    use Queueable;
    protected $email;
    protected $code;
    public function __construct($email,$code)
    {
        $this->email = $email;
        $this->code = $code;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
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
        ->greeting('Dear Sir/Madam')
       ->subject('NEW PRAZ PORTAL ACTIVATION DETAILS ')
        ->line('In an effort to simplify conducting business with PRAZ, we have developed an online portal that allows suppliers to transcation from anywhere in the world. Below are the functions current available on the portal')
        ->line("1. You can now register for any PRAZ category online and  be able to download PRAZ certificate online instantly")
        ->line("2. Once registered to any category  you will receive email notifications of  any procurement notice(TENDERs,RFQs etc) posted by Procurement entities on our portal")
        ->line("3. Make payments using PAYNOW payment gateway or direct deposit into our CBZ account")
        ->line("4. Once you successfully activate your PRAZ account you will automatically be assigned a PRAZ NUMBER which will be used as your PRAZ identification number")
        ->line('BELOW ARE YOU ACCOUNT ACTIVATE DETAILS')
        ->line('ACTIVATION EMAIL: '.$this->email)
        ->line('ACTIVATION CODE: '.$this->code)
        ->action('Activation Link', url('/activation'))
        ->line('For any queries regarding the portal please conduct:')
        ->line('BENSON MISI ICT OFFICER  misib@praz.org.zw +263775474661')
        ->line('KILFORD JOMBE ICT OFFICER  jombek@praz.org.zw +263772866945')
        ->line('PLEASE NOTE PRAZ WILL NEVER COMMUNICATE ANY OFFICIAL BUSINESS WITH ANY MAIL BOX EXCEPT OUR OFFICIAL @PRAZ.ORG.ZW');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
