<div>
    <div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid border-gray-200 flex justify-between items-center">
        <div class="text-lg sm:text-2xl">
        Welcome: {{Auth::user()->company->name}} 
        </div>
        <div class="text-lg sm:text-2xl">
        PRAZ NUMBER: {{Auth::user()->company->regnumber}}
        </div>
    </div>

 
    <div class="flex">
     <div class=" w-4/6">
    <div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid border-gray-200 mt-2">
        <div class="bg-gray-200 px-3 py-3 flex justify-between items-center">
            <div>Registered Categories</div>
            <div>
                <a href="{{route('registration_documents')}}" class="px-3 py-2 bg-green-700 rounded-sm shadow-md hover:bg-green-500 text-white">Add Category</a>
            </div>
        </div>
        <div class="px-3 py-3">
            <table class="table-auto w-full">
            <thead>
                        <tr><th class="border px-3 py-3">Code</th><th class="hidden sm:flex border px-3 py-3">Description</th><th class="border px-3 py-3">Year</th><th class="border px-3 py-3">Status</th></tr>
                    </thead>
                    <tbody>
                        @forelse($categories as $cat)
                        <tr>
                            <td class="border px-3 py-3 text-center">{{$cat->category->code}}</td>
                            <td class="hidden sm:flex border px-3 py-3 text-center">{{$cat->category->name}}</td>
                            <td class="border px-3 py-3 text-center">{{$cat->expire_year}}</td>
                            <td class="border px-3 py-3 text-center">
                                @if($cat->status==='APPROVED')
                                  <a href="{{route('certificate_print',$cat->id)}}" target="_blank" class="bg-green-700 tracking-tighter px-2 py-2 text-white">Download</a>
                               
                                @else
                                <span class="text-red-700">
                                {{$cat->status}}
                                </span>
                                @endif
                           </td>
                            
                        </tr>
                        @empty
                        <tr><td colspan="4" class="text-red-700 px-3 py-3 border text-center">No Current Registrations Found Please Click Add Category to register</td></tr>
                        @endforelse
                    </tbody>
            </table>

        </div>
    </div>

    <div class="bg-white  rounded-sm shadow-md border border-solid border-gray-200 mt-2">
      <div>
      <div class="text-2xl bg-blue-800 text-white px-3 py-3">Latest Notices</div>
      <div class="px-3 py-3">
      @forelse($categories as $cat)
                 <div class="">{{$cat->category->code}}</div>
                <?php $notices = $this->getNotices($cat->category_id);  ?>
              
                  <table class="table-auto w-full">
                   
                      <tbody>
                      @forelse($notices as $notice)
                           @if(count($notice->notice->products)>0)
                             @foreach($notice->notice->products as $product)
                             <tr>
                                <td class="border px-3 py-3">{{$product->notice->company->name}}</td>
                                 <td class="border px-3 py-3">{{$product->notice->tendernumber}}</td>
                                 <td class="border px-3 py-3">{{$product->notice->type->name}}</td>
                                 <td class="border px-3 py-3">{{$product->name}}</td>
                                 <td class="border px-3 py-3">{{$product->quantity}}</td>
                                 <td class="border px-3 py-3">{{$notice->notice->close_date}}</td>
                                 <td class="border px-3 py-3"><a href="{{route('tendershow',$notice->notice->id)}}" class="bg-blue-500 px-2 py-2 text-white hover:bg-blue-300 rounded-md shadow-sm">View</a></td>
                            </tr>
                             @endforeach
                         @endif
                      @empty
                      <tr>
                          <td class="border px-3 py-3 text-center text-red-500" colspan="6">No Procurement Notices Found</td>
                      </tr>
                      @endforelse
                      </tbody>
                  </table>
                  
      
      @empty
      
                          <div class="border px-3 py-3 text-center text-red-500">Please registered to get customized noticed</div>
                      
      @endforelse
      </div>
      

      </div>
    </div>
    </div>
    <div class="w-2/6 bg-white h-screen">
    <div class="px-2 py-2 ">

    <div class="font-semibold py-3 bg-green-600 text-white px-3">Incomplete Supplier Registrations</div>
    <div class="bg-white border shadow-md">
    @if(count($invoice)>0)
    <a href="{{route('registration_category')}}" class="px-3 py-3 border block text-center rounded-md shadow-sm bg-red-500 text-white"> ({{count($invoice)}}) Continue Registration</a>  
     @else
     <div class="text-red-500 px-3 py-3 text-center">No incomplete registration invoices</div>
    @endif
    </div>
    <div class="font-semibold py-3  bg-blue-600 text-white px-3 mt-5">Incomplete Tender Fees</div>
    <div class="bg-white border shadow-md px-3 py-5">
    @if(!is_null($tenderfee))
    <a href="{{route('tenderpayment',$tenderfee->pnotice_id)}}" class="bg-red-300 block text-center  text-white  border px-2 py-2 rounded-md shadow-sm">Continue</a>
    @else
     <div class="text-red-500 px-3 py-3 text-center">No incomplete Tender Fees</div>
    @endif
    </div>
    <div class="font-semibold py-3  bg-blue-600 text-white px-3 mt-5">Bank Transfers Comments</div>
    <ul>
  
     <li class="px-3 py-3 border">
     @forelse($awaiting as $aw)
     <div class="font-bold">{{$aw->invoice_number}}</div>
     <div class="text-xs text-gray-600">{{$aw->status}}</div>
     <div class="text-xs font-bold text-gray-600 border-b-2">Comments:</div>
     @forelse($aw->comments()->whereactioned('PENDING')->get() as $comment)
     <div class="px-2 py-2 border mt-2 mb-2">
         <div class="text-red-600 text-xs ">
         {{$comment->comment}}
         </div>
         <div class="mt-2 mb-2">
         <a href="{{route('awaiting')}}" class="px-2 py-2  mb-2  rounded-sm text-blue-700 hover:text-blue-400 font-semibold">View>></a>
         </div>
     </div>
       @empty
     @endforelse
     @empty
     <div class="text-red-500 px-3 py-3 text-center"> No Bank transfers found</div>
     @endforelse
     </li>
  
    </ul>
    <div class="font-semibold py-3  bg-blue-600 text-white px-3 mt-5">Company Documents</div>
    <div class="bg-white border shadow-md">
    @forelse(Auth::user()->company->supplier_comments as $comment)
     <div class="px-2 py-2 border mt-2 mb-2 text-center">
         <div class="text-red-600 ">
         {{$comment->comment}}
         </div>
         <div class="mt-2 mb-2">
         <a href="{{route('documents')}}" class="px-2 py-2  mb-2  rounded-sm text-blue-700 hover:text-blue-400 font-semibold">View>></a>
         </div>
     </div>
       @empty
     @endforelse
    </div>
     </div>
    
    </div>
    
    </div>
</div>
