<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.customer')}}">Customers</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('can_show_customer',$company->id)}}">{{$company->regnumber}}</a></div><div class="mr-2">/</div><div class="mr-2">Show</div>
</div>
<div class="w-1/2 mx-auto bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
<div wire:loading>
                    <div class="flex justify-center items-center">
                    <h4 class="text-green-600 text-2xl">Processing ...
                    </h4>
                    </div>
                        
                </div>
        @include('partials.message')
        <div class="px-3 py-3 text-2xl border-b-2">Edit Company</div>

        <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input class="appearance-none border @error('name') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" wire:model.lazy="name">
      @error('name')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
        City
      </label>
      <input class="appearance-none border @error('city') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" wire:model.lazy="city">
      @error('city')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
        </div>
        <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
     Country
      </label>
      <select class="appearance-none border @error('country') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country" type="text" wire:model.lazy="country">
      @for($i=0;$i< count($countrylist); $i++)
                    <option value="{{$countrylist[$i]}}">{{$countrylist[$i]}}</option>  
        @endfor   
      </select>
      @error('country')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      Account Type
      </label>
      <select class="appearance-none border @error('accounttype') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="accounttype"  wire:model.lazy="accounttype">
                                  @forelse($types as $role)
                                        <option value="{{$role->id}}">{{$role->name}}</option>
                                     @empty

                                     @endforelse
      </select>
      @error('accounttype')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
        </div>
        <div class="flex justify-between items-center mt-4">
        <a href="{{route('can_show_customer',$company->id)}}" class="px-3 py-3 bg-red-600 rounded-md hover:bg-red-400 text-white">Cancel</a>
                   <button class="px-3 py-3 bg-green-600 rounded-md hover:bg-green-400 text-white" wire:click='update'>Submit</button>
        </div>

</div>
</div>