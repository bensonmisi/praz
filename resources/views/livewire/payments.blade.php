<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Payments</div>
</div>
<div class="w-full sm:w-5/6 mx-auto px-3 py-4 bg-white rounded-sm mt-4 shadow-md border border-solid border-gray-300">
@include('partials.message')

<div wire:loading><div class="text-green-500 text-lg text-center">Processing ...</div></div>
                <table class="table-auto w-full">
                    <thead>
                        <tr><th class="border bg-gray-300 text-gray-700 px-2 py-2">Date</th><th class="border bg-gray-300 text-gray-700 px-2 py-2">Inovice Number</th><th class="border bg-gray-300 text-gray-700 px-2 py-2">Method</th><th class="border bg-gray-300 text-gray-700 px-2 py-2">Status</th><th class="border bg-gray-300 text-gray-700 px-2 py-2"></th></tr>
                        </thead>
                        <tbody>
                        @forelse($payments as $pay)
                        <tr wire:key="{{$pay->id}}">
                        <td class="border  text-gray-700 px-2 py-2">
                           {{$pay->created_at->diffForHumans()}}
                        </td>
                        <td class="border text-gray-700 px-2 py-2">
                          <a href="{{route('invoice',$pay->invoice_number)}}">{{$pay->invoice_number}}</a>
                        </td>
                        <td class="border text-gray-700 px-2 py-2">{{$pay->mode}}</td>
                        <td class="border text-gray-700 px-2 py-2">{{$pay->status}}</td>
                        <td class="border text-gray-700 px-2 py-2">
                            @if($pay->status =='PENDING' || $pay->status =='sent' || $pay->status =='created' )
                              <button class="bg-blue-700 px-2 py-2 text-white rounded-md shadow-md hover:bg-blue-500" wire:click='checkPayment({{$pay->id}})'>Check Payment</button>
                            @elseif($pay->status =='PAID')
                            <a href="{{route('receipt_print',$pay->invoice_number)}}" target="_blank" class="bg-green-700 px-2 py-2 text-white rounded-md shadow-md hover:bg-green-500">Print Receipt</button>
                            @else
                            <b class="text-danger">cancelled</b>
                            @endif
                        </td>
                    </tr>
                        @empty
                        <tr><td colspan="5" class="border text-gray-700 px-2 py-2">No Payments Found</td></tr>
                        @endforelse
                        </tbody>
                   
                </table>
        
</div>
</div>
