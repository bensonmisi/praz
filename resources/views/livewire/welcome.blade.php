<div>
<div class="bg-white py-20">
    <div class="w-3/4 text-center mx-auto mb-5">
        <div class="sm:text-6xl text-blue-700 font-semibold text-white">Procurement Regulatory Authority Of Zimbabwe</div>
        <div class="text-2xl text-gray-700">Public Procurement Portal</div>
        <div class="flex justify-center items-center">
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center">
            <div class="rounded-md shadow">
              <a href="{{route('register')}}" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Register
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="{{route('login')}}" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
               Login
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="{{route('notices')}}" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Notices
              </a>
            </div>
          </div>
        </div>
        
    </div>  

</div> 
<div class="w-full bg-blue-700 py-5 ">
    <div>
 <div class="mt-6 text-white text-4xl text-center mb-8">Statistics</div>
    </div>
 
 <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid-gap-8 gap-8 mb-10 ">

 <div href="#" class="px-3 py-6 text-white border shadow-md flex justify-between items-center hover:border-blue-700 hover:shadow-lg hover:text-white hover:bg-blue-700">
      
          <div class="font-bold text-lg">Suppliers</div>
     
      
      <div class="p-2 text-2xl">
          {{$suppliers}}
      </div>
</div>
<div href="#" class="px-3 py-6 text-white border shadow-md flex justify-between items-center hover:border-blue-700 hover:shadow-lg hover:text-white hover:bg-blue-700">
      
      <div class="font-bold text-lg">Entities</div>
 
  
  <div class="p-2 text-2xl">
      {{$entities }}
  </div>
</div>
<div href="#" class="px-3 py-6 text-white  border shadow-md flex justify-between items-center hover:border-blue-700 hover:shadow-lg hover:text-white hover:bg-blue-700">
      
      <div class="font-bold text-lg">Notices</div>
 
  
  <div class="p-2 text-2xl">
      {{$notices }}
  </div>
</div>
<div href="#" class="px-3 py-6 text-white border shadow-md flex justify-between items-center hover:border-blue-700 hover:shadow-lg hover:text-white hover:bg-blue-700">
      
      <div class="font-bold text-lg">Contracts</div>
 
  
  <div class="p-2 text-2xl">
      {{$contracts }}
  </div>
</div>
  
</div> 
</div>
<div class="w-full bg-white py-5 ">
    <div>
 <div class="mt-6 text-blue-700 text-4xl text-center mb-8">Procurement Notices By Category</div>
    </div>
 
 <div class="container  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid-gap-8 gap-8 mb-10 ">
  @forelse($category as $cat)
  @if(count($cat->notices)>0)
 <a href="{{route('notice.category',$cat->id)}}" class="px-3 py-6 bg-white border shadow-md flex justify-between items-center hover:border-blue-700 hover:shadow-lg hover:text-white hover:bg-blue-700">
      <div>
          <div class="font-bold text-lg">{{$cat->code}}</div>
          <div>{{$cat->name}}</div>
      </div>
      <div class="p-2 text-2xl">
          {{count($cat->notices)}}
      </div>
    </a>
    @endif
@empty

@endforelse
 
</div> 
</div>
<div class="w-full bg-gray-100 py-5 ">
    <div>
 <div class="mt-6 text-blue-700 text-4xl text-center mb-8">Latest Procurement Notices</div>
    </div>
 
<div class="container mx-auto px-3 py-3">
  @forelse($latest as $notice)

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


</div>