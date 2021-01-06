<div>
<div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid border-gray-200 flex justify-between items-center">
        <div class="text-lg sm:text-2xl">
        Welcome: {{Auth::user()->company->name}} 
        </div>
        <div class="text-lg sm:text-2xl">
       <div> PRAZ NUMBER: {{Auth::user()->company->regnumber}}</div>
       <div> CLASS:
          @if(!is_null(Auth::user()->company->pclass))
            {{Auth::user()->company->pclass->pclass->name}}
          @else

          <span class="text-red-500">Pending</span>
          @endif
    </div>
        </div>
    </div>
    <div class="bg-white px-3 py-5 rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')

        @if(is_null($plan))
        <div class="px-5 py-5  text-red-600 border border-solid border-red-700 bg-red-200 rounded-md text-center mt-5 mb-4 flex justify-between items-center">
                <div><i class="fa fa-warning "></i>Please upload your organisation's procurement plan for year {{Carbon\Carbon::now()->year}}</div>
                <div><a href="{{route('plan.add')}}" class="bg-green-600 text-white px-2 py-2 rounded-md tracking-tighter">Upload</a></div>
        </div>
        @endif
        @if(!is_null($return))
          @if(count($return->uploads)==0)
            <div class="px-5 py-5  text-red-600 border border-solid border-red-700 bg-red-200 rounded-md  mt-5 mb-4 flex justify-between items-center">
                <div>
                    <div>
                    <i class="fa fa-warning "></i>
                    {{$return->name}}
                   </div>
                   <div>
                    Due Date: {{$return->due_date}}
                   </div>
                </div>
                <div><a href="{{route('returns')}}" class="bg-green-600 text-white px-2 py-2 rounded-md tracking-tighter">View</a></div>
            </div>
         @endif
 @endif
        <div class="px-4 py-4 flex justify-between items-center">
            <div class="text-2xl">Procurement Notices</div>
            <div><a href="{{route('tender_add')}}" class="bg-green-600 px-3 py-3 rounded-md shadow-md text-white">New Notice</a></div>
        </div>
        <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="bg-blue-700 text-white px-3 py-3 border">Tender Number</th>
                            <th class="bg-blue-700 text-white px-3 py-3 border">Procurement Type</th>
                            <th class="bg-blue-700  text-white px-3 py-3 border">Close Date</th>
                            <th class="bg-blue-700  text-white px-3 py-3 border">Status</th>
                            <th class="bg-blue-700  text-white px-3 py-3 border"></th>
                             
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($notices as $notice)
                        <tr>
                        <td class="px-3 py-3 border text-center"><a href="{{route('tender',$notice->id)}}">{{$notice->tendernumber}}</a></td>
                        <td class="px-3 py-3 border text-center">{{$notice->type->name}}</td>
                        <td class="px-3 py-3 border text-center">{{$notice->close_date}}</td>
                        <td class="px-3 py-3 border text-center">{{$notice->status}}</td>
                        <td class="px-3 py-3 border text-center">
                            <a  href="{{route('tender',$notice->id)}}" class="px-2 py-2 bg-blue-500 :hover:bg-blue-700 text-white rounded-sm shadow-sm">View</a>
                            @if(Carbon\Carbon::now()->gt(Carbon\Carbon::parse($notice->close_date)))
                             <a  href="{{route('tender.awards.index',$notice->id)}}" class="px-2 py-2 bg-green-500 :hover:bg-blue-700 text-white rounded-sm shadow-sm">Award notices</a>
                        
                             @endif
                        </td>
                        </td>
                        </tr>

                        @empty
                        <tr><td colspan="5" class="px-3 py-3 border  text-center">No Procurement Notices Uploaded As Yet</td></tr>
                        @endforelse
                    </tbody>
                </table>

    </div>

</div>