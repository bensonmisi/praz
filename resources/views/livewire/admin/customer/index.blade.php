<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Customers</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class=" py-4 flex justify-between items-center">
           
            <div class="w-full">
            <div class="flex justify-center items-center">
            <div class="w-full px-3 mb-6 md:mb-0">    
                <input class="appearance-none border @error('query') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="query" type="text" wire:model..defer="query" placeholder="Search">
                @error('query')
                    <span class="text-red-600" role="alert">
                    <strong>{{ $message }}</strong>
                    </span>
                @enderror
             </div>
             <div>
             <button class="bg-blue-700 px-2 py-2 text-white rounded-md shadow-md hover:bg-blue-500" wire:click="search">Search</button>
                            
             </div>
            </div>
            </div>
        </div>
        <div wire:loading wire:target="search" class="flex justify-center text-green-600"> Loading....</div>
        @if(count($customers) > 0)
        <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 border font-semibold text-left">Reg</th>
                            <th class="px-3 py-3 border font-semibold text-left">Name</th>  
                            <th class="px-3 py-3 border font-semibold text-left">Country</th>                      
                            <th class="px-3 py-3 border font-semibold text-left">City</th>
                            <th class="px-3 py-3 border font-semibold">
 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    @forelse($customers as $cust)
                           
                            <tr>
                            <td class="px-3 py-3 border text-left">{{$cust->regnumber}}</td>
                            <td class="px-3 py-3 border text-left">{{$cust->name}}</td>
                            <td class="px-3 py-3 border text-left">{{$cust->country}}</td>
                            <td class="px-3 py-3 border text-left">{{$cust->city}}</td>
                            <td class="px-3 py-3 border text-center">
                                   <a href="{{route('can_show_customer',$cust->id)}}" class="bg-blue-700 px-2 py-2 text-white rounded-md shadow-md hover:bg-blue-500">View</a>
                          
                            </td>
                            </tr>
                        
                     
                        @empty
                        <tr><td colspan="7" class="text-danger text-center">No Transactions Found</td></tr>
                        @endforelse
                    </tbody>
                </table>
                @endif

                @if(count($users)>0)

                <table class="table-auto w-full">
                    <thead>
                        <tr>
                          <th class="px-3 py-3 border font-semibold text-left">Name</th>
                          <th class="px-3 py-3 border font-semibold text-left">Surname</th>
                            <th class="px-3 py-3 border font-semibold text-left">Reg</th>
                            <th class="px-3 py-3 border font-semibold text-left">Name</th>  
                            <th class="px-3 py-3 border font-semibold text-left">Country</th>                      
                            <th class="px-3 py-3 border font-semibold text-left">City</th>
                            <th class="px-3 py-3 border font-semibold">
 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    @forelse($users as $user)
                           
                            <tr>
                            <td class="px-3 py-3 border text-left">{{$user->name}}</td>
                            <td class="px-3 py-3 border text-left">{{$user->surname}}</td>
                            <td class="px-3 py-3 border text-left">{{$user->company->regnumber}}</td>
                            <td class="px-3 py-3 border text-left">{{$user->company->name}}</td>
                            <td class="px-3 py-3 border text-left">{{$user->company->country}}</td>
                            <td class="px-3 py-3 border text-left">{{$user->company->city}}</td>
                            <td class="px-3 py-3 border text-center">
                                   <a href="{{route('can_show_customer',$user->company->id)}}" class="bg-blue-700 px-2 py-2 text-white rounded-md shadow-md hover:bg-blue-500">View</a>
                          
                            </td>
                            </tr>
                        
                     
                        @empty
                        <tr><td colspan="7" class="text-danger text-center">No Transactions Found</td></tr>
                        @endforelse
                    </tbody>
                </table>
                @endif
</div>
</div>
