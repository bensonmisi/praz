<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('registration_category')}}">Registrations </a></div><div class="mr-2">/</div><div class="mr-2">Upload</div>
</div>
<div class="w-1/2 mx-auto bg-white px-3 py-3 rounded-sm shadow-sm">
   <div class="bg-blue-700 text-white px-3 py-3 rounded-sm shadow-sm">
       Upload : {{$doc}}
   </div>
   
            <div wire:loading class="text-xl text-center text-blue-600">Please wait.....</div>
            <div>
            <form class="form-inline" wire:submit.prevent="save">
                <div class="flex justify-start items-center mt-4">
                  <div class="w-full px-3 mb-6 md:mb-0">
                  
                    <input class="appearance-none border @error('document') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="document" type="file" wire:model.lazy="document"/>
                    @error('document')
                        <span class="text-red-600" role="alert">
                        <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                    </div> 
                    <div>
                    @if($document)
                    <button class="bg-green-600 px-2 py-2 text-white" type="submit">Upload</button>
                    @endif
                    </div>
                </div>  
                 
                  
              </form>
            </div>
   
</div>
</div>