<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">User Management</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class="px-4 py-4 flex justify-between items-center">
            <div class="text-2xl">Users</div> 
            <a href="{{route('can_add_user')}}" class="px-3 py-3 bg-green-600 rounded-md text-white hover:bg-green-400"><i class="fa fa-plus"></i> New</a>
        </div>
        <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 border font-semibold">Name</th>
                            <th class="px-3 py-3 border font-semibold">Surname</th>
                            <th class="px-3 py-3 border font-semibold">Email</th>
                            <th class="px-3 py-3 border font-semibold">Auth Code</th>
                            <th class="px-3 py-3 border font-semibold">Role</th>
                            <th class="px-3 py-3 border font-semibold">Status</th>
                            <th>
 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($users as $user)
                        <tr>
                           <td class="px-3 py-3 border text-center">{{$user->name}}</td>
                           <td class="px-3 py-3 border text-center">{{$user->surname}}</td>
                           <td class="px-3 py-3 border text-center">{{$user->email}}</td>
                           <td class="px-3 py-3 border text-center">{{$user->auth_key}}</td>
                           <td class="px-3 py-3 border text-center">{{$user->role->name}}</td>
                           <td class="px-3 py-3 border text-center">{{$user->status}}</td>
                            <td class="px-3 py-3 border text-center">
                               <div class="btn-group">
                                   <a href="{{route('can_edit_user',$user->id)}}" class="px-3 py-3 bg-blue-700 text-white hover:bg-blue-400"><i class="fa fa-pencil"></i></a>
                                    @if($user->status==='ACTIVE')
                                   <a href="{{route('can_remove_user',$user->id)}}" class="px-3 py-3 bg-red-700 text-white" ><i class="fa fa-ban"></i></a>
                                   @else
                                   <button class="px-3 py-3 bg-green-700 text-white" wire:click='activate({{$user->id}})' ><i class="fa fa-eye"></i></button>
                                                
                                   @endif
                                </div>
                            </td>
                        </tr>

                        @empty
                        <tr><td colspan="2" class="text-danger text-center">No Users Added As Yet</td></tr>
                        @endforelse
                    </tbody>
                </table>
</div>
</div>