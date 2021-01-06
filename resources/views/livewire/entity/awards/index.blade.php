<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2"> Award Notice</div>
</div>


<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class="px-4 py-4 flex justify-between items-center">
            <div class="text-2xl">{{$notice->tendernumber}}</div>
            <div><a href="{{route('tender.awards.add',$notice->id)}}" class="bg-green-600 px-3 py-3 rounded-md shadow-md text-white">New</a></div>
        </div>
        <table class="table-auto w-full">
                    <thead>
                        <tr>
                           <th class="bg-blue-700 text-white px-3 py-3 border">Award Company</th>
                            <th class="bg-blue-700 text-white px-3 py-3 border">Product/Service</th>
                            <th class="bg-blue-700 text-white px-3 py-3 border">Quantity</th>
                            <th class="bg-blue-700  text-white px-3 py-3 border">Value</th>
                            <th class="bg-blue-700  text-white px-3 py-3 border">Status</th>
                            <th class="bg-blue-700  text-white px-3 py-3 border"></th>
                             
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($notice->awards as $award)
                        <tr>

                        <td class="px-3 py-3 border text-center">{{$award->company->name}}</td>
                        <td class="px-3 py-3 border text-center">{{$award->product->name}}</td>
                        <td class="px-3 py-3 border text-center">{{$award->quantity}}</td>  
                        <td class="px-3 py-3 border text-center">({{$award->currency->name}}){{$award->value}}</td>
                        <td class="px-3 py-3 border text-center">{{$award->status}}</td>
                        <td class="px-3 py-3 border text-center">
                             @if($award->status != 'DELIVERED')
                            <a  href="{{route('tender.awards.edit',$award->id)}}" class="px-2 py-2 bg-blue-500 :hover:bg-blue-700 text-white rounded-sm shadow-sm">Edit</a>
                            <a  href="{{route('tender.awards.delivary',$award->id)}}" class="px-2 py-2 bg-green-500 :hover:bg-blue-700 text-white rounded-sm shadow-sm">Delievered</a>
                        
                             @endif
                        </td>
                        </tr>

                        @empty
                        <tr><td colspan="5" class="px-3 py-3 border  text-center">No Award Notices Uploaded As Yet</td></tr>
                        @endforelse
                    </tbody>
                </table>

    </div>

</div>
