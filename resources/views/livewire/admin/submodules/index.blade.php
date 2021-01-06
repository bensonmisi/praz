<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div> <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.modules')}}">System</a></div><div class="mr-2">/</div><div class="mr-2">Sub Modules</div>
</div>
<div class="flex">
    <div class="w-full bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
<div class="flex justify-between items-center border-b-2"><div class="text-2xl ">{{$module->name}}</div>
 <a href="{{route('can_add_submodule',$module->id)}}" class="px-3 py-3 bg-green-600 rounded-md text-white hover:bg-green-400"><i class="fa fa-plus"></i> New</a></div>
      
                <table class="table-auto w-full">
                    <thead>
                        <tr>
                           
                            <th class="px-3 py-3 border font-semibold text-left">url</th>
                            <th class="px-3 py-3 border font-semibold text-left">Name</th>
                            <th class="px-3 py-3 border font-semibold text-left">Permissions</th>
                            <th class="px-3 py-3 border font-semibold text-left">
                  
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($module->submodules as $sub)
                        <tr>
                           
                           <td class="px-3 py-3 border font-semibold text-left">{{$sub->url}}</td>
                           <td class="px-3 py-3 border font-semibold text-left">{{$sub->name}}</td>
                           <td class="px-3 py-3 border font-semibold text-left">
                             <table class="table-auto w-full">
                              <tr><th class="px-3 py-3 border font-semibold text-left">Name</th><th class="px-3 py-3 text-center border "><a href="{{route('can_add_permissions',$sub->id)}}"class="px-2 py-2 bg-green-700 text-white"><i class="fa fa-plus"></i></a></th></tr>
                                @forelse($sub->permissions as $perm)
                                <tr><td class="px-3 py-3 border font-semibold text-left">{{$perm->name}}</td><td class="px-3 py-3 text-center border flex"><a href="{{route('can_edit_permissions',$perm->id)}}" class="px-2 py-2 bg-blue-700 text-white mr-1"><i class="fa fa-pencil"></i></a><button class="px-2 py-2 bg-red-700 text-white" wire:click='remove({{$perm->id}})'><i class="fa fa-times"></i></button></td></tr>
                                @empty
                                  <tr><td colspan="2" class="text-red-700 px-3 py-3 text-center">No Permission added </td></tr>
                                @endforelse
                             </table>
                           </td>
                            <td class="text-center">
                               <div class="btn-group">
                                   <a href="{{route('can_edit_submodule',$sub->id)}}" class="px-2 py-2 bg-blue-700 text-white"><i class="fa fa-pencil"></i></a>
                                   <a href="{{route('can_remove_submodule',$sub->id)}}" class="px-2 py-2 bg-red-700 text-white" ><i class="fa fa-trash"></i></a>
                                 
                                </div>
                            </td>
                        </tr>

                        @empty
                        <tr><td colspan="3" class="text-red-700 px-3 py-3 border text-center">No Module Added As Yet</td></tr>
                        @endforelse
                    </tbody>
                </table>
         

    </div>
</div>
