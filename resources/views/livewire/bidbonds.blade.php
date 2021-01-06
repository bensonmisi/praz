<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Bid Bonds</div>
</div>
<div class="w-full sm:w-5/6 mx-auto px-3 py-4 bg-white rounded-sm mt-4 shadow-md border border-solid border-gray-300">
@include('partials.message')
<table class="table-auto w-full">
<thead>    
<tr>
   <th class="px-3 py-3 border text-left">
      Tender Number
   </th>
   <th class="px-3 py-3 border text-left">
     Amount
   </th>
   <th class="px-3 py-3 border text-left">
     Validity Date
   </th>
   <th class="px-3 py-3 border text-left">
     Refund Status
   </th>
   

    </tr>
</thead>
<tbody>
    @forelse($bidbond as $bond)
      <tr>
          <td class="px-3 py-3 border">{{$bond->notice->tendernumber}}</td>
          <td class="px-3 py-3 border">{{$bond->notice->currency->name}}{{$bond->notice->bidbond}}</td>
          <td class="px-3 py-3 border">{{$bond->expire_date}}</td>
          <td class="px-3 py-3 border">{{$bond->status}}</td>
      </tr>
    @empty
      <tr>
        <td class="px-3 py-3 text-center text-red-500 border">No Bid Bond Payments Found</td>
      </tr>
    @endforelse
</tbody>
</table>
</div>
</div>
 