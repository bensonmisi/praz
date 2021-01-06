<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Invoices</div>
</div>
@include('partials.message')

<div wire:loading class="text-green-600 px-4 py-4 w-1/2 mx-auto"> Please wait....  </div>

<div class="w-full sm:w-5/6 mx-auto px-3 py-4 bg-white rounded-sm mt-4 shadow-md border border-solid border-gray-300">
 <div class="text-2xl px-3 py-3">General Invoices</div>
                <table class="table-auto w-full">
                    <thead>
                        <tr><th class="border bg-gray-300 text-gray-700 px-2 py-2">Date</th><th class="border bg-gray-300 text-gray-700 px-2 py-2">Inovice Number</th><th class="border bg-gray-300 text-gray-700 px-2 py-2">Status</th><th class="border bg-gray-300 text-gray-700 px-2 py-2"></th></tr>
                        </thead>
                        <tbody>
                        @forelse($invoices as $pay)
                        <tr wire:key="{{$pay->id}}">
                        <td class="px-3 py-3 border text-center">
                           {{$pay->created_at->diffForHumans()}}
                        </td>
                        <td class="px-3 py-3 border text-center">
                          <a href="{{route('invoice',$pay->invoice_number)}}">{{$pay->invoice_number}}</a>
                        </td>
                        <td class="px-3 py-3 border text-center">{{$pay->status}}</td>
                        <td class="px-3 py-3 border text-center">
                            @if($pay->status=='PAID')

                            <a href="{{route('receipt_print',$pay->invoice_number)}}" target="_blank" class="bg-green-600 px-2 py-2 rounded-md shadow-md text-white">View Receipt</a>

                            @endif
                        </td>
                     
                    </tr>
                        @empty
                        <tr><td colspan="3" class="text-red-600 text-center px-3 py-3 border">No Invoices Found</td></tr>
                        @endforelse
                        </tbody>
                   
                </table>
                <div class="text-2xl px-3 py-3">Tender Invoices</div>
                <table class="table-auto w-full">
                    <thead>
                        <tr><th class="border bg-gray-300 text-gray-700 px-2 py-2">Date</th><th class="border bg-gray-300 text-gray-700 px-2 py-2">Inovice Number</th><th class="border bg-gray-300 text-gray-700 px-2 py-2">Status</th><th class="border bg-gray-300 text-gray-700 px-2 py-2"></th></tr>
                        </thead>
                        <tbody>
                        @forelse($tender_invoices as $inv)
                        <tr wire:key="{{$pay->id}}">
                        <td class="px-3 py-3 border text-center">
                           {{$inv->created_at->diffForHumans()}}
                        </td>
                        <td class="px-3 py-3 border text-center">
                          <a href="{{route('invoice',$inv->invoice_number)}}">{{$inv->invoice_number}}</a>
                        </td>
                        <td class="px-3 py-3 border text-center">{{$inv->status}}</td>
                        <td class="px-3 py-3 border text-center">
                            @if($inv->status=='PAID')

                            <a href="{{route('receipt_print',$inv->invoice_number)}}" target="_blank" class="bg-green-600 px-2 py-2 rounded-md shadow-md text-white">View Receipt</a>

                            @endif
                        </td>
                     
                    </tr>
                        @empty
                        <tr><td colspan="3" class="text-red-600 text-center px-3 py-3 border">No Invoices Found</td></tr>
                        @endforelse
                        </tbody>
                   
                </table>
</div>
                

</div>
