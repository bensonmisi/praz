<?php

namespace App\Http\Middleware;

use App\roles;
use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class checkPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /* $route =  Route::currentRouteName();
        $role = roles::whereid(Auth::guard('admin')->user()->role->id)->with(['permissions'=>function($query)use($route){
            $query->where('name','=',$route);
        }])->first();
        if(count($role->permissions)>0)
          {
                return $next($request);
          }else{
            return response()->json(['message'=>'Access denied you do not have permission to access page'],406);       
        }
        */
        return $next($request);
    } 


}
