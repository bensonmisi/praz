<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2"> Tenders</div>
</div>


<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class="px-4 py-4 flex justify-between items-center">
            <div class="text-2xl">Procurement Notices</div>
            <div><a href="{{route('tender_add')}}" class="bg-green-600 px-3 py-3 rounded-md shadow-md text-white">New Notice</a></div>
        </div>
        <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="bg-blue-700 text-white px-3 py-3 border">Tender Number</th>
                            <th class="bg-blue-700 text-white px-3 py-3 border">Procurement Type</th>
                            <th class="bg-blue-700  text-white px-3 py-3 border">Close Date</th>
                            <th class="bg-blue-700  text-white px-3 py-3 border">Status</th>
                            <th class="bg-blue-700  text-white px-3 py-3 border"></th>
                             
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($notices as $notice)
                        <tr>
                        <td class="px-3 py-3 border text-center"><a href="{{route('tender',$notice->id)}}">{{$notice->tendernumber}}</a></td>
                        <td class="px-3 py-3 border text-center">{{$notice->type->name}}</td>  
                        <td class="px-3 py-3 border text-center">{{$notice->close_date}}</td>
                        <td class="px-3 py-3 border text-center">{{$notice->status}}</td>
                        <td class="px-3 py-3 border text-center">
                            <a  href="{{route('tender',$notice->id)}}" class="px-2 py-2 bg-blue-500 :hover:bg-blue-700 text-white rounded-sm shadow-sm">View</a>
                          
                        </td>
                        </tr>

                        @empty
                        <tr><td colspan="5" class="px-3 py-3 border  text-center">No Procurement Notices Uploaded As Yet</td></tr>
                        @endforelse
                    </tbody>
                </table>

    </div>

</div>
