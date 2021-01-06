<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">New Procurement Notice</div>
</div>
 @include('partials.message')

 <div class="w-5/6 mx-auto bg-white rounded-md shadow-md border mt-4">
 <div class="bg-blue-700 px-3 py-3 text-white">New Procurement Notice</div>

<div class="w-full sm:flex justify-between items-center">
 <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Notice Number
      </label>
      <input class="appearance-none border @error('tendernumber') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tendernumber" type="text" wire:model.lazy="tendernumber">
      @error('tendernumber')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
 </div>
 <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
     Procurement Type
      </label>
      <select class="appearance-none border @error('type') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type"wire:model.lazy="type">
       <option></option>  
      @foreach($types as $type)
           <option value="{{$type->id}}">{{$type->name}}</option>
         @endforeach
      </select>
      @error('type')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
 </div>
</div>
<div class="w-full sm:flex justify-between items-center">
 <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      Currency of Trade
      </label>
      <select class="appearance-none border @error('currency') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="currency"  wire:model.lazy="currency">
                                <option></option>  
                               @foreach($currencylist as $current)
                                    <option value="{{$current->id}}">{{$current->name}}</option>
                                @endforeach
      </select>
      @error('currency')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
 </div>
 <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
   Closing date
      </label>
      <input type="date" class="appearance-none border @error('close_date') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="close_date"wire:model.lazy="close_date"/>
      
      @error('close_date')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
 </div>
</div>
<div class="w-full sm:flex justify-between items-center">
 <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      Product Classification
      </label>
      <select class="appearance-none border @error('classification') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="classification"  wire:model.lazy="classification">
                            <option></option>  
                             @foreach($classifications as $class)
                                    <option value="{{$class->id}}">{{$class->name}}</option>
                                @endforeach
      </select>
      @error('classification')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
 </div>
 <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
   Bidding Period
      </label>
      <select class="appearance-none border @error('period') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="period"  wire:model.lazy="period">
          <option></option>  
          <option value="30"> < 30 days</option>
         <option value="60"> 60 days</option>
         <option value="60"> 90 days</option>
        
      </select>
      @error('period')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
 </div>
</div>
<div class="w-full sm:flex justify-between items-center">
 <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      Bid Value 
      </label>
      <input type="number" class="appearance-none border @error('bidvalue') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bidvalue"  wire:model.lazy="bidvalue"/>
      
      @error('bidvalue')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
 </div>
 <div class="w-full p-3 mb-6 md:mb-0">
 <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      Bid Bond 
      </label>
      <input type="number" class="appearance-none border @error('bidbond') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bidbond"  wire:model.lazy="bidbond"/>
      
      @error('bidbond')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
 </div>
</div>
<div class="m-2 bg-gray-100 px-3 py-3 shadow-md rounded-md border">
<div class="text-2xl px-3 py-3 text-blue-800 border-b border-solid border-gray-600">
      Add Product/Service
 </div>
<div class="w-full sm:flex justify-between items-center">
 <div class="w-2/5  p-3 mb-6 md:mb-0">
     
      <input type="text" class="appearance-none border @error('product') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product"  wire:model.lazy="product" placeholder="Product Name/ Service"/>
      
      @error('product')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
 </div>
 <div class="w-2/5 p-3 mb-6 md:mb-0">

      <input type="number" class="appearance-none border @error('quantity') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity"  wire:model.lazy="quantity" placeholder=" Quantity"/>
      
      @error('quantity')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
 </div>
 <div class="w-1/5 p-3 mb-6 md:mb-0 flex justify-center">
   <button class="bg-green-700 px-2 py-2 rounded-md shadow-md text-white" wire:click="addProduct"><i class="fa fa-plus"></i>Add</button>
 </div>
</div>
<div class="px-3 py-3">    
         
         <table class="table-auto w-full">
         @forelse($products as $prod)
         <tr>
             <td class="border px-3 py-3">{{$prod['name']}}</td>
             <td class="border px-3 py-3">{{$prod['quantity']}}</td>
             <td class="border px-3 py-3">
             <button class="bg-red-600 px-2 py-2 rounded-md tracking-tighter text-white" wire:click="removeProduct({{$loop->index}})"><i class="fa fa-trash"></i> remove</button>
                             
             </td>
         </tr>
         @empty
            <tr><td colspan="4" class="px-3 py-3 text-center text-red-700 border uppercase">No Products/Services added As Yet</td></tr>
         @endforelse
         </table>
    
  </div>
</div>
<div class="m-2 bg-gray-100 px-3 py-3 shadow-md rounded-md border">
<div class="w-full p-3 mb-6 md:mb-0 relative" x-data="{cShow:false}">
 <div class="text-2xl px-3 py-3 text-blue-800 border-b border-solid border-gray-600">
      Required PRAZ Category
 </div>
      <div class="mt-2">
      <input class="appearance-none border @error('query') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="query"  wire:model='query' placeholder="Enter Category Code"/>
      <ul
      @if(count($categories) >0 )
        x-show="cShow=true"
      @else
      x-show="cShow=false"
      @endif

      @click.away ="cShow=false"    

      class=" absolute font-normal bg-white shadow overflow-hidden rounded  w-full border mt-1 py-1 left-0 z-20">
                  @if(count($categories)>0) 
                            @foreach($categories as $cat)     
                            <li class="flex justify-between items-center px-3 py-3 ">
                              <div>
                                  <div>
                                  {{$cat->code}}
                                  </div>
                                  <div>
                                  {{$cat->name}}
                                  </div>
                              </div>
                              <div>
                              <button class="bg-green-600 px-2 py-2 tracking-tighter" wire:click="addCategory({{$cat->id}},'{{$cat->code}}','{{$cat->name}}')"><i class="fa fa-plus"></i> Add</button>
                              </div>
                            </li>
                            @endforeach
                    @endif
                        
                        </ul>
      </div>
      
 </div>

 <div class="px-3 py-3">    
         
        <table class="table-auto w-full">
        @forelse($catgoryArray as $ar)
        <tr>
            <td class="border px-3 py-3">{{$ar['id']}}</td>
            <td class="border px-3 py-3">{{$ar['code']}}</td>
            <td class="border px-3 py-3">{{$ar['name']}}</td>
            <td class="border px-3 py-3">
            <button class="bg-red-600 px-2 py-2 rounded-md tracking-tighter text-white" wire:click="remove({{$loop->index}})"><i class="fa fa-trash"></i> remove</button>
                            
            </td>
        </tr>
        @empty
           <tr><td colspan="4" class="px-3 py-3 text-center text-red-700 border uppercase">no categories</td></tr>
        @endforelse
        </table>
   
 </div>
 </div>
 <div class="w-full p-3 mb-6 md:mb-0">
 <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
 Tender Document
      </label>
      <input type="file" class="appearance-none border @error('file') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="file"  wire:model.lazy="file"/>
      
      @error('file')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
 </div>
<div class="w-full p-3 mb-6 md:mb-0">
 <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      Description
      </label>
      <textarea rows="15" class="appearance-none border @error('description') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description"  wire:model.lazy="description"></textarea>
      
      @error('description')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
 </div>
 <div class="flex justify-between items-center px-3 py-3">
                          <div>
                            <a href="#" class="bg-red-500 px-2 py-2 text-white rounded-sm">Cancel</a>
                          </div>
                          <div>
                            <button class="bg-green-500 px-2 py-2 text-white rounded-sm" wire:click="save">Submit</button>
                          </div>
                        </div>



 </div>

</div>
