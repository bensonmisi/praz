<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Import</div>
</div>
<div class="w-full sm:w-1/2 mx-auto bg-white px-3 py-3 rounded-sm shadow-sm">
   <div class="bg-blue-700 text-white px-3 py-3 rounded-sm shadow-sm">
       Upload 
   </div>
   
            <div wire:loading class="text-xl text-center text-blue-600">Please wait.....</div>
            <div>
            <form class="form-inline"  action="{{route('can_import_statement')}}" method="POST"  enctype="multipart/form-data">
            @csrf
                <div class="flex justify-start items-center mt-4">
                  <div class="w-full px-3 mb-6 md:mb-0">
                  
                    <input class="appearance-none border @error('document') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="document" id="document" type="file" wire:model="document"/>
                
                    </div>
                    <div>
                    <button class="bg-green-600 px-2 py-2 text-white" type="submit">Upload</button>
                   
                    </div>
                </div>  
                 
                  
              </form>
            </div>
   
</div>
</div>