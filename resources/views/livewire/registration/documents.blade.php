<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Registrations</div><div class="mr-2">/</div><div>Documents</div>
</div>
<div class=" bg-orange-400 text-gray-700 text-xl  mx-auto mt-2 px-3 py-3  shadow-sm border">
Please upload the following  account documents inorder to continue with the  registration process 
</div>
@include('partials.message')
<div class="bg-white px-3 py-3 border border-solid border-gray-200 rounded-sm shadow-sm">
<table class="table-auto w-full">
                    <thead>
                        <tr><th class="px-3 py-3 border">Name</th><th class="px-3 py-3 border">Status</th><th class="px-3 py-3 border">Action</th></tr>
                     </thead>
                        <tbody>
                        @forelse($documents as $doc)
                        <tr wire:key="{{$doc->id}}">
                            <td class="px-3 py-3 border">{{$doc->name}}</td>
                        <td class="px-3 py-3 border">
                            @if(!is_null($doc->company))
                             <span class="text-green-600">Uploaded</span>
                            @else
                            <span class="text-red-500">Not Uploaded</span>
                            @endif
                        </td>
                        <td class="px-3 py-3 border">
                        @if(is_null($doc->company))
                        <a href="{{route('registration_document_upload',$doc->id)}}" class="bg-blue-600 px-3 py-3 text-white  rounded-sm shadow-sm hover:bg-blue-300">
                            upload
                        </a>
                        @else
                            <h4><i class="fa fa-thumbs-up text-green-500"></i></h4>
                        @endif
                        </td>
                    </tr>
                        @empty
                        <tr><td colspan="4" class="text-red-500 text-center">No Documents Found Please Contact Support</td></tr>
                        @endforelse
                        </tbody>
                   
                </table>
</div>
</div>