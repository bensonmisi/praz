<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>PRAZ</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('/css/fonts/css/font-awesome.min.css ') }}" rel="stylesheet">
        <script src="{{ asset('js/app.js') }}" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <livewire:styles>
    </head>
    <body class="bg-gray-100 font-sans">
        <div x-data="{isOpen:true}">
        <nav class="bg-white">
            <div class="p-1">
            <div class="flex justify-between items-center">
                     <div class="flex">
                     <a href="{{route('welcome')}}"><img class="h-10 md:h-20 object-contain sm:object-cover md:object-fill lg:object-none xl:object-scale-down" src="/img/logo.png" alt="PRAZ"/></a>          
                     <button class=" rounded-sm px-2 py-1 ml-5  focus:outline-none" @click="isOpen=!isOpen"><i class="fa fa-bars text-gray-600"></i></button>
                    </div>
                       
                      <div class="flex justify-items-end items-center">
                        
                          <livewire:notifications/>
                          @if(Auth::User()->type==='SUPPLIER')
                          <livewire:nonrefundable/>
                          @endif
                        <div x-data="{ isSettings:false }"class="relative">
                        <button @click="isSettings = !isSettings" class=" text-gray-700 border-b-2 py-8 border-solid border-transparent hover:text-green-700 hover:border-green-700 flex justify-between items-center flex-wrap focus:outline-none"><span class="mr-2">{{Auth::user()->name}} {{Auth::user()->surname}}</span><i class="fa fa-angle-down"></i></button>
                        <ul 
                            x-show="isSettings "  
                            @click.away = "isSettings = false"
                            class=" absolute font-normal bg-white shadow overflow-hidden rounded w-40 border mt-1 py-1 right-0 z-20">
                            <li>
                                <a href="#" class="flex items-center px-3 py-3 hover:bg-gray-300">
                                    <i class="fa fa-cogs mr-2"></i> Settings
                                </a>
                            </li>
                            <li>
                                <a href="{{ route('logout') }}" class="flex items-center px-3 py-3 hover:bg-gray-300">
                                    <i class="fa fa-sign-out mr-2"></i> Logout
                                </a>
                            </li>
                        </ul>
                        </div>

                      </div>


            </div>

            </div>
        </nav>
        <div class="flex justify-start">
        <div x-show="isOpen" class="top-0 left-0  border border-right w-1/6 bg-green-600 h-screen">
            
         
            <a href="{{route('admin.home')}}" class="block"><span class="invisible sm:visible py-5 px-2  border-b border-solid border-gray-200 text-white hover:bg-green-500 flex justify-start items-center"><i class="fa fa-dashboard mr-1"></i> Dashboard</span></a>
            @forelse( Auth::guard('admin')->user()->role->modules as $mod)
            <div x-data="{show:false}">
            <button class="w-full invisible bg-green-700  sm:visible py-5 px-2  border-b border-solid border-gray-200 text-white hover:bg-green-500 flex justify-start items-center focus:border-none" @click="show=!show"><i class="{{$mod->icon}} mr-1"></i><span>{{$mod->name}}</span></button>
              <div x-show="show">
              @forelse($mod->submodules as $sub)
                  <a href="{{route($sub->url)}}" class="block px-5 py-5 bg-blue-700 border-b-2">
                      <div class="flex justify-start items-center text-white">
                          <i class="{{$sub->icon}} mr-2"></i>
                          <span>{{$sub->name}}</span>
                      </div>
                  </a>
                  @empty

              @endforelse
              </div>
           </div>
              @empty

            @endforelse
               
       
            
            </div>
            <div class="w-full h-screen bg-gray-100">
            @yield('content')
            </div>
        </div>
        </div>
        @livewireScripts
    </body>

</html>

