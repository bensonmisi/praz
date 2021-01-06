<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.gazzate.index')}}">Gazzates</a></div><div class="mr-2">/</div><div class="mr-2">Show List</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
    <div class="flex justify-between items-center bg-blue-800 text-white px-3 py-3">
        <div>
        <div class="text-2xl">{{$gazzate->name}}</div>
        <div class="text-xs text-gray-900">From:{{$gazzate->from}}  To: {{$gazzate->to}}</div>
        </div>
        <div>
        <a href="{{route('can_export_gazzate',$gazzate->id)}}"  target="_blank" class="px-2 py-2 bg-green-700 rounded-md text-white">Export</a>
                        
        </div>
    </div>
     <table class="table-auto w-full">
         <thead>
             <tr>
                 <th class="px-3 py-3 border font-semibold text-left">Code</th>
                 <th class="px-3 py-3 border font-semibold text-left">Count</th>
            </tr>
         </thead>
         <tbody>
     @foreach($suppliers as $key=>$value)
     <tr>
                 <td class="px-3 py-3 border font-semibold text-left">{{$key}}</td>
                 <td class="px-3 py-3 border font-semibold text-left">{{count($value)}}</td>
     </tr>
     
     @endforeach
         </tbody>
     </table>
</div>
</div>
