<div>
<div  class="w-4/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-gap-4 gap-3">
@forelse($submodules as $sub)
  <div class="bg-gray-100 rounded-md shadow-sm  text-center px-2 py-12 mt-4 mb-2 mr-2 hover:bg-green-700 text-gray-700 hover:text-white" >  
    <a href="{{route($sub->url)}}">
    <div class="card">
      <div class="card-body text-center">
        <i class="{{$sub->icon}} fa-5x"></i>
        <h4>{{$sub->name}}</h4>
      </div>
    </div>
    </a>    
  </div>
  @empty
   <p class=" alert alert-danger">No Submodules assigned to your role found</p>
    @endforelse
</div>

</div class="fa  fa-user-g">
 