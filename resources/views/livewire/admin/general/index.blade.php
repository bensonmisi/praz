<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">General Exchange Rate</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class="px-4 py-4 flex justify-between items-center">
            <div class="text-2xl">General Exchange Rates</div> 
            <a href="{{route('can_add_general')}}" class="px-3 py-3 bg-green-600 rounded-md text-white hover:bg-green-400"><i class="fa fa-plus"></i> New</a>
        </div>
        <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 border font-semibold text-left">Base Currency</th>
                            <th class="px-3 py-3 border font-semibold text-left">Secondary Currency</th>
                            <th class="px-3 py-3 border font-semibold text-left">Value</th>
                            <th class="px-3 py-3 border font-semibold">
                            Created By
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($general as $ex)
                        <tr>
                           <td class="px-3 py-3 border text-left">{{$ex->currency->name}}</td>
                           <td class="px-3 py-3 border text-left">ZWL</td>
                           <td class="px-3 py-3 border text-left">{{$ex->value}}</td>
                           <td class="px-3 py-3 border text-left">{{$ex->user->name}} {{$ex->user->surname}}</td>
                          
                        </tr>

                        @empty
                        <tr><td colspan="4" class="text-danger text-center">No Supplier Exchange Rate Added As Yet</td></tr>
                        @endforelse
                    </tbody>
                </table>
</div>

</div>

</div>
