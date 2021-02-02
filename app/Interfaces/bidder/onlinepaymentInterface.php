<?php
namespace App\Interfaces\bidder;

interface onlinepaymentInterface {

    public function initiate($company);

    public function check($company);
}