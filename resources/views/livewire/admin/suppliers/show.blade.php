<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div>
       <div class="mr-2">/</div>
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('can_suppliers_pending')}}">Pending Suppliers</a></div><div class="mr-2">/</div>
       <div class="mr-2">Show</div>
</div>
<div class="bg-white px-3 py-5 container mx-auto rounded-sm shadow-md border border-solid m-1 border-gray-200">
    <div class="text-2xl px-3 py-3 bg-blue-600 text-white">{{$company->name}} ({{$company->regnumber}})</div>
    <div class="bg-gray-200 mt-10 mb-5 px-5 py-5">
        
        @if(!is_null($company->supplier_jobs))
              @if($company->supplier_jobs->status=='PENDING')
                @if($company->supplier_jobs->user_id == Auth::guard('admin')->user()->id)
                
                <div class="w-full px-3 mb-6 md:mb-0">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                  Select Status
                  </label>
                  <select class="appearance-none border @error('status') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status" wire:model.lazy="status">
                  <option></option>
                  <option value="VERIFIED">VERIFIED</option>
                  <option value="DENIED">DENIED</option>                 
                  </select>
                  @error('status')
                    <span class="text-red-600" role="alert">
                      <strong>{{ $message }}</strong>
                    </span>
                  @enderror
                </div>
                     @if($status=='DENIED')
                    <div class="w-full px-3 mt-6 mb-6 md:mb-0">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                      Reason(<span class="text-xs text-red-500">If Status is DENIED</span>)
                      </label>
                      <textarea rows="10" class="appearance-none border @error('comment') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comment"wire:model.lazy="comment"></textarea>
                      @error('comment')
                        <span class="text-red-600" role="alert">
                          <strong>{{ $message }}</strong>
                        </span>
                      @enderror
                    </div>
                     @endif
                     <div class="flex justify-end items-center mt-4">
       
                   <button class="px-3 py-3 bg-green-600 rounded-md hover:bg-green-400 text-white" wire:click='process'>Submit</button>
        </div>


       

                @else
                <div>
                  <div>Agent</div>
                  <div>{{$company->supplier_jobs->user->name}} {{$company->supplier_jobs->user->surname}}</div>
                </div>

                @endif
                @else
                <div>Approved</div>
                @endif
        @else
      <div class=" px-4 py-4 flex justify-center">
        <a href="{{route('can_assign_supplier_jobs',$company->id)}}" class="px-3 py-3 bg-green-600 text-white hover:bg-green-400">Assign User</a>
      </div>
        @endif

    </div>
     <div class="text-2xl mt-8 mb-8">Required Account Documents</div>
     <div class="flex">
         <div class="w-2/3"> 
    <table class="table-auto w-full">
       <thead>
           <tr><th class="px-3 py-3 border font-semibold text-left">Document Name</th><th class="px-3 py-3 border font-semibold text-left">Status</th> <th class="px-3 py-3 border font-semibold text-left"></th></tr>
       </thead>
       <tbody>
           @forelse($company->documentlist as $doc)
            @if($doc->locality == $company->locality)
             <tr>
                 <td  class="px-3 py-3 border text-left">{{$doc->name}}</td>
                 <td  class="px-3 py-3 border text-left">
                     @php $document = $doc->company->where(['company_id'=>$company->id,'document_id'=>$doc->id])->first();  @endphp
                     @if(!is_null($document))
                     <span>{{$document->status}}</span>
                     @else
                    <span>Not uploaded</span>
                     @endif
                    </td>
                    <td  class="px-3 py-3 border text-left">
                    @if(!is_null($document))
                      <a href="/{{$document->path}}" target="_blank" class="bg-green-600 px-2 py-2 text-white"><i class="fa fa-download"></i></a>
                    @endif
                    </td>
                    
             </tr>
             @endif
           @empty
             <tr><td class="px-3 py-3 border font-semibold text-center text-red-500">No Account Documents</td></tr>
           @endforelse
       </tbody>
    </table>
         </div>
         <div class="w-1/3">
         <div class="bg-blue-700 px-2 py-2 text-white">Comments</div>
            @forelse($company->supplier_comments as $comment)
            
            <div class="px-5 py-5  border text-center">
             <div class="font-bold"> {{$comment->comment}}</div>
             <div class="text-xs">admin: {{$comment->administrator->name}}</div>
            </div>
              
            @empty
             <div class="px-5 py-5 bg-gray-300 text-gray-700 border text-center">No Comments Found</div>
            @endforelse
        </div>
     </div>
</div>
</div>
