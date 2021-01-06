<div wire:poll.60000ms>
<li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fas fa-bell"></i>
                          <span class="badge badge-danger badge-counter">{{count(Auth::user()->unreadNotifications)}}</span>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                          @forelse(Auth::user()->unreadNotifications as $notification)
                            <a class="dropdown-item" href="{{url($notification->data['data']['url'])}}">
                            <h5>{{$notification->data['data']['status']}}</h5>
                             <small>{{$notification->data['data']['message']}}</small><br/>
                             <small>{{$notification->created_at->diffForHumans()}}</small>
                            </a>
                            <div class="dropdown-divider"></div>
                          @empty
                          <a class="dropdown-item text-center text-danger" href="#">No Notifications</a>
                          @endforelse
                          
                          </div>
                        </li>
</div>