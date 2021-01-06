<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Currency</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class="px-4 py-4 flex justify-between items-center">
            <div class="text-2xl">Currency</div> 
            <a href="{{route('can_add_currency')}}" class="px-3 py-3 bg-green-600 rounded-md text-white hover:bg-green-400"><i class="fa fa-plus"></i> New</a>
        </div>
        <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 border font-semibold text-left">Name</th>
                            <th class="px-3 py-3 border font-semibold">
 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    @forelse($currency as $curr)
                        <tr>
                           <td class="px-3 py-3 border text-left">{{$curr->name}}</td>
                            <td class="px-3 py-3 border text-center">
                                   <a href="{{route('can_edit_currency',$curr->id)}}" class="px-2 py-2 bg-blue-700 rounded-md text-white"><i class="fa fa-pencil"></i></a>
                                   <a href="{{route('can_remove_currency',$curr->id)}}" class="px-2 py-2 bg-red-700 rounded-md text-white" ><i class="fa fa-trash"></i></a>
                                  
                            </td>
                        </tr>

                        @empty
                        <tr><td colspan="2" class="text-danger text-center">No Currency Added As Yet</td></tr>
                        @endforelse
                    </tbody>
                </table>
</div>

</div>

</div>
