<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('awaiting')}}">Bank Transfers</a></div><div class="mr-2">/</div><div>Reupload</div>
 </div>

 <div class="mt-2 w-1/2 mx-auto px-3 py-3 bg-white m-2 border border-solid border-gray-200 rounded-sm">
 <label class="block text-gray-700 text-sm font-bold mb-2 px-3 py-3 " for="name">
      Attach Proof of payment
  </label>
  <div>
 <input type="file" class="px-3 py-3 border border-solid  border-gray-400 w-full" placeholder="Attach Proof of payment" id="media" wire:model="media"/>
    @error('media')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
  </div>
  <div class="flex justify-end items-center">

  <button class="bg-green-700 px-3 py-3 text-white rounded-sm shadow-sm hover:bg-green-500 m-2" wire:click="save">Submit</button>
  </div>

 </div>

</div>
