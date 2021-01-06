@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center mt-2">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard<a href="{{route('invoice_download',$inv)}}" class="btn btn-success float-right">Download</a></div>

                <div class="card-body">
                <table class="table table-bordered">
                <thead>
                        <tr><th>Date</th><th>Invoice Number</th><th>Name</th><th>Currency</th><th>Cost</th><th>Status</th><th></th></tr>
                    </thead>
                    <tbody>
                        @forelse($invoice as $inv)

                        <tr>
                        <td>{{$inv->created_at}}</td>
                        <td>{{$inv->invoice_number}}</td>
                        <td>{{$inv->category->name}}</td>
                        <td>
                           {{$inv->currency->name}}
                        </td>
                        <td>
                            {{$inv->cost}}
                        </td>
                        <td>
                            {{$inv->status}}
                        </td>
                        <td>
                            @if($inv->status=='PAID')

                            <a href="#" class="btn btn-primary">View Receipt</a>

                            @endif
                        </td>
                       
                    </tr>
                        @empty
                        <tr><td colspan="5" class="text-danger text-center">No  Invoice Found</td></tr>
                        @endforelse
                       
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection