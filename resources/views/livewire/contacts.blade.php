<div>
<div class=" bg-green-400 text-gray-700 text-xl w-1/2 mx-auto mt-5 px-3 py-3 rounded-md shadow-md border">
 Please enter your company contacts seperated by commas. These are the contacts that will be displayed on our government gazatte 
</div>
     <div class="bg-white w-1/2 mx-auto mt-5 px-3 py-3 rounded-md shadow-md border">
     
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Emails
      </label>
      <input class="appearance-none border @error('emails') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="emails" type="text" wire:model.lazy="emails">
      @error('emails')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Phone numbers
      </label>
      <input class="appearance-none border @error('phones') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phones" type="text" wire:model.lazy="phones">
      @error('phones')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Address
      </label>
      <textarea class="appearance-none border @error('address') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" wire:model.lazy="address"></textarea>
      @error('address')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" wire:click="submit">
     {{ __('Submit') }}
      </button>
     </div>

    </div>
</div>