<div wire:poll.60000ms>
<div class="card mt-2">
               <div class="card-header"><h5>Notifications <button wire:click='read' class="btn btn-sm btn-primary float-right">Mark As Read</button></h5></div>
               <div class="list-group list-group-flush">
               @forelse(Auth::user()->unreadNotifications as $notification)
                <a href="{{url($notification->data['data']['url'])}}" class="list-group-item list-group-item-action">                    
                    <h5 >{{$notification->data['data']['status']}}</h5>                  
                   <small>{{$notification->data['data']['message']}}</small><br/>
                    <small>{{$notification->created_at->diffForHumans()}}</small>                  
                  
                </a>
                @empty

                <p class="text-danger text-center">No Notifications</p>
                @endforelse
               </div>
</div>
</div>
