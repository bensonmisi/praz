<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Documents</div>
</div>

@include('partials.message')

<div wire:loading class="text-green-600 px-4 py-4 w-1/2 mx-auto"> Please wait....  </div>

<div class="w-full sm:w-5/6 mx-auto px-3 py-4 bg-white rounded-sm mt-4 shadow-md border border-solid border-gray-300">

            @if($showlist)
                
                <table class="table-auto w-full">
                    <thead>
                        <tr><th class="border bg-gray-300 text-gray-700 px-2 py-2">Name</th><th class="border bg-gray-300 text-gray-700 px-2 py-2">Status</th><th class="border bg-gray-300 text-gray-700 px-2 py-2">Action</th></tr>
                        </thead>
                        <tbody>
                        @forelse($documents as $doc)
                        <tr wire:key="{{$doc->id}}"><td class="px-3 py-3 border text-center">{{$doc->name}}</td>
                        <td class="px-3 py-3 border text-center">
                            @if($doc->company)
                          {{$doc->company->status}}
                          @endif
                        </td>
                        <td class="px-3 py-3 border text-center">
                        @if(!is_null($doc->company))
                        <button class="bg-green-500 px-2 py-2 rounded-sm shadow-sm text-white" wire:click="uploadForm({{$doc->id}},'{{$doc->name}}')">
                         upload
                        </button>
                        @else
                            <h4><i class="fas fa-thumbs-up text-success"></i></h4>
                        @endif
                        </td>
                    </tr>
                        @empty
                        <tr><td colspan="4" class="text-danger text-center px-3 py-3 border text-red-500">No Documents Found Please Contact Support</td></tr>
                        @endforelse
                        </tbody>
                   
                </table>
               
                @endif
                @if($showform)
                <form  wire:submit.prevent="save">  
                <div class="w-full p-3 mb-6 md:mb-0">
                              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Document</label>
                              <input type="file"  class="appearance-none border @error('file') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="file" wire:model.lazy="file" required/>
                             
                              @error('file')
                                              <span class="text-red-500" role="alert">
                                                  <strong>{{ $message }}</strong>
                                              </span>
                                  @enderror
                          </div>              
               
                
                          <div class="flex justify-between items-center">
                          <div>
                            <a href="#" class="bg-red-500 px-2 py-2 text-white rounded-sm">Cancel</a>
                          </div>
                          <div>
                            <button class="bg-green-500 px-2 py-2 text-white rounded-sm"  type="submit">Continue</button>
                          </div>
                        </div>
                  
              </form>
                @endif
</div>
     
</div>
