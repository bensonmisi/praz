<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.customer')}}">Customers</a></div><div class="mr-2">/</div><div class="mr-2">Show</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
@include('partials.message')
    <div class="flex justify-between items-center">
        <div class="text-2xl px-3 py-3">Company Details</div>
        <div>
        <a href="{{route('can_edit_customer',$customer->id)}}" class="bg-blue-700 px-2 py-2 text-white rounded-md shadow-md hover:bg-blue-500">Edit</a>
                        
        </div>
    </div>
    <table class="table-auto w-full">
        <tbody>
           <tr><th class="px-3 py-3 border font-semibold text-left">Name</th><td class="px-3 py-3 border font-semibold text-left">{{$customer->name}}</td></tr>
                            <tr><th class="px-3 py-3 border font-semibold text-left">Regnumber</th><td class="px-3 py-3 border font-semibold text-left">{{$customer->regnumber}}</td></tr>
                            <tr><th class="px-3 py-3 border font-semibold text-left">Country</th><td class="px-3 py-3 border font-semibold text-left">{{$customer->country}}</td></tr>
                            <tr><th class="px-3 py-3 border font-semibold text-left">City</th><td class="px-3 py-3 border font-semibold text-left">{{$customer->city}}</td></tr>
                            @if(!is_null($customer->contacts))
                            <tr><th class="px-3 py-3 border font-semibold text-left">Phones</th><td class="px-3 py-3 border font-semibold text-left">{{$customer->contacts->phones}}</td></tr>
                            <tr><th class="px-3 py-3 border font-semibold text-left">emails</th><td class="px-3 py-3 border font-semibold text-left">{{$customer->contacts->emails}}</td></tr>
                            <tr><th class="px-3 py-3 border font-semibold text-left">address</th><td class="px-3 py-3 border font-semibold text-left">{{$customer->contacts->address}}</td></tr>
                            @endif
        </tbody>
    </table>
    <div class="text-2xl px-3 py-3  bg-blue-700 text-white mt-10">Users</div>
    <table class="table-auto w-full">
        <thead>
        <tr>
        <th class="px-3 py-3 border font-semibold text-left">Name</th>
        <th class="px-3 py-3 border font-semibold text-left">Email</th>
        <th class="px-3 py-3 border font-semibold text-left">Code</th>
        <th class="px-3 py-3 border font-semibold text-left">Status</th>
        <th class="px-3 py-3 border font-semibold text-left">Created At</th>
        <th class="px-3 py-3 border font-semibold text-left"></th>
        </tr>
        </thead>
        <tbody>
        @forelse($customer->users as $user)
         <tr>
             <td class="px-3 py-3 border font-semibold text-left">{{$user->name}} {{$user->surname}}</td>
             <td class="px-3 py-3 border font-semibold text-left">{{$user->email}}</td>
             <td class="px-3 py-3 border font-semibold text-left">{{$user->authcode}}</td>
             <td class="px-3 py-3 border font-semibold text-left">{{$user->status}}</td>
             <td class="px-3 py-3 border font-semibold text-left">{{$user->created_at}}</td>
             <td class="px-3 py-3 border font-semibold text-left"><button class="px-2 py-2 bg-blue-600 rounded-md hover:bg-blue-400 text-white" wire:click='resetPWD({{$user->id}})'>Reset</button></td>
         </tr>
        @empty
        <tr>
        <td class="px-3 py-3 border font-semibold text-center text-red-500" colspan="6">No Users Found</td></tr>
        </tr>
        @endforelse
        </tbody>
    </table>
    <div class="text-2xl px-3 py-3  bg-blue-700 text-white mt-10">Documents</div>
    <table class="table-auto w-full">
        <thead>
        <tr>
        <th class="px-3 py-3 border font-semibold text-left">Name</th>
        <th class="px-3 py-3 border font-semibold text-left">locality</th>
        <th class="px-3 py-3 border font-semibold text-left">Status</th>
        </tr>
        </thead>
        <tbody>
        @if(count($customer->documents) >0)
        @forelse($customer->documents as $doc)
         <tr>
             <td class="px-3 py-3 border font-semibold text-left">{{$doc->name}}</td>
             <td class="px-3 py-3 border font-semibold text-left">{{$doc->locality}}</td>
             <td class="px-3 py-3 border font-semibold text-left">  
                   @if($doc->company)
                        <span class=" @if($doc->company->status=='APPROVED') text-green-600 @else text-orange-600 @endif">  {{$doc->company->status}} </span>
                          @endif
                </td>
         </tr>
        @empty
        <tr>
        <td class="px-3 py-3 border font-semibold text-center text-red-500" colspan="3">No Documents Found</td></tr>
        </tr>
        @endforelse
        @endif
        </tbody>
    </table>
    <div class="text-2xl px-3 py-3 bg-blue-700 text-white mt-10">Registrations</div>
    <table class="table-auto w-full">
        <thead>
        <tr>
        <th class="px-3 py-3 border font-semibold text-left">Code</th>
        <th class="px-3 py-3 border font-semibold text-left">Year</th>
        <th class="px-3 py-3 border font-semibold text-left">Status</th>
        </tr>
        </thead>
        <tbody>
        @forelse($customer->registrations as $reg)
         <tr>
             <td class="px-3 py-3 border font-semibold text-left">
                 <div>{{$reg->category->code}}</div>
                 <div class="text-xs text-gray-500">{{$reg->category->name}}</div>
              </td>
             <td class="px-3 py-3 border font-semibold text-left">{{$reg->expire_year}}</td>
             <td class="px-3 py-3 border font-semibold text-left">
             <span class=" @if($reg->status=='APPROVED') text-green-600 @else text-orange-600 @endif">    
             {{$reg->status}}
             </span>
            </td>
        </tr>
        @empty
        <tr>
        <td class="px-3 py-3 border font-semibold text-center text-red-500" colspan="3">No Supplier Registrations Found</td></tr>
        </tr>
        @endforelse
        </tbody>
    </table>
    <div class="text-2xl px-3 py-3 bg-blue-700 text-white mt-10">Online Payments</div>
    <table class="table-auto w-full">
        <thead>
        <tr>
        <th class="px-3 py-3 border font-semibold text-left">Created At</th>
        <th class="px-3 py-3 border font-semibold text-left">Invoice Number</th>
        <th class="px-3 py-3 border font-semibold text-left">Type</th>
        <th class="px-3 py-3 border font-semibold text-left">Mode</th>
        <th class="px-3 py-3 border font-semibold text-left">Amount</th>
        <th class="px-3 py-3 border font-semibold text-left">Status</th>
        <th class="px-3 py-3 border font-semibold text-left">Action</th>
        </tr>
        </thead>
        <tbody>
        @forelse($customer->onlinepayments  as $pay)
         <tr>
             <td class="px-3 py-3 border font-semibold text-left">
                 <div>{{$pay->created_at}}</div>
              </td>
             <td class="px-3 py-3 border font-semibold text-left">{{$pay->invoice_number}}</td>
             <td class="px-3 py-3 border font-semibold text-left">{{$pay->type}}</td>
             <td class="px-3 py-3 border font-semibold text-left">{{$pay->mode}}</td>
             <td class="px-3 py-3 border font-semibold text-left">{{$pay->amount}}</td>
             <td class="px-3 py-3 border font-semibold text-left">
             <span class=" @if($pay->status=='APPROVED') text-green-600 @else text-orange-600 @endif">    
             {{$pay->status}}
             </span>
            </td>
             <td class="px-3 py-3 border font-semibold text-left">
             @if($pay->status =='PENDING' || $pay->status =='sent' || $pay->status =='created' )
             <button class="px-2 py-2 bg-blue-600 rounded-md hover:bg-blue-400 text-white" wire:click='checkPayment({{$pay->id}})'>Check</button>
             @endif
            </td>
        </tr>
        @empty
        <tr>
        <td class="px-3 py-3 border font-semibold text-center text-red-500" colspan="3">No Supplier Registrations Found</td></tr>
        </tr>
        @endforelse
        </tbody>
    </table>
    <div class="text-2xl px-3 py-3 bg-blue-700 text-white mt-10">RTGS Payments</div>
    <table class="table-auto w-full">
        <thead>
        <tr>
        <th class="px-3 py-3 border font-semibold text-left">Created At</th>
        <th class="px-3 py-3 border font-semibold text-left">Invoice Number</th>
        <th class="px-3 py-3 border font-semibold text-left">Type</th>
        <th class="px-3 py-3 border font-semibold text-left">Amount</th>
        <th class="px-3 py-3 border font-semibold text-left">Status</th>
        <th class="px-3 py-3 border font-semibold text-left">Comment</th>
        </tr>
        </thead>
        <tbody>
        @forelse($customer->rtgs as $pay)
         <tr>
             <td class="px-3 py-3 border font-semibold text-left">
                 <div>{{$pay->created_at}}</div>
              </td>
             <td class="px-3 py-3 border font-semibold text-left">{{$pay->invoice_number}}</td>
             <td class="px-3 py-3 border font-semibold text-left">{{$pay->type}}</td>
             <td class="px-3 py-3 border font-semibold text-left">{{$pay->amount}}</td>
             <td class="px-3 py-3 border font-semibold text-left">
             <span class=" @if($pay->status=='APPROVED') text-green-600 @else text-orange-600 @endif">    
             {{$pay->status}}
             </span>
            </td>
             <td class="px-3 py-3 border text-left">
                 @if(count($pay->comments)>0)
                    @foreach($pay->comments as $comment)
                     <div class="text-xs px-2 py-2 rounded-sm border mt-2 bg-gray-300 text-gray-700">
                        <div> {{$comment->comment}}</div>
                        <div>Comment By: <span class="font-bold">{{$comment->user->name}} {{$comment->user->name}}</span></div>
                    </div>
                    @endforeach
            
                  @endif
            </td>
        </tr>
        @empty
        <tr>
        <td class="px-3 py-3 border font-semibold text-center text-red-500" colspan="3">No Supplier Registrations Found</td></tr>
        </tr>
        @endforelse
        </tbody>
    </table>
</div>

</div>