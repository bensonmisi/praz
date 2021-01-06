<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div>
       <div class="mr-2">/</div>
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('registration_category')}}">Registrations </a></div>
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('registration_payment')}}">Payments </a></div>
       <div class="mr-2">/</div><div class="mr-2">POP upload</div>
</div>

<div class="w-full sm:w-3/6 mx-auto px-3 py-4 bg-white rounded-sm mt-4 shadow-md border border-solid border-gray-300">
@include('partials.message')
<div wire:loading><div class="text-green-500 text-lg text-center">Processing ...</div></div>
 <div class="bg-gray-200 px-4 py-4 text-gray-700 flex justify-between items-center mt-4 mb-3">
  <div class="text-2xl">Upload proof of payment</div>
 </div>


                         
                          <div class="w-full p-3 mb-6 md:mb-0">
                              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Amoun Due</label>
                              <input  type="text" readonly class="appearance-none text-gray-900 bg-gray-500 border @error('total') border-red-600 @enderror rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="total" wire:model.lazy="total"/>
                                @error('total')
                                              <span class="text-red-500" role="alert">
                                                  <strong>{{ $message }}</strong>
                                              </span>
                                  @enderror
                          </div>
                          <div class="w-full p-3 mb-6 md:mb-0">
                              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Bank name</label>
                              <input  type="text" class="appearance-none border @error('bank') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bank" wire:model.lazy="bank" required/>
                                @error('bank')
                                              <span class="text-red-500" role="alert">
                                                  <strong>{{ $message }}</strong>
                                              </span>
                                  @enderror
                          </div>
                          <div class="w-full p-3 mb-6 md:mb-0">
                              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Transaction Date</label>
                              <input  type="date" class="appearance-none border @error('tdate') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tdate" wire:model.lazy="tdate" required/>
                                @error('tdate')
                                              <span class="text-red-500" role="alert">
                                                  <strong>{{ $message }}</strong>
                                              </span>
                                  @enderror
                          </div>
                          <div class="w-full p-3 mb-6 md:mb-0">
                              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Attach POP</label>
                              <input  type="file" class="appearance-none border @error('file') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="file" wire:model.lazy="file" required/>
                                @error('file')
                                              <span class="text-red-500" role="alert">
                                                  <strong>{{ $message }}</strong>
                                              </span>
                                  @enderror
                          </div>
                          <div class="flex justify-between items-center">
                          <div>
                            <a href="{{route('registration_payment')}}" class="bg-red-500 px-2 py-2 text-white rounded-sm">Cancel</a>
                          </div>
                          <div>
                            <button class="bg-green-500 px-2 py-2 text-white rounded-sm" wire:click="save"> Upload</button>
                          </div>
                        </div>
 


    </div>


</div>
