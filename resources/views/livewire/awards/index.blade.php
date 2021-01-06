<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Award Notices</div>
</div>

@include('partials.message')

<div wire:loading class="text-green-600 px-4 py-4 w-1/2 mx-auto"> Please wait....  </div>

<div class="w-full sm:w-5/6 mx-auto px-3 py-4 bg-white rounded-sm mt-4 shadow-md border border-solid border-gray-300">
<table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 border text-left font-semibold">Tender Number</th> 
                            <th class="px-3 py-3 border text-left font-semibold">Company</th> 
                            <th class="px-3 py-3 border text-left font-semibold">Product</th> 
                            <th class="px-3 py-3 border text-left font-semibold">Quanity</th>
                            <th class="px-3 py-3 border text-left font-semibold">Contract Value</th>
                            <th class="px-3 py-3 border text-left font-semibold">Status</th>
                            <th class="px-3 py-3 border text-left font-semibold">Contract Fees</th>
                            <th class="px-3 py-3 border text-left font-semibold"></th>
                        </tr>
                    </thead>
                    <tbody>
                    @forelse($awards as $award)
                        <tr>
                            <td class="px-3 py-3 border text-left"><a href="{{route('tendershow',$award->pnotice_id)}}" class="text-blue-700 hover:text-blue-500">{{$award->notice->tendernumber}}</a></td>
                            <td class="px-3 py-3 border text-left">{{$award->notice->company->name}}</td>
                            <td class="px-3 py-3 border text-left">{{$award->product->name}}</td> 
                            <td class="px-3 py-3 border text-left">{{$award->quantity}}</td>
                            <td class="px-3 py-3 border text-left">{{$award->currency->name}}{{$award->value}}</td>
                            <td class="px-3 py-3 border text-left">
                             <div class="@if($award->status==='AWARDED') text-green-600 @else text-red-700 @endif"> {{$award->status}}</div> 
                              <small class="text-red-700 text-xs">{{$award->comment}}</small>
                            </td>
                            <td class="px-3 py-3 border text-left">
                                @if($award->status==='AWARDED')
                                <a href="{{route('awardshow',$award->id)}}" class="px-2 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-500">View</a>
                                @endif
                            </td>
                            
                        </tr>

                        @empty
                        <tr><td colspan="5" class="text-red-500 px-3 py-3 border text-center">No Award Notices Found</td></tr>
                        @endforelse
                    </tbody>
</div>

</div>