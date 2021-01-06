@extends('layouts.welcome')

@section('content')
  <div class="w-1/2 mx-auto bg-gray-200 px-3 py-3 mt-4">
   <a href="{{route('welcome')}}" class="text-blue-500">Home</a> / <span>Verification Results</span>
 </div>

 <div class="w-1/2 mx-auto px-3 py-3 round-sm">
   <div class="text-2xl px-3 py-3 border-b border-solid border-gray-200">Bidder Certificate Verification Results</div>
   <div class="mt-2">
       @if(!is_null($supplier))
                @if($supplier->expire_year === Carbon\Carbon::now()->year)
                    <table class="table-auto w-full">
                        <tbody>
                            <tr><th class="border px-4 py-2 text-left">Name</th><td class="border px-4 py-2">{{$supplier->company->name}}</td></tr>
                            <tr><th class="border px-4 py-2 text-left">Country</th><td class="border px-4 py-2">{{$supplier->company->country}}</td></tr>
                            <tr><th class="border px-4 py-2 text-left">City</th><td class="border px-4 py-2">{{$supplier->company->city}}</td></tr>
                            <tr><th class="border px-4 py-2 text-left">Code</th><td class="border px-4 py-2">{{$supplier->code}}</td></tr>
                            <tr><th class="border px-4 py-2 text-left">Category</th><td class="border px-4 py-2">{{$supplier->category->name}}</td></tr>
                            <tr><th class="border px-4 py-2 text-left">Year</th><td class="border px-4 py-2">{{$supplier->expire_year}}</td></tr>
                            <tr><th class="border px-4 py-2 text-left">Status</th><td class="border px-4 py-2">{{$supplier->status}}</td></tr>
                            <tr><th class="border px-4 py-2 text-left">Registration Date</th><td class="border px-4 py-2">{{$supplier->created_at}}</td></tr>
            
                        </tbody>

                    </table>
                @else
                <div class="bg-gray-200 px-3 py-3 text-red-500 text-center">
             Certificate Expired in year {{$supplier->expire_year}} cannot be used for business in {{Carbon\Carbon::now()->year}}
         </div>
                @endif
       @else
         <div class="bg-gray-200 px-3 py-3 text-red-500 text-center">
             Certificate Number Not Found
         </div>
       @endif

   </div>
</div>
@endsection