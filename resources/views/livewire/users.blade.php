<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">User management</div>
</div>
@include('partials.message')

<div wire:loading class="text-green-600 px-4 py-4 w-1/2 mx-auto"> Please wait....  </div>

<div class="w-full sm:w-5/6 mx-auto px-3 py-4 bg-white rounded-sm mt-4 shadow-md border border-solid border-gray-300">
 <div class=" flex justify-between items-center bg-gray-100 px-3 py-3"><div class="text-2xl">Users</div><div><button class="bg-green-600 px-2 py-2 text-white" wire:click='addForm'>Add User</button></div></div>
            @if($userlist)
                
                <table class="table-auto w-full">
                    <thead>
                        <tr><th class="border bg-gray-900 text-gray-100 px-2 py-2">Name</th><th class="border bg-gray-900 text-gray-100 px-2 py-2">Surname</th><th class="border bg-gray-900 text-gray-100 px-2 py-2"">Email</th><th class="border bg-gray-900 text-gray-100 px-2 py-2">Status</th><th class="border bg-gray-900 text-gray-100 px-2 py-2">Action</th></tr>
                        </thead>
                        <tbody>

                        @forelse($users as $user)
                        <tr wire:key="{{$user->id}}">
                        <td  class="px-3 py-3 border text-center">{{$user->name}}</td>
                        <td  class="px-3 py-3 border text-center">{{$user->surname}}</td>
                        <td  class="px-3 py-3 border text-center">{{$user->email}}</td>
                        <td  class="px-3 py-3 border text-center">
                           {{$user->status}}
                        </td>
                        <td  class="px-3 py-3 border text-center">
                        @if(!$loop->first)
                        @if($user->status =='ACTIVATED')
                        <button class="bg-red-600 px-2 py-2 rounded-md shadow-md text-white " wire:click="changeStatus({{$user->id}},'DISABLED')">
                         Disable 
                        </button>
                        @else
                        <button class="bg-green-600 px-2 py-2 rounded-md shadow-md text-white " wire:click="changeStatus({{$user->id}},'ACTIVATED')">
                         Enable
                        </button>
                        @endif
                        @endif
                       
                        </td>
                    </tr>
                        @empty
                        <tr><td colspan="6" class="px-3 py-3 border text-center text-red-600">No Users Found</td></tr>
                        @endforelse
                        </tbody>
                   
                </table>
               
                @endif
                @if($showform)
                <form  wire:submit.prevent="save">                
                <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input class="appearance-none border @error('form.name') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="form.name" type="text" wire:model.lazy="form.name">
      @error('form.name')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Surname
      </label>
      <input class="appearance-none border @error('form.surname') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="surname" type="text" wire:model.lazy="form.surname">
      @error('form.surname')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     </div>

     <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Email
      </label>
      <input class="appearance-none border @error('form.email') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="form.email" type="text" wire:model.lazy="form.email">
      @error('form.email')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Mobile
      </label>
      <input class="appearance-none border @error('form.phone') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" wire:model.lazy="form.phone">
      @error('form.phone')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     </div>
     <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Password
      </label>
      <input class="appearance-none border @error('form.password') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="form.password" type="password" wire:model.lazy="form.password">
      @error('form.password')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Confirm Password
      </label>
      <input class="appearance-none border @error('form.password_confirmation') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="password" wire:model.lazy="form.password_confirmation">
      @error('form.password_confirmation')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     </div>
     <div class="flex justify-between items-center">
                          <div>
                            <a href="#" class="bg-red-500 px-2 py-2 text-white rounded-sm">Cancel</a>
                          </div>
                          <div>
                            <button class="bg-green-500 px-2 py-2 text-white rounded-sm" type="submit"> Submit</button>
                          </div>
                        </div>
               
                  
                  
               </form>
                @endif
            </div>
        </div>
    

</div>
