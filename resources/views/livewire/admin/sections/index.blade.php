<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Sections</div>
</div>
<div class="w-1/2 mx-auto bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
<div class="flex justify-between items-center border-b-2 p-1"><div class="text-2xl">Sections</div><a href="{{route('can_add_section')}}" class="px-2 py-2 bg-green-600 text-white rounded-md"><i class="fa fa-plus"></i> New</a></div>
        @include('partials.message')
                <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-3 py-3 border font-semibold text-left">Name</th>
                            <th class="px-3 py-3 border text-center">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($sections as $section)
                        <tr>
                            <td class="px-3 py-3 border text-left">{{$section->name}}</td>
                            <td class="px-3 py-3 border text-center">
                                   <a href="{{route('can_edit_section',$section->id)}}" class="px-2 py-2 bg-blue-600 rounded-md text-white"><i class="fa fa-pencil"></i></a>
                                   <a href="{{route('can_remove_section',$section->id)}}" class="px-2 py-2 bg-red-600 rounded-md text-white" ><i class="fa fa-trash"></i></a>
                               
                            </td>
                        </tr>

                        @empty
                        <tr><td colspan="2" class="text-danger text-center">No Section Added As Yet</td></tr>
                        @endforelse
                    </tbody>
                </table>
            </div>              

</div>
