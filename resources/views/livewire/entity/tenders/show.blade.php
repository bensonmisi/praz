<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('tenders')}}"> Procurement Notices</a></div><div class="mr-2">/</div><div class="mr-2"> Show</div>
</div>
@include('partials.message')
<div class="flex justify-start">
<div class="w-4/6 bg-white rounded-md border mt-4">
<div class="px-3 py-3 flex justify-between items-center border-b border-solid border-gray-300 ">
   <div class="text-2xl text-gray-800">Notice</div>
   <div class="flex justify-start items-center">
       @if($notice->status =='PENDING' || $notice->status =='CANCELLED')
       <a href="{{route('tender.publish',$notice->id)}}" class="bg-green-600 px-2 py-2 rounded-sm shadow-sm text-white mr-2">PUBLISH</a>
       <a href="{{route('tender.edit',$notice->id)}}" class="bg-blue-600 px-2 py-2 rounded-sm shadow-sm text-white">Edit Notice</a>
  
       @else
       @if(Carbon\Carbon::now()->gt(Carbon\Carbon::parse($notice->close_date)))
            <a  href="{{route('tender.awards.index',$notice->id)}}" class="px-2 py-2 bg-green-500 :hover:bg-blue-700 text-white rounded-sm shadow-sm">Award Notice</a>
         @else              
       <a href="{{route('tender.cancel',$notice->id)}}" class="bg-red-600 px-2 py-2 rounded-sm shadow-sm text-white">CANCEL NOTICE</a>
           @endif
       @endif  
 
    </div>
</div>
  <div class="px-2 py-2">
    <table class="table-auto w-full">
       <tbody>
           <tr><th class="px-3 py-3 bg-gray-800 text-left text-gray-200">Notice Number</th><td class="px-3 py-3 border text-gray-900">{{$notice->tendernumber}}</td></tr>
           <tr><th class="px-3 py-3 bg-gray-800  text-left text-gray-200">Procurement type</th><td class="px-3 py-3 border text-gray-900">{{$notice->type->name}}</td></tr>
           <tr><th class="px-3 py-3 bg-gray-800  text-left text-gray-200">Closing Date</th><td class="px-3 py-3 border text-gray-900">{{$notice->close_date}}</td></tr>
           <tr><th class="px-3 py-3 bg-gray-800  text-left text-gray-200">Bid Value</th><td class="px-3 py-3 border text-gray-900">{{$notice->currency->name}}{{$notice->bidvalue}}</td></tr>
           <tr><th class="px-3 py-3 bg-gray-800  text-left text-gray-200">Bid Value</th><td class="px-3 py-3 border text-gray-900">{{$notice->currency->name}}{{$notice->bidbond}}</td></tr>
        
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
   <div class="px-2 py-2 mt-4 mb-3 text-2xl">Required Categories</div>
   <div class="px-2 py-2 mt-2">
     <table class="table-auto w-full">
        <thead>
          <tr><th class="px-3 py-3 text-white bg-blue-800 border">Code</th><th class="px-3 py-3 text-white text-left bg-blue-800">Name</th></tr>
        </thead>
        <tbody>
          @forelse($notice->category as $cat)
           <tr>
            <td class="px-3 py-3 text-center border">
                 {{$cat->category->code}}
           </td>
           <td class="px-3 py-3 border">
           {{$cat->category->name}}
          </td>
          </tr>
          @empty
            <tr><td colspan="2" class="text-red-700 px-5 py-5 text-center">No Categories Found</td></tr>
          @endforelse
        </tbody>
     </table>
   </div>

  <div class="px-2 py-2 flex justify-between items-center">
  <div class="text-2xl mt-4">Notice Description</div>
  <div>
  <a href="{{route('tender_document',$notice->id)}}" target="_blank"class="bg-blue-600 px-2 py-2 rounded-sm shadow-sm text-white"> <i class="fa fa-download"></i> Notice Document</a>
  </div>
  </div>
  <div class="px-2 py-2">
      {{$notice->description}}
  </div>
</div>
 <div class="w-2/6  bg-blue-700 px-2 py-2">
 <div class="px-3 py-3 text-2xl border-b border-solid">Notice Logs</div>
 @forelse($notice->logs as $log)
  <div class="px-2 py-2 rounded-md border text-gray-300 mt-2  border-solid">
    <div> Agent : {{$log->user->name}} {{$log->user->surname}}</div>
    <div> Action : {{$log->action}}</div>
     <div>{{$log->comment}}</div>
  </div>
 @empty

 @endforelse

 </div>
</div>
</div>
