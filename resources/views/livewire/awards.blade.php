<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Award Notices</div>
</div>
<div class="bg-white shadow-md px-3 py-4 rounded-md m-2">
    <input type="text" class="px-3 py-3 rounded-md w-full border" wire:model='query' name="query" placeholder="Search by product or service name"/>
</div>
<div class="m-2 px-3 bg-white shadow-md">
<table class="table-auto w-full">
                        <thead>
                            <tr>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Entity</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Tender Number</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Closing Date</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Awarded To</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Product/Service</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Quantity</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Contract Value</th>
                            </tr>
                        </thead>
                        <tbody>
                             @forelse($notices as $notice)
                            <tr>
                                <td class="border px-3 py-3">{{$notice->notice->company->name}}</td>
                                <td class="border px-3 py-3"><a href="{{route('notice.show',$notice->pnotice_id)}}" class="text-blue-600 hover:text-indigo-600">{{$notice->notice->tendernumber}}</a></td>
                                 <td class="border px-3 py-3">{{$notice->notice->close_date}}</td>
                                <td class="border px-3 py-3"><a href="{{route('suppliers.details',$notice->company->id)}}" class="text-blue-600 hover:text-indigo-600">{{$notice->company->name}}</a></td>
                                <td class="border px-3 py-3">{{$notice->description}}</td>
                                <td class="border px-3 py-3">{{$notice->quantity}}</td>
                                <td class="border px-3 py-3">{{$notice->currency->name}}{{$notice->value}}</td>
                            </tr>

                            @empty
                            <tr><td colspan="9">No Award Notices Uploaded As Yet</td></tr>
                            @endforelse
                        </tbody>
                    </table>
</div>
   
</div>
