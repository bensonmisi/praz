@extends('layouts.welcome')

@section('content')
<div class=" w-full sm:w-1/3 mx-auto bg-white mt-10 mb-10  border rounded-sm shadow-sm"> 

     <div class="text-2xl px-2 py-2 text-center bg-blue-700 text-white border-b border-solid border-indigo-600">Login</div>
 @include('partials.message')  
   <div class="pr-2 pl-2 pt-2 mb-2">
   <form action="{{route('loginSubmit')}}" method="POST">   
       @csrf 
       <div class="w-full px-3 mb-6">
       <input class="appearance-none border @error('email') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="text"  placeholder="Email">
      @error('email')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
    </div>
    <div class="w-full  px-3 mb-6">
     
      <input class="appearance-none border @error('password') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password"  name="password" type="password" placeholder="Password">
      @error('password')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
    </div>
    <div class="mt-2 px-3">
      <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Login 
      </button>
      </div>
      <div class="sm:flex sm:justify-between sm:items-center mt-2 mb-4">
          <div>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="{{route('register')}}">
      Create new account
      </a>
          </div>
          <div class="mt-2 px-3">
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="{{route('forgot')}}">
       Forgot your password ?
      </a>
          </div>
      </div>
     
    
  </form>
  

   </div>
 
 </div>
 @endsection
