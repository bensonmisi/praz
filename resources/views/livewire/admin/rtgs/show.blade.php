<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.rtgs')}}">Rtgs</a></div><div class="mr-2">/</div><div class="mr-2">RTGS Payments</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
   <div class="px-3 py-3 flex justify-between items-center border-b-2">
       <div class="text-2xl">
           {{$rtgs->company->name}}
       </div>
       <div class="text-2xl">
           {{$rtgs->status}}
       </div>
   </div>
       <table class="table-auto w-full">
           <thead>
               <tr>
                   <th class="px-3 py-3 border font-semibold text-left">
                     Invoice Number
                   </th>
                   <th class="px-3 py-3 border font-semibold text-left">
                   Bank
                   </th>
                   <th class="px-3 py-3 border font-semibold text-left">
                      Currency
                   </th>
                   <th class="px-3 py-3 border font-semibold text-left">
                    Amount
                   </th>
                   <th class="px-3 py-3 border font-semibold text-left">
                    Ref Number
                   </th>
                   <th class="px-3 py-3 border font-semibold text-left">
                   Status
                   </th>
                   <th class="px-3 py-3 border font-semibold text-left">
                  
                   </th>
               </tr>
           </thead>
           <tbody>
           <tr>
                   <th class="px-3 py-3 border font-semibold text-left">
                    {{$rtgs->invoice_number}}
                   </th>
                   <th class="px-3 py-3 border font-semibold text-left">
                   {{$rtgs->name}}
                   </th>
                   <th class="px-3 py-3 border font-semibold text-left">
                      @if(!is_null($rtgs->currency))
                        {{$rtgs->currency->name}}
                      @else
                      <span class="font-bold text-red-500">Undifined</span>
                      @endif
                   </th>
                   <th class="px-3 py-3 border font-semibold text-left">
                      {{$rtgs->amount}}
                   </th>
                   <th class="px-3 py-3 border font-semibold text-left">
                      {{$rtgs->refnumber}}
                   </th>
                   <th class="px-3 py-3 border font-semibold text-left">
                   {{$rtgs->status}}
                   </th>
                   <th class="px-3 py-3 border font-semibold text-left">
                       @if($rtgs->status =='PENDING')
                       <a href="{{route('can_edit_rtgs',$rtgs->id)}}" class="px-2 py-2 bg-blue-700 rounded-md text-white"><i class="fa fa-pencil"></i></a>                        
                       @endif
                       <a href="{{'/'.$rtgs->filename}}" class="px-2 py-2 bg-green-700 rounded-md text-white" target="_blank"><i class="fa fa-download"></i></a> 
                   </th>
                   
           </tbody>
       </table>
         
       <div class="px-3 py-3 flex justify-between items-center mt-10">
           <div class="text-2xl">
           Invoice Details
           </div>
           <div class="flex">
              @if($rtgs->status =='PENDING')
                 @if($rtgs->amount >= $this->getTotalInvoice())
              <button class="px-2 py-2 bg-green-700 rounded-md text-white" wire:click="process()"><i class="fa fa-check"></i></button> 
                 @else 
                 <div class="text-red-600">Total on invoice greater that on pop</div>
                 @endif
              @endif
           </div>
       </div>

       <table class="table-auto w-full">
           <thead>
               <tr>
                   <th class="px-3 py-3 border font-semibold text-left">
                       Invoice Number
                   </th>
                   <th class="px-3 py-3 border font-semibold text-left">
                      Category
                   </th>
                   <th class="px-3 py-3 border font-semibold text-left">
                     Currency
                   </th>
                   <th class="px-3 py-3 border font-semibold text-left">
                    Amount
                   </th>
                   <th class="px-3 py-3 border font-semibold text-left">
                   Status
                   </th>
                   <th class="px-3 py-3 border font-semibold text-center">
              
                   </th>
               </tr>
           </thead>
           <tbody>
               @forelse($rtgs->invoice as $invoice)
                <tr>
                <th class="px-3 py-3 border font-semibold text-left">
                      {{$invoice->invoice_number}}
                </th> 
                <th class="px-3 py-3 border font-semibold text-left">
                      {{$invoice->category->name}}({{$invoice->category->code}})
                </th> 
                <th class="px-3 py-3 border font-semibold text-left">
                      {{$invoice->currency->name}}
                </th> 
                <th class="px-3 py-3 border font-semibold text-left">
                      {{$invoice->cost}}
                </th> 
                <th class="px-3 py-3 border font-semibold text-left">
                      {{$invoice->status}}
                </th> 
                <th class="px-3 py-3 border font-semibold text-center">
                   
                       @if($invoice->status!='PAID')
                      <button class="px-2 py-2 bg-red-700 rounded-md text-white"><i class="fa fa-trash"></i></button> 
                       @endif 
                  
                </th>
                </tr>
               @empty
               <tr>
                   <td  colspan="5" class="px-3 py-3 border font-semibold text-center text-red-600">
                       No Invoice Data Found
                   </td>
               </tr>
               @endforelse
           </tbody>
       </table>
       <div class="mt-5">
           <div class="flex justify-between items-center">
           <div class="text-2xl">Comments</div>
             <div>
             <a href="{{route('can_comment_rtgs',$rtgs->id)}}" class="px-2 py-2 bg-green-700 rounded-md text-white"><i class="fa fa-plus"></i> Add Comment</a>  
             </div>
            </div>
           <div class="px-3 py-3 bg-gray-300 rounded-sm mt-5">
               @if(count($rtgs->comments) >0)
                @foreach($rtgs->comments as $comment)
               <div>{{$comment->comment}}</div>
               <div class="font-bold">{{$comment->user->name}} {{$comment->user->surname}}</div>
               @endforeach
               @else
                <span class="text-red-500">No Comments Found</span>
               @endif

           </div>

       </div>

</div>
</div>
