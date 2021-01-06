<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">System Modules</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class="px-4 py-4 flex justify-between items-center">
            <div class="text-2xl">System Modules</div> 
            <a href="{{route('can_add_module')}}" class="px-3 py-3 bg-green-600 rounded-md text-white hover:bg-green-400"><i class="fa fa-plus"></i> New</a>
        </div>
               
            
                <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 border font-semibold text-left">icon</th>
                            <th class="px-3 py-3 border font-semibold text-left">Name</th>
                            <th class="px-3 py-3 border font-semibold text-center">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($modules as $module)
                        <tr>
                           <td class="px-3 py-3 border text-left"><i class="{{$module->icon}}"></i></td>
                           <td class="px-3 py-3 border text-left">{{$module->name}}</td>
                            <td class="px-3 py-3 border text-center">
                               <div class="btn-group">
                                   <a href="{{route('can_edit_module',$module->id)}}" class="px-2 py-2 bg-blue-700 rounded-md text-white"><i class="fa fa-pencil"></i></a>
                                   <a href="{{route('can_remove_module',$module->id)}}" class="px-2 py-2 bg-red-700 rounded-md text-white" ><i class="fa fa-trash"></i></a>
                                   <a href="{{route('can_view_submodule',$module->id)}}" class="px-2 py-2 bg-green-700 rounded-md text-white" ><i class="fa fa-link"></i></a>
                        
                                </div>
                            </td>
                        </tr>

                        @empty
                        <tr><td colspan="3" class="text-danger text-center">No Module Added As Yet</td></tr>
                        @endforelse
                    </tbody>
                </table>
        </div>

</div>
