<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('welcome')}}">Home</a></div><div  class="text-indigo-600 px-3 py-3 mr-2">/</div><div>Bidder Details</div>
</div>

   <div class="bg-white mt-2 w-full sm:px-3 py-4 rounded-md ">
   <div class="text-2xl px-3 py-3">Bidder Details</div>
   <table class="table-auto w-full">
                      
                        <tbody>
                              <tr><th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Name</th><td class="border px-3 py-3">{{$company->name}}</td></tr>
                              <tr><th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Country</th><td class="border px-3 py-3">{{$company->country}}</td></tr>
                              <tr><th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">City</th><td class="border px-3 py-3">{{$company->city}}</td></tr>
                              <tr><th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Email</th><td class="border px-3 py-3"> @if(!is_null($company->contacts)){{$company->contacts->emails}} @endif</td></tr>
                              <tr><th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Phones</th> <td class="border px-3 py-3">@if(!is_null($company->contacts)) {{$company->contacts->phones}} @endif</td>
                              <tr><th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Address</th><td class="border px-3 py-3">@if(!is_null($company->contacts)) {{$company->contacts->address}} @endif</td>
                          
                        </tbody>
     </table>
     <div class="text-2xl px-3 py-3">Contracts Awarded</div>
     <table class="table-auto w-full">
     <thead>
                            <tr>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Entity</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Tender Number</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Closing Date</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Product/Service</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Quantity</th>
                                <th class="text-bold px-3 py-3 border bg-gray-800 text-gray-200">Contract Value</th>
                            </tr>
                        </thead>
                        <tbody>
                             @forelse($company->awards as $notice)
                            <tr>
                                <td class="border px-3 py-3">{{$notice->notice->company->name}}</td>
                                <td class="border px-3 py-3"><a href="{{route('notice.show',$notice->pnotice_id)}}" class="text-blue-600 hover:text-indigo-600">{{$notice->notice->tendernumber}}</a></td>
                                 <td class="border px-3 py-3">{{$notice->notice->close_date}}</td>
                                <td class="border px-3 py-3">{{$notice->description}}</td>
                                <td class="border px-3 py-3">{{$notice->quantity}}</td>
                                <td class="border px-3 py-3">{{$notice->currency->name}}{{$notice->value}}</td>
                            </tr>

                            @empty
                            <tr><td colspan="9">No Award Notices Uploaded As Yet</td></tr>
                            @endforelse
                        </tbody>
                    </table>
     </table>
   </div>
</div>
