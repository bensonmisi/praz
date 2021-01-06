<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.rtgs')}}">Rtgs</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('can_view_rtgs',$rtgs->id)}}">{{$rtgs->invoice_number}}</a></div><div class="mr-2">/</div><div class="mr-2">Edit RTGS</div>
</div>
<div class="w-full mx-auto bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class="px-3 py-3 text-2xl border-b-2">Update RTGS</div>   
        <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
    
      <input class="appearance-none border @error('query') border-red-600 @enderror rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="query" wire:model="query" placeholder="Enter Reference Number Or Description"/>
     
   
     </div>
     
        </div>
        <diV class="px-3">
        @error('refnumber')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
        </diV>
        <div class="px-3">
             <table class="table-auto w-full">
                 <thead>
                     <tr>
                         <th class="px-3 py-3 border font-semibold text-left">Reference Number</th> 
                         <th class="px-3 py-3 border font-semibold text-left">Description</th>                      
                         <th class="px-3 py-3 border font-semibold text-left">Transaction Date</th>
                         <th class="px-3 py-3 border font-semibold text-left">Currency</th>
                         <th class="px-3 py-3 border font-semibold text-left">Amount</th>
                         <th class="px-3 py-3 border font-semibold text-left">Status</th>
                         <th class="px-3 py-3 border font-semibold text-left">Used On</th>
                         <th class="px-3 py-3 border font-semibold text-left"></th>
                     
                 </thead>

                 <tbody>
                     @forelse($statements as $statement)
                    <tr>
                    <td class="px-3 py-3 border text-left">{{$statement->refnumber}}</td>
                    <td class="px-3 py-3 border text-left">{{$statement->name}}</td>
                    <td class="px-3 py-3 border text-left">{{$statement->transaction_date}}</td>                    
                    <td class="px-3 py-3 border text-left">{{$statement->currency}}</td>
                    <td class="px-3 py-3 border text-left">{{$statement->amount}}</td>
                    <td class="px-3 py-3 border text-left">
                        @if(!is_null($statement->rtgs))
                        <div>
                            @if(!is_null($statement->rtgs->company))
                            {{$statement->rtgs->company->name}}
                            @endif
                        </div>
                        <div>{{$statement->rtgs->invoice_number}}</div>

                        @endif
                    </td>
                    <td class="px-3 py-3 border text-left">{{$statement->status}}</td>
                    <td class="px-3 py-3 border text-left">
                        @if($statement->status=='PENDING')
                        <button class="px-2 py-2 bg-blue-700 rounded-md text-white" wire:click="update({{$statement->id}})">Use</button>                        
                 
                        @endif
                    </td>
                    </tr>
                     @empty

                     @endforelse
                 </tbody>
             </table>
        </div>

    

</div>
</div>
 