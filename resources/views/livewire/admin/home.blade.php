<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')

        <div class="flex justify-between items-center">
    <div class="text-2xl px-3 py-4">Personal Details</div>
    <div>
        <a href="#" class="px-2 py-2 bg-blue-600 rounded-md"><i class="fa fa-pencil text-white"></i></a>
    </div>
        </div>
    <div class="py-2 px-3">
        <table class="table-auto w-full">
            <tbody>
                <tr>
                    <th class="px-3 py-3 border font-semibold text-left">Name</th>
                    <td class="px-3 py-3 border font-semibold text-left">{{$user->name}}</td>
                </tr>
                <tr>
                    <th class="px-3 py-3 border font-semibold text-left">Surname</th>
                    <td class="px-3 py-3 border font-semibold text-left">{{$user->surname}}</td>
                </tr>
                <tr>
                    <th class="px-3 py-3 border font-semibold text-left">Email</th>
                    <td class="px-3 py-3 border font-semibold text-left">{{$user->email}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="text-2xl px-3 py-4 mt-8">Quick Links</div>

    <div class="container  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid-gap-8 gap-8 mb-10 ">
  @forelse( Auth::guard('admin')->user()->role->modules as $mod)
  @forelse($mod->submodules as $sub)
 <a href="{{route($sub->url)}}" class="px-3 py-6 bg-white border shadow-md flex justify-between items-center hover:border-blue-700 hover:shadow-lg hover:text-white hover:bg-blue-700">
      <div>
          <div class="font-bold text-lg">{{$sub->name}}</div>
          
      </div>
      <div>
     <i class="{{$sub->icon}}"></i>
      </div>
    </a>
   @empty

   @endforelse
@empty

@endforelse
 
</div> 
</div>
</div>
 