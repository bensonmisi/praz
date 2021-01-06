<div x-data="{openNotification:false}" class="relative">
<button class="text-gray-700  py-8  hover:text-green-700  flex justify-between items-center flex-wrap focus:outline-none mr-5" @click='openNotification=!openNotification'><i class="fa fa-bell-o text-red-600 fa-2x"></i><span class="text-xs flex justify-start items-start text-red-500">{{ auth()->user()->unreadNotifications->count() }} </span></button>
<ul 
                      x-show="openNotification" 
                      @click.away = "openNotification= false"
                      class=" absolute font-normal bg-gray-200 shadow overflow-hidden  w-64 border mt-1 right-0 z-20">
                      @foreach(auth()->user()->unreadNotifications as $notification)
                      <li class="bg-white mb-1 mt-0">
                      <a href="{{$notification['data']['url']}}" class="block py-2 px-2 hover:bg-gray-300">                    
                    <h5 >{{$notification['data']['notifiable_type']}}</h5>                  
                   <small>{{$notification['data']['data']}}</small><br/>
                    <small>{{$notification->created_at->diffForHumans()}}</small>                  
                  
                </a>      </li>
                          
                      @endforeach    
    </ul>             
</div>
