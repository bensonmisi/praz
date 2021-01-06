<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('registration_category')}}">Registrations </a></div><div class="mr-2">/</div><div class="mr-2">Select Category</div>
</div>
 @include('partials.message')
 <div class=" w-4/6 mx-auto bg-white px-3 py-3 border border-solid border-gray-300 rounded-sm shadow-sm mt-4">
 <div class="bg-gray-100 px-3 py-3 rounded-sm shadow-sm flex justify-between items-center">
     <div>
         Supplier Category
     </div>
     <div>
         <a href="{{route('registration_category_add')}}" class="bg-blue-700 px-2 py-2 rounded-md shadow-sm text-white hover:bg-blue-300">Add Category</a>
     </div>
 </div>
 @if(count($invoices)>0)
 <div>
 <?php $total = $this->calculate_total(); ?>
 <table class="table-auto w-full">
                    <thead>
                        <tr><th class="px-3 py-3 border">Name</th><th class="px-3 py-3 border">Currency</th><th class="px-3 py-3 border">Cost</th></tr>
                    </thead>
                    <tbody>
                        @forelse($invoices as $inv)
                        <tr wire:key="{{$inv->id}}"><td class="px-3 py-3 border text-center">{{$inv->category->name}}</td>
                        <td class="px-3 py-3 border text-center">
                           {{$inv->currency->name}}
                        </td>
                        <td class="px-3 py-3 border text-center">
                            ${{$inv->cost}}
                            @if($total == 0)
                            <button class="bg-white p-2 rounded-full" wire:click="deleteItem({{$inv->id}})"><i class="fa fa-times text-red-500"></i></button></td>
                           @endif
                    </tr>
                        @empty
                        <tr><td colspan="3" class="text-red-500 text-center">No Category Added To Invoice As Yet</td></tr>
                        @endforelse
                        @if(count($invoices)>0)
                       
                        <tr><td colspan="2" class="px-3 py-3 border text-blue-600 text-center"><h5>Total Due</h5></td><td class="px-3 py-3 border text-center">${{$total}}</td></tr>
                        <tr><td colspan="2" class="px-3 py-3 border text-green-600 text-center"><h5>Total Paid</h5></td><td class="px-3 py-3 border text-center">${{$paid}}</td></tr>
                        <tr><td colspan="2" class="px-3 py-3 border text-red-600 text-center"><h5>Balance Due</h5></td><td class="px-3 py-3 border text-center">${{$total-$paid}}</td></tr>
                   
                              @endif
                    </tbody> 
                </table>
 </div>
 <div class="mt-4 px-4 py-4 flex justify-between items-center">
     <div>
     <a href="{{route('invoice_print',$invoices[0]->invoice_number)}}" class="bg-blue-600 px-3 py-3 rounded-sm text-white :hover:bg-blue-400" target="_blank">View invoice</a>
     </div>
     <div>
     <a href="{{route('registration_payment')}}" class="bg-green-600 px-3 py-3 rounded-sm text-white :hover:bg-green-400">Make Payment</a>
   
     </div>

 </div>
 @else
 <div class="text-center px-3 py-3 text-red-500 text-lg">No Category Added To Invoice As Yet</div>
 @endif

 </div>
</div>