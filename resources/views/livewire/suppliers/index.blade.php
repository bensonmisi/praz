<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('welcome')}}">Home</a></div><div  class="text-indigo-600 px-3 py-3 mr-2">/</div><div>Bidders</div>
</div>
<div class="bg-white shadow-md px-3 py-4 rounded-md m-2">
    <input type="text" class="px-3 py-3 rounded-md w-full border" wire:model='search' name="search" placeholder="Search by product or service name"/>
</div>
   <div class="bg-white mt-2 w-full sm:px-3 py-4 rounded-md ">
   <table class="table-auto w-full">
                        <thead>
                            <tr class="hover:bg-gray-500">
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Name</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Code</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Total Bidders</th>
                                <th class=" text-bold px-3 py-3 border bg-gray-800 text-gray-200"></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                             @forelse($categories as $category)
                            <tr>
                                <td class="border px-3 py-3">{{$category->name}}</td>
                                <td class="border px-3 py-3">{{$category->code}}</td>
                                <td class="border px-3 py-3">{{count($category->suppliers)}}</td>
                                <td class="border px-3 py-3"><a href="{{route('suppliers.show',$category->id)}}" class="bg-green-600 px-2 py-2 text-white">View List</a></td>
                             
                            </tr>

                            @empty
                            <tr><td colspan="4">No Categories As Yet</td></tr>
                            @endforelse
                        </tbody>
                    </table>
   </div>
</div>
