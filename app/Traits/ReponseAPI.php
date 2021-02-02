<?php
 namespace App\Traits;

trait ResponseAPI{

    public function coreResponse($message,$data=null,$statusCode){
     return response()->json(["message"=>$message,"data"=>$data],$statusCode);
    }

    public function success($message,$data){
        return $this->coreResponse($message,$data,200);
    }

    public function error($message,$statusCode){
        return $this->coreResponse($message,null,$statusCode);
    }
}