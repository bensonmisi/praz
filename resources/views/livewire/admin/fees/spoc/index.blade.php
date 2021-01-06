<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">SPOC Fees</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class="px-4 py-4 flex justify-between items-center">
            <div class="text-2xl">SPOC Fees</div> 
            <a href="{{route('can_add_fees_spoc')}}" class="px-3 py-3 bg-green-600 rounded-md text-white hover:bg-green-400"><i class="fa fa-plus"></i> New</a>
        </div>
        <table class="table-auto w-full">
                    <thead> 
                        <tr>
                            <th class="px-3 py-3 border font-semibold text-left">Currency</th>
                            <th class="px-3 py-3 border font-semibold text-left">Locality</th>
                            <th class="px-3 py-3 border font-semibold text-left">Threshold</th>
                            <th class="px-3 py-3 border font-semibold text-left">Fee</th>
                            <th class="px-3 py-3 border font-semibold">
 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    @forelse($fees as $price)
                        <tr>
                           <td class="px-3 py-3 border text-left">{{$price->currency->name}}</td>
                           <td class="px-3 py-3 border text-left">{{$price->locality}}</td>
                           <td class="px-3 py-3 border text-left">{{$price->threshold->value}}</td>
                           <td class="px-3 py-3 border text-left">{{$price->value}}</td>
                            <td class="px-3 py-3 border text-center">
                               <a href="{{route('can_edit_fees_spoc',$price->id)}}" class="px-2 py-2 bg-blue-700 rounded-md text-white"><i class="fa fa-pencil"></i></a>
                               <button class="px-2 py-2 bg-red-700 rounded-md text-white" wire:click="remove({{$price->id}})" ><i class="fa fa-trash"></i></button>
                                
                            </td>
                        </tr>

                        @empty
                        <tr><td colspan="5" class="text-danger text-center">No Fees Added As Yet</td></tr>
                        @endforelse
                    </tbody>
                </table>
</div>

</div>

</div>
