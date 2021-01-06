<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class=" text-indigo-600 px-3 py-3 mr-2">/</div><div class="mr-2">Delivery Update</div>
</div>

<div class="bg-white px-3 py-5 rounded-sm w-4/6 mx-auto shadow-md border border-solid m-1 border-gray-200">
<div class="text-1xl px-3 py-3">Delivery Update</div>
<div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Rate service delivary
      </label>
      <select class="appearance-none border @error('rating') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="rating" wire:model.lazy="rating">
             <option></option>
             <option value="1">1 Star</option>
             <option value="2">2 Stars</option>
             <option value="3">3 Stars</option>
             <option value="4">4 Stars</option>
             <option value="5">5 Stars</option>
      </select>
      @error('rating')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
 </div>
 <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Comment on service delivery
      </label>
      <textarea rows="10" class="appearance-none border @error('review') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="review" wire:model.lazy="review"></textarea>
      @error('review')
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
