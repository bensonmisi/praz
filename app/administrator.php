<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
class administrator extends Authenticatable
{
    use HasApiTokens,Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded=[];

     /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */

    public  function role()
    {
        return $this->hasOne(roles::class,'id','role_id');
    }
    
    protected $hidden = [
        'password', 'remember_token',
    ];
}
