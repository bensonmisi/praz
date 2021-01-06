<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.accounttypes')}}">Supplier Types</a></div><div class="mr-2">/</div><div class="mr-2">Delete Account type</div>
</div>
<div class="w-1/2 mx-auto bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
<div wire:loading wire:target='remove'>
                    <div class="flex justify-center items-center">
                    <h4 class="text-green-600 text-2xl">Processing ...
                    </h4>
                    </div>
                        
                </div>
        @include('partials.message')
        <div class="px-3 py-3 text-2xl border-b-2">Remove Account Type</div>

     <div class="w-full p-3 mb-6 md:mb-0">
     @if(!is_null($type))
                  <h5> You are about to permanently delete : {{$type->name}}</h5>
                  @endif
     </div>
    
        <div class="flex justify-between items-center mt-4">
        <a href="{{route('admin.accounttypes')}}" class="px-3 py-3 bg-red-600 rounded-md hover:bg-red-400 text-white">Cancel</a>
                   <button class="px-3 py-3 bg-green-600 rounded-md hover:bg-green-400 text-white" wire:click='remove'>Submit</button>
        </div>

</div>
</div>

</div>
