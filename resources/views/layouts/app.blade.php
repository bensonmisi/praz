<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>PRAZ</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('/css/fonts/css/font-awesome.min.css ') }}" rel="stylesheet">
        <script src="{{ asset('js/app.js') }}" defer></script>
        
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
                        
                       <!--    <livewire:notifications/>
                          @if(Auth::User()->type==='SUPPLIER')
                          <livewire:nonrefundable/>
                          @endif -->
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
            
            <ul class=" text-gray-100">
            @if(Auth::User()->type==='SUPPLIER')
                <li class="py-5 px-2  border-b border-solid border-gray-200 hover:bg-green-500 flex justify-start items-center">
           <i class="fa fa-dashboard mr-1"></i> <a href="{{route('home')}}" class="block"><span class="invisible sm:visible">Dashboard</span></a>
                </li>
                <li class="py-5 px-2  border-b border-solid border-gray-200 hover:bg-green-500 flex justify-start items-center">
                  <i class="fa fa-money mr-1"></i>  <a href="{{route('payments')}}" class="block"><span class="invisible sm:visible">Payments</span></a>
                </li>
                <li class="py-5 px-2  border-b border-solid border-gray-200 hover:bg-green-500 flex justify-start items-center">
                <i class="fa fa-file-text-o mr-1"></i> <a href="{{route('invoices')}}" class="block"><span class="invisible sm:visible">Invoices</span></a>
                </li>
                <li class="py-5 px-2  border-b border-solid border-gray-200 hover:bg-green-500 flex justify-start items-center">
                <i class="fa fa-bank mr-1"></i><a href="{{route('transfers')}}" class="block"><span class="invisible sm:visible">Payments</span></a>
                </li>
                <li class="py-5 px-2  border-b border-solid border-gray-200 hover:bg-green-500 flex justify-start items-center">
                <i class="fa fa-folder mr-1"></i>
                <a href="{{route('documents')}}" class="block"><span class="invisible sm:visible">Documents</span></a>
                </li>
                <li class="py-5 px-2  border-b border-solid border-gray-200 hover:bg-green-500 flex justify-start items-center">
                   <i class="fa fa-users mr-1"></i>
                  <a href="{{route('users')}}" class="block"><span class="invisible sm:visible">Users</span></a>
                </li>
                <li class="py-5 px-2  border-b border-solid border-gray-200 hover:bg-green-500 flex justify-start items-center">
                <i class="fa fa-bullhorn mr-1"></i>
            <a href="{{route('tenderlist')}}" cclass="block"><span class="invisible sm:visible">Procurement Notices</span> </a>
                </li>
                <li class="py-5 px-2  border-b border-solid border-gray-200 hover:bg-green-500 flex justify-start items-center">
                <i class="fa fa-handshake-o mr-1"></i>
                <a href="{{route('awardlist')}}" class="block"><span class="invisible sm:visible">Award Notices</span></a>
                </li>
                <li class="py-5 px-2  border-b border-solid border-gray-200 hover:bg-green-500 flex justify-start items-center">
                <i class="fa fa-dollar mr-1"></i>
                <a href="{{route('bidbonds')}}" class="block"><span class="invisible sm:visible">My BidBonds</span></a>
                </li>
                @else
                <a href="{{route('entity')}}" class="py-5 px-2  border-b border-solid border-gray-200 hover:bg-green-500 flex justify-start items-center ">Dashboard</a>
        <a href="{{route('tenders')}}" class="py-5 px-2  border-b border-solid border-gray-200 hover:bg-green-500 flex justify-start items-center">Tenders</a>
        <a href="{{route('awards')}}" class="py-5 px-2  border-b border-solid border-gray-200 hover:bg-green-500 flex justify-start items-center">Award Notices</a>
        <a href="{{route('plans')}}" class="py-5 px-2  border-b border-solid border-gray-200 hover:bg-green-500 flex justify-start items-center">Procurement Plans</a>
        <a href="{{route('budgets.index')}}" class="py-5 px-2  border-b border-solid border-gray-200 hover:bg-green-500 flex justify-start items-center">Budgets</a>
        <a href="{{route('returns')}}" class="py-5 px-2  border-b border-solid border-gray-200 hover:bg-green-500 flex justify-start items-center">Procurement Returns</a>
                @endif
             </ul>
            
            </div>
            <div class="w-full h-screen bg-gray-100">
            @yield('content')
            </div>
        </div>
        </div>
        @livewireScripts
    </body>

</html>

