<?php
namespace App\Interfaces\bidder;

interface onlinepaymentInterface {

    public function initiate($company);

    public function check($company);

    public function getAll($company);

    public function check_by_id($id,$company);
}