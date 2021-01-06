<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class=" text-indigo-600 px-3 py-3 mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"> <a href="{{route('tender.awards.index',$notice->id)}}">Award Notice</a></div><div class="mr-2">/</div><div class="mr-2"> New</div>
</div>

<div class="bg-white px-3 py-5 rounded-sm w-4/6 mx-auto shadow-md border border-solid m-1 border-gray-200">
@include('partials.message')
<div class="px-3 py-3">Please note you can only award a contract to a valid PRAZ registered supplier. Please enter certificate number to continue with the awarding process</div>
<div class="flex justify-center items-center">
    <div class="w-full p-3 mb-6 md:mb-0">
        
        <input class="appearance-none border @error('code') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="code" type="text" wire:model.lazy="code" placeholder="Certificate Code">
        @error('code')
            <span class="text-red-600" role="alert">
            <strong>{{ $message }}</strong>
            </span>
        @enderror
    </div>
    <div>
        <button class="bg-blue-700 px-2 py-2 rounded-sm text-white" wire:click="search">Verify</button>
    </div>
</div>
@if(!is_null($supplier))
<div class="px-2 py-2">
    <table class="table-auto w-full">
       <tbody>
       @if( !is_null($supplier->company))
           <tr><th class="px-3 py-3 bg-gray-800 text-left text-gray-200">Name</th><td class="px-3 py-3 border text-gray-900"> {{$supplier->company->name}}</td></tr>
           <tr><th class="px-3 py-3 bg-gray-800  text-left text-gray-200">City</th><td class="px-3 py-3 border text-gray-900">{{$supplier->company->city}}</td></tr>
           <tr><th class="px-3 py-3 bg-gray-800 text-left text-gray-200">Category</th><td class="px-3 py-3 border text-gray-900">({{$supplier->category->code}}){{$supplier->category->name}}</td></tr>
          @else
          <tr><td colspan="2" class="text-red-700 px-3 py-3 text-center text-1xl">Something wrong with the certificate no company assigned</td></tr>
        @endif
        </tbody>
    </table>

    <div class="w-full p-3 mb-6 md:mb-0">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
   Select Product/Service
      </label> 
        <select class="appearance-none border @error('product') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product" type="text" wire:model.lazy="product">
         <option></option>
         @foreach($notice->products as $product)
            <option value="{{$product->id}}">{{$product->name}}</option>
         @endforeach
        </select>
        @error('product')
            <span class="text-red-600" role="alert">
            <strong>{{ $message }}</strong>
            </span>
        @enderror
    </div>
    <div class="w-full p-3 mb-6 md:mb-0">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
   Quantity
      </label>   
        <input class="appearance-none border @error('quantity') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="text" wire:model.lazy="quantity">
        @error('quantity')
            <span class="text-red-600" role="alert">
            <strong>{{ $message }}</strong>
            </span>
        @enderror
    </div>
    <div class="w-full px-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
    Contract Value({{$notice->currency->name}})
      </label>
        
        <input class="appearance-none border @error('amount') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="text" wire:model.lazy="amount">
        @error('amount')
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
                            <button class="bg-green-500 px-2 py-2 text-white rounded-sm" wire:click="award">Submit</button>
                          </div>
                        </div>
  </div>
  @endif
</div>
</div>
