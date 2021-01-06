<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('registration_category')}}">Registrations </a></div><div class="mr-2">/</div><div class="mr-2">Select Category</div>
</div>
@include('partials.message')

@if($showlist)
  <div class="w-full sm:w-4/6 bg-gray-100 mx-auto mt-4">
  <div wire:loading >
  <div class="w-full text-center px-4 py-4  text-green-700 text-lg">
   Please wait...
  </div>
</div>
  <div>
  <input type="text" class="w-full px-4 py-4 border border-solid border-gray-400" wire:model='query' placeholder="Filter Category List"/>
  </div>
  <div class="bg-white px-3 py-3 rounded-sm shadow-sm"> 
  <table class="table-auto w-full">
                    <thead>
                        <tr><th class="px-3 py-3 border">Code</th><th class="px-3 py-3 border">Description</th><th class="px-3 py-3 border"></th></tr>
                        @if($categories)
                        
                        @forelse($categories as $cat)
                         <tr><td class="px-3 py-3 border">{{$cat->code}}</td><td class="px-3 py-3 border">{{$cat->name}}</td><td class="px-3 py-3 border"><button wire:click="add({{$cat->id}},'{{$cat->name}}','{{$cat->code}}')" class="px-2 py-2 bg-green-600 text-white rounded-sm"><i class="fa fa-plus"></i> Add</button></td></tr>
                        @empty
                        <tr><td colspan="3" class="text-danger text-center"> No Category Found</td></tr>
                        @endforelse
                        @endif
                    </thead>
                    <tbody>
                     
                    </tbody>
                </table>
  </div>
  </div>
@endif
  
@if($showconfirm)
        <div class="w-full sm:w-1/2 bg-white mx-auto mt-4">
                     <div class="bg-green-600 text-white px-3 py-3 text-2xl">Category selection Confirmation</div>
                      <div class="px-3 py-3">
                             <div class="bg-red-400 px-3 py-3 text-center rounded-md shadow-sm text-white">Please carefully read the category description and code before proceeding with the registration process</div>
                            <div class="text-xl font-bold text-gray-700 mt-4 mb-2">{{$catName}}({{$catCode}})</div>
                             
                           
                          <!--   <div class="w-full p-3 mb-6 md:mb-0">
                              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Select  Registration Type</label>
                              <select  class="appearance-none border @error('type') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sector" wire:model.lazy="type" required>
                              <option></option>
                              <option value="NEW">NEW</option>
                              <option value="RENEW">RENEWAL</option>               
                              </select>
                              @error('type')
                                              <span class="text-red-500" role="alert">
                                                  <strong>{{ $message }}</strong>
                                              </span>
                                  @enderror
                          </div> -->
                        
                        <div class="flex justify-between items-center">
                          <div>
                            <a href="#" class="bg-red-500 px-2 py-2 text-white rounded-sm">Cancel</a>
                          </div>
                          <div>
                            <button class="bg-green-500 px-2 py-2 text-white rounded-sm" wire:click="register">Continue</button>
                          </div>
                        </div>
                      </div>
                  
                
        </div>

        @endif

</div>