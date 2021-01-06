<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.modules')}}">Modules</a></div><div class="mr-2">/</div><div class="mr-2">Add Module</div>
</div>
<div class="w-1/2 mx-auto bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
<div wire:loading wire:target='remove'>
                    <div class="flex justify-center items-center">
                    <h4 class="text-green-600 text-2xl">Processing ...
                    </h4>
                    </div>
                        
                </div>
        @include('partials.message')
        <div class="px-3 py-3 text-2xl border-b-2">New Module</div>

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
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Icon
      </label>
      <input class="appearance-none border @error('icon') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="icon" type="text" wire:model.lazy="icon">
      @error('icon')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
    
        <div class="flex justify-between items-center mt-4">
        <a href="{{route('admin.modules')}}" class="px-3 py-3 bg-red-600 rounded-md hover:bg-red-400 text-white">Cancel</a>
                   <button class="px-3 py-3 bg-green-600 rounded-md hover:bg-green-400 text-white" wire:click='add'>Submit</button>
        </div>

</div>
</div>

</div>
