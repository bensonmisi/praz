<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Online Payments</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class=" py-4 flex justify-between items-center">
            <div>
            <div class="text-2xl">Online Payments Transaction Payments</div> 
            <div class="text-xs text-gray-600">Results :({{count($onlinepayments)}}) </div>
            </div>
            <div>
            <div class="w-full px-3 mb-6 md:mb-0">    
                <input class="appearance-none border @error('query') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="query" type="text" wire:model="query" placeholder="Search">
                @error('query')
                    <span class="text-red-600" role="alert">
                    <strong>{{ $message }}</strong>
                    </span>
                @enderror
                </div>
            </div>
        </div>
        <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 border font-semibold text-left">Company</th>
                            <th class="px-3 py-3 border font-semibold text-left">Invoice Number</th>  
                            <th class="px-3 py-3 border font-semibold text-left">Type</th>                      
                            <th class="px-3 py-3 border font-semibold text-left">Amount</th>
                            <th class="px-3 py-3 border font-semibold text-left">Transaction Date</th>
                            <th class="px-3 py-3 border font-semibold text-left">Status</th>
                            <th class="px-3 py-3 border font-semibold">
 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($onlinepayments as $tran)
                            @if(!is_null($tran->company))
                            <tr>
                            <td class="px-3 py-3 border text-left">{{$tran->company->name}}</td>
                            <td class="px-3 py-3 border text-left">{{$tran->invoice_number}}</td>
                            <td class="px-3 py-3 border text-left">{{$tran->type}}</td>
                            <td class="px-3 py-3 border text-left">{{$tran->amount}}</td>
                            <td class="px-3 py-3 border text-left">{{$tran->created_at}}</td>
                            <td class="px-3 py-3 border text-left">{{$tran->status}}</td>
                            <td class="px-3 py-3 border text-center">
                            @if($tran->status =='PENDING' || $tran->status =='sent' || $tran->status =='created' )
                              <button class="bg-blue-700 px-2 py-2 text-white rounded-md shadow-md hover:bg-blue-500" wire:click='checkPayment({{$tran->id}})'>Check Payment</button>
                            @endif
                            </td>
                            </tr>
                        
                        @endif
                        @empty
                        <tr><td colspan="7" class="text-danger text-center">No Transactions Found</td></tr>
                        @endforelse
                    </tbody>
                </table>
</div>
</div>
