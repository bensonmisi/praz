<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div>    <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.entity.index')}}">Procurement Entities</a></div><div class="mr-2">/</div><div class="mr-2">Procurement Management Units</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class="px-4 py-4 flex justify-between items-center">
            <div class="text-2xl">Procurement Management Unit</div> 
            <a href="{{route('can_entity_user_add',$this->company->id)}}" class="px-3 py-3 bg-green-600 rounded-md text-white hover:bg-green-400"><i class="fa fa-plus"></i> New</a>
        </div>
        <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 border font-semibold text-left">Name</th>
                            <th class="px-3 py-3 border font-semibold text-left">Surname</th>
                            <th class="px-3 py-3 border font-semibold text-left">Email</th>
                            <th class="px-3 py-3 border font-semibold text-left">Permissions</th>
                            <th class="px-3 py-3 border font-semibold">
 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($users as $user)
                        <tr>
                           <td class="px-3 py-3 border text-left">{{$user->name}}</td>
                           <td class="px-3 py-3 border text-left">{{$user->surname}}</td>
                           <td class="px-3 py-3 border text-left">{{$user->email}}</td>
                           <td class="px-3 py-3 border text-left">
                               @if(count($user->permissions)>0)
                               {{$user->permissions[0]->permission}}
                               @else
                                <span class="text-red-600">Not Set</span>
                               @endif
                            </td>
                            <td class="px-3 py-3 border text-center">
                            <a href="{{route('can_entity_user_edit',$user->id)}}" class="px-2 py-2 bg-blue-700 rounded-md text-white"><i class="fa fa-pencil"></i></a>
                            <a href="#" class="px-2 py-2 bg-red-700 rounded-md text-white" ><i class="fa fa-trash"></i></a>
                        
                            </td>
                        </tr>

                        @empty
                        <tr><td colspan="5" class="text-danger text-center">No Procurement Management Unit Added As Yet</td></tr>
                        @endforelse
                    </tbody>
                </table>
</div>

</div>

</div>
