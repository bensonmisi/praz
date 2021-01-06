<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.entity.index')}}">Entities</a></div><div class="mr-2">/</div><div class="mr-2">Create</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class="py-4 flex justify-between items-center border-b-2">
            <div class="text-2xl">Company list</div> 
            <a href="{{route('can_entity_add')}}" class="px-3 py-3 bg-green-600 rounded-md text-white hover:bg-green-400"><i class="fa fa-plus"></i> New</a>
        </div>
        <div class="w-full py-3 mb-6 md:mb-0 flex justify-between items-center">
        <div class="w-5/6">
      <input class="appearance-none border @error('query') border-red-600 @enderror rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="query" type="text" wire:model="query" placeholder="Search Company">
      @error('query')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
        </div>
        <div>
        <button class="px-3 py-3 bg-blue-600 rounded-md hover:bg-blue-400 text-white" wire:click='search'>Seach</button>
     
        </div>
     </div>
        <div>
        <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 border font-semibold text-left">Name</th>
                            <th class="px-3 py-3 border font-semibold">
 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($companies as $company)
                        <tr>
                           <td class="px-3 py-3 border text-left">{{$company->name}}</td>
                            <td class="px-3 py-3 border text-center">
                            <a href="#" class="px-2 py-2 bg-blue-700 rounded-md text-white">Assign Class</a>
                                      
                            </td>
                        </tr>

                        @empty
                        <tr><td colspan="3" class="text-danger text-center">No Companies</td></tr>
                        @endforelse
                    </tbody>
                </table>
        </div>
</div>

</div>

</div>
