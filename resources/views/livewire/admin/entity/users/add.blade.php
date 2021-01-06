<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
<div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.entity.index')}}">Entities</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('can_entity_user',$company->id)}}">Users</a></div><div class="mr-2">/</div><div class="mr-2">New</div>
</div>
<div class="bg-white px-3 py-5 w-3/4 mx-auto rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class="text-2xl px-3 py-3 text-gray-700 mt-2 mb-2">New User</div>
     <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input class="appearance-none border @error('name') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" wire:model.lazy="name">
      @error('name')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Surname
      </label>
      <input class="appearance-none border @error('surname') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="surname" wire:model.lazy="surname">
      @error('surname')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     </div>
     <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Phone
      </label>
      <input class="appearance-none border @error('phone') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" wire:model.lazy="phone">
      @error('phone')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Email
      </label>
      <input class="appearance-none border @error('email') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" wire:model.lazy="email">
      @error('email')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     </div>

     <div class="flex justify-between items-center">
   
     <div class="w-full p-3 mb-6 md:mb-0">
     <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
     User Has Approval Rights
      </label>
      <select class="appearance-none border @error('approve') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="approve" wire:model.lazy="approve">
          <option></option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
      </select>
      @error('approve')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     </div>

     


  
     
     <div class="flex justify-between items-center mt-4">
        <a href="{{route('can_entity_company')}}" class="px-3 py-3 bg-red-600 rounded-md hover:bg-red-400 text-white">Cancel</a>
                   <button class="px-3 py-3 bg-green-600 rounded-md hover:bg-green-400 text-white" wire:click='add'>Submit</button>
        </div>  
</div>
</div>
