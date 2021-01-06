<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Procurement Plans</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class="px-4 py-4 flex justify-between items-center">
            <div class="text-2xl">ProcurementPlans</div> 
       </div>
        <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 border font-semibold text-left">Entity Name</th>
                            <th class="px-3 py-3 border font-semibold text-left">Year</th>
                            <th class="px-3 py-3 border font-semibold">
 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($plans as $plan)
                        <tr>
                           <td class="px-3 py-3 border text-left">{{$plan->company->name}}</td>
                           <td class="px-3 py-3 border text-left">{{$plan->year}}</td>
                            <td class="px-3 py-3 border text-center">
                            <a href="/plans/{{$plan->company->id}}/{{$plan->file}}" target="_blank" class="px-2 py-2 bg-blue-700 rounded-md text-white"><i class="fa fa-download"></i></a>
                                    
                            </td>
                        </tr>

                        @empty
                        <tr><td colspan="3" class="text-red-600 border px-3 py-3 text-center">No Procurement Plans</td></tr>
                        @endforelse
                    </tbody>
                </table>
</div>

</div>

</div>
