<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.returns.index')}}">Returns</a></div><div class="mr-2">/</div><div class="mr-2">Add Return</div>
</div>
<div class="w-1/2 mx-auto bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">

        @include('partials.message')
        <div class="px-3 py-3 text-2xl border-b-2">New Return</div>

     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <textarea class="appearance-none border @error('name') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" wire:model.lazy="name"></textarea>
      @error('name')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Due Date
      </label>
      <input class="appearance-none border @error('due') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="due" type="date" wire:model.lazy="due">
      @error('due')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Template
      </label>
        <input class="appearance-none border @error('document') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="document" type="file" wire:model.lazy="document"/>
                    @error('document')
                        <span class="text-red-600" role="alert">
                        <strong>{{ $message }}</strong>
                        </span>
                    @enderror
     </div>
        <div class="flex justify-between items-center mt-4">
        <a href="{{route('admin.returns.index')}}" class="px-3 py-3 bg-red-600 rounded-md hover:bg-red-400 text-white">Cancel</a>
                   <button class="px-3 py-3 bg-green-600 rounded-md hover:bg-green-400 text-white" wire:click='add'>Submit</button>
        </div>

</div>
</div>

</div>
