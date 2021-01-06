<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.roles')}}">Roles</a></div><div class="mr-2">/</div><div class="mr-2">Assign Modules</div>
</div>
<div class="w-fullmx-auto bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">

                     <table class="table-auto w-full">
                         <thead>
                             <tr><th class="px-3 py-3 border text-left">Module</th><th class="px-3 py-3 border text-left">Submodules</th><th class="px-3 py-3 border text-left"></th></tr>
                             @forelse($modules as $module)
                             <tr>
                                 <td class="px-3 py-3 border text-left">{{$module->name}}</td>
                                 <td class="px-3 py-3 border text-left">
                                      @if(count($module->roles) >0)
                                     <table class="table-auto w-full">
                                         <thead>
                                             <tr>
                                                 <th class="px-3 py-3 border text-left">Name</th>
                                                 <th class="px-3 py-3 border text-left">Permissions</th>
                                                 <th class="px-3 py-3 border text-left"></th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                     @forelse($module->submodules as $submodule)
                                        <tr>
                                            <td class="px-3 py-3 border text-left">{{$submodule->name}}</td>
                                            <td class="px-3 py-3 border text-left">
                                            @if(count($submodule->roles)>0)
                                                <table class="table-auto w-full">
                                                    <thead>
                                                        <tr>
                                                            <th class="px-3 py-3 border text-left">Name</th>
                                                            <th class="px-3 py-3 border text-left"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                @forelse($submodule->permissions as $permission)
                                                     
                                                     <tr>
                                                         <td class="px-3 py-3 border text-left">{{$permission->name}}</td>
                                                         <td class="px-3 py-3 border text-left">
                                                          @if(count($permission->roles) >0)
                                                             <button class="px-2 py-2 text-white bg-orange-500 rounded-md" wire:click='unassignPermission({{$permission->id}})'><i class="fa fa-times"></i>Detach Permission</button>
                                                          @else
                                                          <button class="px-2 py-2 text-white bg-green-500 rounded-md" wire:click='assignPermission({{$permission->id}})'><i class="fa fa-plus"></i>Assign</button>
                                                          @endif
                                                            
                                                        </td>
                                                     </tr>
                                                @empty
                                                  <tr><td colspan="2" class="px-3 py-3 border text-center text-red-700">No Permissions assigned</td></tr>
                                                @endforelse
                                                    </tbody>
                                                </table>
                                                @else
                                                <p class="text-red-700 text-center"> Assign Sub Module</p>
                                                @endif
                                              

                                            </td>
                                            <td>
                                                @if(count($submodule->roles)>0)
                                                <button class="px-2 py-2 text-white bg-orange-500 rounded-md" wire:click='unassignSubmodule({{$submodule->id}})'><i class="fa fa-times"></i>Detach Submodule</button>
                                                @else
                                                <button class="px-2 py-2 text-white bg-green-500 rounded-md" wire:click="assignSubmodule({{$submodule->id}})"><i class="fa fa-plus"></i>Assign</button>
                                             
                                                @endif
                                            </td>
                                        </tr>
                                     @empty
                                       <tr><td colspan="2" class="px-3 py-3 border text-center text-red-700">No Submodules assigned to role</td></tr>
                                     @endforelse
                                         </tbody>
                                     </table>
                                     @else
                                        <p class="text-red-700 text-center"> Assign Module</p>
                                     @endif
                                 </td>
                                 <td>
                                 @if(count($module->roles) >0)
                                 <button class="px-2 py-2 text-white bg-orange-500 rounded-m" wire:click="unassignModule({{$module->id}})"><i class="fas fa-times"></i> Detach Module</button>
                                 @else
                                 <button class="px-2 py-2 text-white bg-green-500 rounded-md" wire:click='assignModule({{$module->id}})'><i class="fa fa-plus"></i> Assign Module </button>
                                 @endif
                                 </td>
                            </tr>
                             @empty

                             <tr><td colspan="2" class="px-3 py-3 border text-center text-red-700">No modules assigned to role</td></tr>
                             @endforelse
                         </thead>
                     </table>
</div>
            


</div>
