<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('welcome')}}">Home</a></div><div class="mr-2">/</div><div>Login</div>
   </div>
 <div class=" w-full sm:w-2/4 mx-auto bg-white mt-10 mb-10 border  rounded-sm shadow-md"> 
 <div class="bg-white">
     <h1 class="text-6xl px-2 py-2 border-b text-center text-gray-700 border-solid border-indigo-600">Login</h1>
 @include('partials.message')  
   <div class="pr-2 pl-2 pt-2 mb-2">
   <form>    
    <div class="w-full px-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      Username
      </label>
      <input class="appearance-none border @error('username') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" wire:model.lazy="username">
      @error('username')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
    </div>
    <div class="w-full  px-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Password
      </label>
      <input class="appearance-none border @error('password') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" wire:model.lazy="password">
      @error('password')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
    </div>
    <div class="mt-2">
      <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" wire:click="authenticate">
        Login 
      </button>
      </div>
    
   
    
  </form>
  

   </div>
 </div>
 </div>
    
</div>