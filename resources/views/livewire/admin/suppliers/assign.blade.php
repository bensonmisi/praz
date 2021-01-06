<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div>
       <div class="mr-2">/</div>
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('can_suppliers_pending')}}">Pending Suppliers</a></div><div class="mr-2">/</div>
       <div class="mr-2">Assign User</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class=" py-4 flex justify-between items-center">
           
            <div class="w-full px-3 mb-6 md:mb-0">    
                <input class="appearance-none border @error('query') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="query" type="text" wire:model="query" placeholder="Search">
                @error('query')
                    <span class="text-red-600" role="alert">
                    <strong>{{ $message }}</strong>
                    </span>
                @enderror
                </div>
           
        </div>
        <div class=" px-3 flex justify-between items-center">
        <table class="table-auto w-full">
                    <thead>
                        <tr>
                           
                            <th class="px-3 py-3 border font-semibold text-left">Name</th>
                            <th class="px-3 py-3 border font-semibold text-left">Role</th>
                            <th class="px-3 py-3 border font-semibold">
 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($users as $user)
                            <tr>
                            <td class="px-3 py-3 border text-left">{{$user->name}} {{$user->surname}}</td>
                            <td class="px-3 py-3 border text-left">{{$user->role->name}}</td>
                            <td class="px-3 py-3 border text-center">
                           
                              <button class="bg-blue-700 px-2 py-2 text-white rounded-md shadow-md hover:bg-blue-500" wire:click='assign({{$user->id}})'>Assign</button>
                            
                            </td>
                            </tr>
                        
                        
                        @empty
                        <tr><td colspan="3" class="text-danger text-center">User Found</td></tr>
                        @endforelse
                    </tbody>
                </table>
        </div>
</div>
</div>
