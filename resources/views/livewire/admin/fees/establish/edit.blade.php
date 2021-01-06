<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.fees.establish')}}">Establishment Fees</a></div><div class="mr-2">/</div><div class="mr-2">Update Fee</div>
</div>
<div class="w-1/2 mx-auto bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class="px-3 py-3 text-2xl border-b-2">Update Fee</div>

     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Currency
      </label>
      <select class="appearance-none border @error('currency') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="currency" wire:model.lazy="currency">
      <option></option>
                             @forelse($currencies as $curr)
                                <option value="{{$curr->id}}">{{$curr->name}}</option>
                             @empty

                             @endforelse 
    </select>
      @error('currency')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      lower limit
      </label>
      <input class="appearance-none border @error('lower') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lower" wire:model.lazy="lower"/>
   
      @error('lower')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      Upper limit
      </label>
      <input class="appearance-none border @error('upper') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="upper" wire:model.lazy="upper"/>
   
      @error('upper')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      Locality
      </label>
      <select class="appearance-none border @error('locality') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="locality" wire:model.lazy="locality">
      <option></option>
      <option value="local">Local</option>
      <option value="foreign">Foreign</option> 
                            
    </select>
      @error('locality')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
      
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      Price
      </label>
      <input class="appearance-none border @error('value') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="value" wire:model.lazy="value"/>
     
      @error('value')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
    
        <div class="flex justify-between items-center mt-4">
        <a href="{{route('admin.fees.establish')}}" class="px-3 py-3 bg-red-600 rounded-md hover:bg-red-400 text-white">Cancel</a>
                   <button class="px-3 py-3 bg-green-600 rounded-md hover:bg-green-400 text-white" wire:click='update'>Submit</button>
        </div>

</div>
</div>

</div>
