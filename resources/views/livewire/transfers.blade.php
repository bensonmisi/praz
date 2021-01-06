<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Bank Transfers</div>
</div>
@include('partials.message')

<div wire:loading class="text-green-600 px-4 py-4 w-1/2 mx-auto"> Please wait....  </div>

<div class="w-full sm:w-5/6 mx-auto px-3 py-4 bg-white rounded-sm mt-4 shadow-md border border-solid border-gray-300">

                    @if($showlist)
              
                <table class="table-auto w-full">
                    <thead>
                        <tr><th class="border bg-gray-300 text-gray-700 px-2 py-2">Date</th><th class="border bg-gray-300 text-gray-700 px-2 py-2">Inovice Number</th><th class="border bg-gray-300 text-gray-700 px-2 py-2">Bank</th><th class="border bg-gray-300 text-gray-700 px-2 py-2">Amount</th><th class="border bg-gray-300 text-gray-700 px-2 py-2">Payment Date</th><th class="border bg-gray-300 text-gray-700 px-2 py-2">Status</th><th class="border bg-gray-300 text-gray-700 px-2 py-2">Comment</th><th class="border bg-gray-300 text-gray-700 px-2 py-2"></th></tr>
                        </thead>
                        <tbody>
                        @forelse($transfers as $tran)
                        <tr wire:key="{{$tran->id}}">
                        <td class="px-3 py-3 border text-center">
                           {{$tran->created_at->diffForHumans()}}
                        </td>
                        <td class="px-3 py-3 border text-center">
                          <a href="{{route('invoice',$tran->invoice_number)}}">{{$tran->invoice_number}}</a>
                        </td>
                        <td class="px-3 py-3 border text-center">{{$tran->name}}</td>
                        <td class="px-3 py-3 border text-center">{{$tran->amount}}</td>
                        <td class="px-3 py-3 border text-center">{{$tran->paymentdate}}</td>
                        <td class="px-3 py-3 border text-center">{{$tran->status}}</td>
                        <td class="px-3 py-3 border text-center">{{$tran->comment}}</td>
                        <td class="px-3 py-3 border text-center">
                            @if($tran->status =='DENIED' )
                              <button class="btn btn-primary btn-sm" wire:click="uploadForm({{$tran->id}})">Upload</button>
                            @elseif($tran->status =='PAID')
                            <a href="{{route('receipt_print',$tran->invoice_number)}}" target="_blank" class="btn btn-success btn-sm">Print Receipt</button>
                            @else
                            <b class="text-danger">{{$tran->status}}</b>
                            @endif
                        </td>
                    </tr>
                        @empty
                        <tr><td colspan="8" class="text-danger text-center px-3 py-3 border text-red-500">No Payments Found</td></tr>
                        @endforelse
                        </tbody>
                   
                </table>
               
                @endif

                @if($showform)
                <form  wire:submit.prevent="save">  
                <div class="w-full p-3 mb-6 md:mb-0">
                              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Upload your proof of transfer</label>
                              <input type="file"  class="appearance-none border @error('file') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="file" wire:model.lazy="file" required/>
                             
                              @error('file')
                                              <span class="text-red-500" role="alert">
                                                  <strong>{{ $message }}</strong>
                                              </span>
                                  @enderror
                          </div>              
               
                
                          <div class="flex justify-between items-center">
                          <div>
                            <a href="#" class="bg-red-500 px-2 py-2 text-white rounded-sm">Cancel</a>
                          </div>
                          <div>
                            <button class="bg-green-500 px-2 py-2 text-white rounded-sm"  type="submit">Continue</button>
                          </div>
                        </div>
                  
              </form>
                @endif
</div>

</div>
