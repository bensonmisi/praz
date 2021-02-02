<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
class User extends Authenticatable
{
    use Notifiable,HasApiTokens;

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
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function company(){
        return $this->hasOne('App\company','id','company_id');
    }

    public function permissions(){
        return $this->hasMany('App\user_permission','user_id','id');
    }
    public function setPasswordAttribute($value){
        $this->attributes['password']= bcrypt($value);
    }

    public function generate_token(){ 
        $tokenData = $this->createToken('Personal Access Token',['bidder']);    
        if($this->role=='entity')  {
            $tokenData = $this->createToken('Personal Access Token',['entity']);
        }  
        return $tokenData;
 
    }

    public function formate(){
        return[
            "email"=>$this->email,
            "name"=>$this->name,
            "surname"=>$this->surname,
            "company"=>$this->company->name,
            "regnumber"=>$this->company->regnumber
        ];
    }
}
