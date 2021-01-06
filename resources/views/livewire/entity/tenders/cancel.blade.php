<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('tenders')}}">Notices</a></div><div class="mr-2">/</div><div class="mr-2"> Cancel Procurement Notice</div>
</div>
<div class="w-5/6 mx-auto bg-white rounded-md shadow-md border mt-4">
       <div class="px-3 py-3 flex justify-between items-center border-b border-solid border-gray-300 ">
         <div class="text-2xl text-gray-800">Cancel Notice</div> 
       </div>
       <div class="px-2 py-2">
       <table class="table-auto w-full">
              <tbody>
              <tr><th class="px-3 py-3 bg-gray-800 text-left text-gray-200">Notice Number</th><td class="px-3 py-3 border text-gray-900">{{$notice->tendernumber}}</td></tr>
              <tr><th class="px-3 py-3 bg-gray-800  text-left text-gray-200">Procurement type</th><td class="px-3 py-3 border text-gray-900">{{$notice->type->name}}</td></tr>
              <tr><th class="px-3 py-3 bg-gray-800  text-left text-gray-200">Product Name</th><td class="px-3 py-3 border text-gray-900">{{$notice->product}}</td></tr>
              <tr><th class="px-3 py-3 bg-gray-800 text-left text-gray-200">Quantity</th><td class="px-3 py-3 border text-gray-900">{{$notice->quantity}}</td></tr>
              <tr><th class="px-3 py-3 bg-gray-800  text-left text-gray-200">Closing Date</th><td class="px-3 py-3 border text-gray-900">{{$notice->close_date}}</td></tr>
              <tr><th class="px-3 py-3 bg-gray-800  text-left text-gray-200">Bid Value</th><td class="px-3 py-3 border text-gray-900">{{$notice->currency->name}}{{$notice->bidvalue}}</td></tr>
              <tr><th class="px-3 py-3 bg-gray-800  text-left text-gray-200">Bid Value</th><td class="px-3 py-3 border text-gray-900">{{$notice->currency->name}}{{$notice->bidbond}}</td></tr>
              
              </tbody>
       </table>
       </div>
       <div class="w-full p-3 mb-6 md:mb-0">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Reason for Cancellation
              </label>
              <textarea rows="10" class="appearance-none border @error('comment') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comment"  wire:model.lazy="comment"></textarea>
              
              @error('comment')
                     <span class="text-red-600" role="alert">
                     <strong>{{ $message }}</strong>
                     </span>
               @enderror
       </div>
       <div class="flex justify-between items-center px-3 py-3">
                          <div>
                            <a href="{{route('tender',$notice->id)}}" class="bg-red-500 px-2 py-2 text-white rounded-sm">No Goback</a>
                          </div>
                          <div>
                            <button class="bg-green-500 px-2 py-2 text-white rounded-sm" wire:click="save">Yes Cancel</button>
                          </div>
  </div>

</div>

</div>

