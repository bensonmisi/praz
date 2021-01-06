<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Procurement returns</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class="px-4 py-4 flex justify-between items-center">
            <div class="text-2xl">Returns</div> 
            <a href="{{route('admin.returns.add')}}" class="px-3 py-3 bg-green-600 rounded-md text-white hover:bg-green-400"><i class="fa fa-plus"></i> New</a>
      
       </div>
        <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 border font-semibold text-left">Title</th>
                            <th class="px-3 py-3 border font-semibold text-left">Due date</th>
                            <th class="px-3 py-3 border font-semibold text-left">Responses</th>
                            <th class="px-3 py-3 border font-semibold">
 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($returns as $return)
                        <tr>
                           <td class="px-3 py-3 border text-left">{{$return->name}}</td>
                           <td class="px-3 py-3 border text-left">{{$return->due_date}}</td>
                           <td class="px-3 py-3 border text-left">{{count($return->uploads)}}</td>
                            <td class="px-3 py-3 border flex">
                            <a href="/returns/{{$return->templateUrl}}" target="_blank" class="px-2 py-2 bg-green-700 rounded-md mr-1 text-white"><i class="fa fa-download"></i></a>
                            <a href="{{route('admin.returns.edit',$return->id)}}" class="px-2 py-2 bg-blue-700 rounded-md text-white mr-1"><i class="fa fa-pencil"></i></a>
                            <button class="px-2 py-2 bg-red-700 rounded-md text-white mr-1" wire:click="remove({{$return->id}})"><i class="fa fa-trash"></i></button>
                            <a href="{{route('admin.returns.response',$return->id)}}" class="px-2 py-2 bg-orange-700 rounded-md text-white mr-1"><i class="fa fa-check"></i></a>
   
                            </td>
                        </tr>

                        @empty
                        <tr><td colspan="3" class="text-red-600 border px-3 py-3 text-center">No Returns Created</td></tr>
                        @endforelse
                    </tbody>
                </table>
</div>

</div>

</div>
