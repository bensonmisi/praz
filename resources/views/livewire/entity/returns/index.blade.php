<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Procurement Plans</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm w-full mx-auto shadow-md border border-solid m-1 border-gray-200">
@include('partials.message')
<div class="flex justify-between items-center border-b border-solid border-gray-500">  
<div class="px-3 py-3 text-2xl text-gray-700">Procurement Returns</div>
</div>
    <div>
    <table class="table-auto w-full">
        <thead>
            <tr><th class="px-3 py-3 bg-gray-500 bordered">Title</th><th class="px-3 py-3 bg-gray-500 bordered">Due Date</th><th class="px-3 py-3 bg-gray-500 bordered">Upload Status</th><th class="px-3 py-3 bg-gray-500 bordered"></th></tr>
         </thead>
         <tbody>
             @forelse($returns as $rtrn)
               <tr>
                   <td class="px-3 py-3 border text-center">{{$rtrn->name}}</td>
                   <td class="px-3 py-3 border text-center">{{$rtrn->due_date}}</td>
                   <td class="px-3 py-3 border text-center">
                       @if(count($rtrn->uploads)==0)
                        <span class="text-center text-red-500">PENDING</span>
                       @else
                       <span class="text-center text-green-700">UPLOADED</span>
                       @endif
                    </td>
                   <td class="px-3 py-3 border text-center">
                   @if(count($rtrn->uploads)==0)
                      <div>
                       <a href="{{route('returns_document',$rtrn->id)}}" target="_blank" class="bg-green-700 block px-2 py-2 text-white text-center tracking-tighter"><i class="fa fa-download"></i> Download Template</a>
                      </div>
                      <div class="mt-2">
                       <a href="{{route('returns.upload',$rtrn->id)}}"  class="bg-blue-700 px-2 py-2 block text-white text-center tracking-tighter"><i class="fa fa-upload"></i> Upload Template</a>
                      </div>
                    @else
                    <div>
                       <a href="{{route('returns.comment',$rtrn->id)}}" class="bg-green-700 block px-2 py-2 text-white text-center tracking-tighter"><i class="fa fa-comments"></i> Comments({{count($rtrn->comments)}})</a>
                      </div>
                    @endif
                    </td>
               </tr>
             @empty

             <tr>
                 <td colspan="2" class="px-3 py-3 text-center text-red-600"> No Request for procurement returns found</td>
             </tr>

             @endforelse
         </tbody>

    </table>
</div>
</div>
</div>
</div>
