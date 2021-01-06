<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('welcome')}}">Home</a></div><div  class="text-indigo-600 px-3 py-3 mr-2">/</div><div>Procument Notices</div>
</div>
<div class="bg-white shadow-md px-3 py-4 rounded-md m-2">
    <input type="text" class="px-3 py-3 rounded-md w-full border" wire:model='query' name="query" placeholder="Search by product or service name"/>
</div>
   <div class="bg-white mt-2 w-full sm:px-3 py-4 rounded-md ">
   @forelse($notices as $notice)

<a href="{{route('notice.show',$notice->id)}}" class="px-3 py-6  block bg-white border shadow-md  hover:border-blue-700 hover:shadow-lg ">
        <div class="flex justify-between items-center">
            <div>
               <div class="font-bold text-lg">{{$notice->company->name}} ({{$notice->tendernumber}})</div>
                <div class="text-blue-700 font-bold">{{$notice->type->name}}</div>
            </div>
        <div class="flex"><div class="font-bold mr-2">Closing Date: </div><div>{{$notice->close_date}}</div></div>
        </div>
        <ul>
             @forelse($notice->products as $product)
              <li class="flex">
                  <div class="mr-2 font-bold">{{$product->quantity}}</div>
                  <div>{{$product->name}}</div>
              </li>
             @empty

             @endforelse
        </ul>
       
   
  </a>

  @empty

@endforelse
   </div>
</div>
