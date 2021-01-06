<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.rtgs')}}">Rtgs</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('can_view_rtgs',$rtgs->id)}}">{{$rtgs->invoice_number}}</a></div><div class="mr-2">/</div><div class="mr-2">Comment</div>
</div>
<div class="w-full sm:w-4/6 bg-gray-100 mx-auto mt-4">
<div class="w-full p-3 mb-6 md:mb-0">
                              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Comment</label>
                              <textarea cols="10" rows="20" class="appearance-none border @error('comment') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comment" wire:model.lazy="comment" required>
                              </textarea>
                           
                              @error('comment')
                                              <span class="text-red-500" role="alert">
                                                  <strong>{{ $message }}</strong>
                                              </span>
                                  @enderror
                          </div>
                          <div class="flex justify-between items-center">
                          <div>
                            <a href="{{route('can_view_rtgs',$rtgs->id)}}" class="bg-red-500 px-2 py-2 text-white rounded-sm">Cancel</a>
                          </div>
                          <div>
                            <button class="bg-green-500 px-2 py-2 text-white rounded-sm" wire:click="add">submit</button>
                          </div>
                        </div>
</div>

</div>
