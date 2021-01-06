<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('returns')}}">Returns</a></div><div class="mr-2">/</div><div class="mr-2">Comments</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm w-5/6 mx-auto shadow-md border border-solid m-1 border-gray-200">
<div class="px-3 py-3 text-2xl">Regulator Comments</div>
   @forelse($comments as $comment)
   <div class="px-3 py-3 rounded-sm border bg-white shadow-md mt-2 mb-2">
      <div class="font-bold font-italic">{{$comment->comment}}</div>
      <div>Created On: {{$comment->created_at}}</div>
      <div>Comment By: {{$comment->user->name}}{{$comment->user->surname}}</div>
   </div>

   @empty
   <div class="px-3 py-3 rounded-sm border bg-white shadow-md">
      <div class="text-center text-red-600">No Comments posted as yet</div>
   </div>
      
   @endforelse
</div>

</div>
