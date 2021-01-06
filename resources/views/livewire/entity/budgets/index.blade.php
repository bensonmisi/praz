<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Budgets</div>
</div>
<div class="bg-white px-3 py-5 rounded-sm w-4/6 mx-auto shadow-md border border-solid m-1 border-gray-200">
@include('partials.message')
<div class="flex justify-between items-center border-b border-solid border-gray-500">
    <div class="px-3 py-3 text-2xl text-gray-700">Budgets</div>
    <div>
        <a href="{{route('budget.add')}}" class="px-2 py-2 bg-green-600 rounded-md text-white">Add New</a>
    </div>
</div>
<div>
    <table class="table-auto w-full">
        <thead>
            <tr><th class="px-3 py-3 bg-gray-500 bordered">Year</th><th class="px-3 py-3 bg-gray-500 bordered"></th></tr>
         </thead>
         <tbody>
             @forelse($budgets as $budget)
               <tr>
                   <td class="px-3 py-3 border text-center">{{$budget->year}}</td>
                   <td class="px-3 py-3 border text-center">
                       <a href="{{route('budget_document',$budget->id)}}" target="_blank" class="bg-blue-700 px-2 py-2 text-white text-center"><i class="fa fa-download"></i></a>
                       <a href="{{route('budget.edit',$budget->id)}}" class="bg-green-700 px-2 py-2 text-white text-center"><i class="fa fa-pencil"></i></a>
                    </td>
               </tr>
             @empty

             <tr>
                 <td colspan="2" class="px-3 py-3 text-center text-red-600"> No Budget uploaded</td>
             </tr>

             @endforelse
         </tbody>

    </table>
</div>
</div>
</div>
