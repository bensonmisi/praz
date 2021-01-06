<div>
    <div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div>
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.returns.index')}}">Returns</a></div><div class="mr-2">/</div>
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.returns.response',$response->return_id)}}">Responses</a></div><div class="mr-2">/</div>
       <div class="mr-2">Comments</div>
</div>
<div class="bg-white px-3 py-5  w-3/4 mx-auto rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
          <div class="px-3 py-3 text-white bg-blue-700">Comments</div>
        <ul>
                @forelse($response->comments as $comment)
                <li class="px-2 py-5 border mt-3  bg-gray-200 rounded-md">
                  <div class="px-3 py-3  font-semibold">{{$comment->comment}}</div>
                  <div class="px-3  text-xs">User: {{$comment->user->name}} {{$comment->user->surname}}</div>
                </li>
                @empty
                <li class="px-2 py-5 border  bg-gray-200 rounded-md text-center text-red-500"> No Comments Found As Yet</li>
                @endforelse
        </ul>

        <div class="text-2xl mt-10 mb-5">Comment</div>
        <div class="w-full mb-6 md:mb-0">
        
      <textarea rows="10" class="appearance-none border @error('comment') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comment"  wire:model.lazy="comment"></textarea>
      @error('comment')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="flex justify-between items-center mt-4">
        <a href="{{route('admin.returns.response',$response->return_id)}}" class="px-3 py-3 bg-red-600 rounded-md hover:bg-red-400 text-white">Cancel</a>
                   <button class="px-3 py-3 bg-green-600 rounded-md hover:bg-green-400 text-white" wire:click='add'>Submit</button>
        </div>
</div>
</div>
