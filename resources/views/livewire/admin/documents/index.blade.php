<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">required Documents</div>
</div>
<div class="w-full bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
@include('partials.message')
<div class="flex justify-between items-center border-b-2"><div class="text-2xl ">Required Documents</div>
 <a href="{{route('can_add_document')}}" class="px-3 py-3 bg-green-600 rounded-md text-white hover:bg-green-400"><i class="fa fa-plus"></i> New</a></div>
      
                <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 border font-semibold text-left">Name</th>
                            <th class="px-3 py-3 border font-semibold text-left">locality</th>
                            <th class="px-3 py-3 border font-semibold text-left">Account type</th>
                            <th class="px-3 py-3 border font-semibold text-left">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($documents as $doc)
                        <tr>
                            <td class="px-3 py-3 border font-semibold text-left">{{$doc->name}}</td>
                            <td class="px-3 py-3 border font-semibold text-left">{{$doc->locality}}</td>
                            <td class="px-3 py-3 border font-semibold text-left">
                             @if(!is_null($doc->accounttype))
                            {{$doc->accounttype->name}}
                            @endif
                            </td>
                            <td class="px-3 py-3 border font-semibold text-center flex">
                             
                                   <a href="{{route('can_edit_document',$doc->id)}}" class="px-2 py-2 bg-blue-700 text-white"><i class="fa fa-pencil"></i></a>
                                   <a href="{{route('can_remove_document',$doc->id)}}" class="px-2 py-2 bg-red-700 text-white" ><i class="fa fa-trash"></i></a>
                              
                            </td>
                        </tr>

                        @empty
                        <tr><td colspan="2" class="text-danger text-center">No Accounttypes Added As Yet</td></tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
                </div>

                
            </div>
        </div>
    </div>
</div>

</div>
