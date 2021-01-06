<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('welcome')}}">Home</a></div><div  class="text-indigo-600 px-3 py-3 mr-2">/</div><div>Bidders</div>
</div>
<div class="bg-white shadow-md px-3 py-4 rounded-md m-2">
    <input type="text" class="px-3 py-3 rounded-md w-full border" wire:model='search' name="search" placeholder="Search Bidder"/>
</div>
   <div class="bg-white mt-2 w-full sm:px-3 py-4 rounded-md ">
   <table class="table-auto w-full">
                        <thead>
                            <tr class="hover:bg-gray-500">
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Name</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Country</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">City</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Email</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Phone</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Address</th>
                                <th class=" text-bold px-3 py-3 border bg-gray-800 text-gray-200"></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                             @forelse($suppliers as $supplier)
                            <tr>
                                <td class="border px-3 py-3">{{$supplier->company->name}}</td>
                                <td class="border px-3 py-3">{{$supplier->company->country}}</td>
                                <td class="border px-3 py-3">{{$supplier->company->city}}</td>
                                <td class="border px-3 py-3"> @if(!is_null($supplier->company->contacts)){{$supplier->company->contacts->emails}} @endif</td>
                                <td class="border px-3 py-3">@if(!is_null($supplier->company->contacts)) {{$supplier->company->contacts->phones}} @endif</td>
                                <td class="border px-3 py-3">@if(!is_null($supplier->company->contacts)) {{$supplier->company->contacts->address}} @endif</td>
                                <td class="border px-3 py-3">
                                 <a href="{{route('suppliers.details',$supplier->company->id)}}" class="bg-blue-600 p-1 text-white">View</a>
                                </td>
                               </tr>

                            @empty
                            <tr><td colspan="4">No Categories As Yet</td></tr>
                            @endforelse
                        </tbody>
                    </table>
   </div>
</div>
