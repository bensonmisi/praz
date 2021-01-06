<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Gazzates</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class="px-4 py-4 flex justify-between items-center">
            <div class="text-2xl">Gazzates</div> 
            <a href="{{route('can_gazzate_add')}}" class="px-3 py-3 bg-green-600 rounded-md text-white hover:bg-green-400"><i class="fa fa-plus"></i> New</a>
        </div>
        <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 border font-semibold text-left">Name</th>
                            <th class="px-3 py-3 border font-semibold text-left">From</th>
                            <th class="px-3 py-3 border font-semibold text-left">To</th>
                            <th class="px-3 py-3 border font-semibold text-left">Registrations</th>                            
                            <th class="px-3 py-3 border font-semibold">
 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($gazzates as $gazzate)
                        <tr>
                           <td class="px-3 py-3 border text-left">{{$gazzate->name}}</td>
                           <td class="px-3 py-3 border text-left">{{$gazzate->from}}</td>
                           <td class="px-3 py-3 border text-left">{{$gazzate->to}}</td>
                           <td class="px-3 py-3 border text-left">{{count($gazzate->suppliers)}}</td>
                            <td class="px-3 py-3 border text-center">
                            <a href="{{route('can_gazzate_edit',$gazzate->id)}}" class="px-2 py-2 bg-blue-700 rounded-md text-white"><i class="fa fa-pencil"></i></a>
                            <button class="px-2 py-2 bg-red-700 rounded-md text-white" wire:click="remove({{$gazzate->id}})"><i class="fa fa-trash"></i></button>
                           
                             <a href="{{route('can_gazzate_show',$gazzate->id)}}" class="px-2 py-2 bg-green-700 rounded-md text-white"><i class="fa fa-search"></i></a>
                            
                         
                        </td>
                        </tr>

                        @empty
                        <tr><td colspan="4" class="text-red-600 px-3 py-3 border text-center">No Gazzate Added As Yet</td></tr>
                        @endforelse
                    </tbody>
                </table>
</div>

</div>

</div>
