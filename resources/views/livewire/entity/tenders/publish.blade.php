<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('tenders')}}">Notices</a></div><div class="mr-2">/</div><div class="mr-2"> Publish Procurement Notice</div>
</div>
<div class="w-5/6 mx-auto bg-white rounded-md shadow-md border mt-4">
       <div class="px-3 py-3 flex justify-between items-center border-b border-solid border-gray-300 ">
         <div class="text-2xl text-gray-800">Publish Notice</div> 
       </div>
       <div class="px-2 py-2">
           <p class="px-3 py-3 text-red-700 m-1 font-bold"> You are about to publish  the procurement notice below, Please note once published the notice will be made available to all registered suppliers on our system</p>
          @if(!is_null($notice))
           <table class="table-auto w-full">
              <tbody>
              <tr><th class="px-3 py-3 bg-gray-800 text-left text-gray-200">Notice Number</th><td class="px-3 py-3 border text-gray-900">{{$notice->tendernumber}}</td></tr>
              <tr><th class="px-3 py-3 bg-gray-800  text-left text-gray-200">Procurement type</th><td class="px-3 py-3 border text-gray-900">{{$notice->type->name}}</td></tr>
              <tr><th class="px-3 py-3 bg-gray-800  text-left text-gray-200">Closing Date</th><td class="px-3 py-3 border text-gray-900">{{$notice->close_date}}</td></tr>
              <tr><th class="px-3 py-3 bg-gray-800  text-left text-gray-200">Bid Value</th><td class="px-3 py-3 border text-gray-900">{{$notice->currency->name}}{{$notice->bidvalue}}</td></tr>
              <tr><th class="px-3 py-3 bg-gray-800  text-left text-gray-200">Bid Bond</th><td class="px-3 py-3 border text-gray-900">{{$notice->currency->name}} {{$notice->bidbond}}</td></tr>
              
              </tbody>
       </table>
       </div>
       <div class="px-2 py-2 mt-4 mb-3 text-2xl">Products / Services</div>
   <div class="px-2 py-2 mt-2">
     <table class="table-auto w-full">
        <thead>
          <tr><th class="px-3 py-3 text-white bg-blue-800 border">Name</th><th class="px-3 py-3 text-white bg-blue-800">Quantity</th></tr>
        </thead>
        <tbody>
          @forelse($notice->products as $product)
           <tr>
            <td class="px-3 py-3 text-center border">
                 {{$product->name}}
           </td>
           <td class="px-3 py-3 text-center border">
           {{$product->quantity}}
          </td>
          </tr>
          @empty
            <tr><td colspan="2" class="text-red-700 px-5 py-5 text-center">No Products/Services Found</td></tr>
          @endforelse
        </tbody>
     </table>
   </div>
      
       <div class="flex justify-between items-center px-3 py-3">
                          <div>
                            <a href="{{route('tender',$notice->id)}}" class="bg-red-500 px-2 py-2 text-white rounded-sm">No Goback</a>
                          </div>
                          <div>
                            <button class="bg-green-500 px-2 py-2 text-white rounded-sm" wire:click="publish">Yes Publish</button>
                          </div>
        </div>
        @endif

</div>

</div>

