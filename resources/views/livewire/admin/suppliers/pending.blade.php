<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div>       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Suppliers Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Pending Suppliers</div>
</div>
<div class="bg-white px-3 py-5 container mx-auto rounded-sm shadow-md border border-solid m-1 border-gray-200">
<table class="table-auto w-full">
  <thead>
    <tr>
    <th class="px-3 py-3 border font-semibold text-left">Company Name</th>
    <th class="px-3 py-3 border font-semibold text-left"> Status</th>
    <th class="px-3 py-3 border font-semibold text-left"> Created On</th>
    <th class="px-3 py-3 border font-semibold text-left"> Assigned On</th>
    <th class="px-3 py-3 border font-semibold text-left"></th>
    </tr>
  </thead>
  <tbody>
     @for($i=0 ; $i < count($pending) ; $i++)
    
     <tr>
        <td class="px-3 py-3 border text-left">
          {{$pending[$i]->name}}
        </td>
      
        <td class="px-3 py-3 border text-left">
        {{$pending[$i]->status}}
        </td>
        <td class="px-3 py-3 border text-left">
        {{Carbon\Carbon::parse($pending[$i]->created_at)->diffForHumans()}}
        </td>
        <td class="px-3 py-3 border text-left">
            @if(!is_null($pending[$i]->assigned_on))
              {{Carbon\Carbon::parse($pending[$i]->assigned_on)->diffForHumans()}}
            @else
            <span class="text-red-600 font-semibold">Pending</span>
            @endif
        </td>
      
         <td class="px-3 py-3 border text-left">
             <a href="{{route('can_view_suppliers',$pending[$i]->company_id)}}" class="px-2 py-2 bg-blue-700 text-white rounded-sm">View</a>
         </td>
     </tr>

      @endfor
    
  </tbody>
</table>
</div>
</div>
