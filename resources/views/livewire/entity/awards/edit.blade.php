<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class=" text-indigo-600 px-3 py-3 mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"> <a href="{{route('tender.awards.index',$award->pnotice_id)}}">Award Notice</a></div><div class="mr-2">/</div><div class="mr-2"> Edit</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm w-4/6 mx-auto shadow-md border border-solid m-1 border-gray-200">
<div class="text-1xl px-3 py-3">Edit Award</div>
<div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Quantity
      </label>
      <input class="appearance-none border @error('quantity') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" wire:model.lazy="quantity"/>
            
      @error('quantity')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
 </div>
<div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Status
      </label>
      <select class="appearance-none border @error('status') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status" wire:model.lazy="status">
             <option></option>
             <option value="AWARDED">AWARDED</option>
             <option value="CANCELLED">CANCELLED</option>
      </select>
      @error('status')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
 </div>
 <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Comment
      </label>
      <textarea rows="10" class="appearance-none border @error('comment') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comment" wire:model.lazy="comment"></textarea>
      @error('comment')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
 </div>
 <div class="flex justify-between items-center px-3 py-3">
                          <div>
                            <a href="#" class="bg-red-500 px-2 py-2 text-white rounded-sm">Cancel</a>
                          </div>
                          <div>
                            <button class="bg-green-500 px-2 py-2 text-white rounded-sm" wire:click="save">Submit</button>
                          </div>
                        </div>

</div>
</div>
