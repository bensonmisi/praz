<div>
    <div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div>Bank Transfers</div>
   </div>
   <div class="mt-2 bg-white m-2 border border-solid border-gray-200 rounded-sm">
   @include('partials.message')
    <div class="bg-gray-200 px-3 py-3 flex justify-between items-center">
                <div class="text-lg">Bank Transfers</div>
    </div>
    <div class="px-3 py-3">
        <table class="w-full table-auto">
            <thead>
                <tr>
                    <th class="px-3 py-3 border text-center">Invoice Number</th>
                    <th class="px-3 py-3 border text-center">Bank</th>
                    <th class="px-3 py-3 border text-center">Type</th>
                    <th class="px-3 py-3 border text-center">Amount</th>
                    <th class="px-3 py-3 border text-center">Status</th>
                    <th class="px-3 py-3 border text-center">Comment</th>
                    <th class="px-3 py-3 border text-center"></th>
                </tr>
            </thead>
            <tbody>
                @forelse($rtgs as $rt)
                <tr>
                <td class="px-3 py-3 border text-center">{{$rt->invoice_number}}</td>
                    <td class="px-3 py-3 border text-center">{{$rt->name}}</td>
                    <td class="px-3 py-3 border text-center">{{$rt->type}}</td>
                    <td class="px-3 py-3 border text-center">{{$rt->amount}}</td>
                    <td class="px-3 py-3 border text-center">{{$rt->status}}</td>
                    <td class="px-3 py-3 border text-left text-xs"> 
                                    @forelse($rt->comments as $comment)
                    <div class="text-red-600 px-3 py-3">{{$loop->iteration}}{{$comment->comment}}</div>
                    @empty
                    @endforelse
                </td>
                    <td class="px-3 py-3 border text-center"><a href="{{route('reupload',$rt->id)}}" class="bg-green-600 text-white px-2 py-2 tracking-tighter rounded-sm">Reupload</a></td>
                </tr>
                @empty
                 <tr><td class="px-3 py-3 border text-center text-red-500">No bank transfers found</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
   </div>
</div>
