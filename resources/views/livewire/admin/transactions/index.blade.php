<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Intergration Payments</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class=" py-4 flex justify-between items-center">
            <div>
            <div class="text-2xl">Bank Transaction Payments</div> 
            <div class="text-xs text-gray-600">Results :({{count($transactions)}}) </div>
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
                            <th class="px-3 py-3 border font-semibold text-left">Description</th>
                            <th class="px-3 py-3 border font-semibold text-left">Reg number</th>
                            <th class="px-3 py-3 border font-semibold text-left">Bank</th>
                            <th class="px-3 py-3 border font-semibold text-left">Account Number</th>
                            <th class="px-3 py-3 border font-semibold text-left">Currency</th>
                            <th class="px-3 py-3 border font-semibold text-left">Amount</th>
                            <th class="px-3 py-3 border font-semibold text-left">Transaction Date</th>
                            <th class="px-3 py-3 border font-semibold">
 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($transactions as $tran)
                     
                        <tr>
                           <td class="px-3 py-3 border text-left">{{$tran->name}}</td>
                           <td class="px-3 py-3 border text-left">{{$tran->regnumber}}</td>
                           <td class="px-3 py-3 border text-left">{{$tran->bank}}</td>
                           <td class="px-3 py-3 border text-left">{{$tran->accountnumber}}</td>
                           <td class="px-3 py-3 border text-left">{{$tran->currency}}</td>
                           <td class="px-3 py-3 border text-left">{{$tran->amount}}</td>
                           <td class="px-3 py-3 border text-left">{{$tran->created_at}}</td>
                           
                        </tr>
                    

                        @empty
                        <tr><td colspan="7" class="text-danger text-center">No Transactions Found</td></tr>
                        @endforelse
                    </tbody>
                </table>
</div>
</div>
