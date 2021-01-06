<div>
<div class="row justify-content-center mt-3">
    <div class="col-sm-12 col-md-10">
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{route('home')}}"><i class="fas fa-home"></i> Dashboard</a></li>
            <li class="breadcrumb-item"><a href="{{route('invoices')}}"><i class="fas fa-home"></i> My Invoices</a></li>
            <li class="breadcrumb-item active" aria-current="page">My Invoice</li>
        </ol>
        </nav>
    </div>
</div>

<div class="row justify-content-center">
    <div class="col-sm-12 col-md-10">
              @if (session()->has('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
            @endif
            @if (session()->has('error'))
            <div class="alert alert-danger">
                {{ session('error') }}
            </div>
            @endif
        <div class="card">
            <div class="card-header">
                <h5>Invoice<a href="{{route('invoice_print',$inv)}}" target="_blank" class="btn btn-primary float-right">Download Invoice</a></h5>
            </div>
            <div class="card-body">
            <div class="form-group text-center">
                <div wire:loading>
                    <div class="text-center">
                    <h4 class="text-primary">Processing ...
                <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                        <span class="sr-only">Loading...</span>
                </div>
                    </h4>
                    </div>
                        
                </div>
                    </div>
                <div class="table-responsive-sm">
                    <table class="table table-bordered">
                <thead>
                        <tr><th>Date</th><th>Invoice Number</th><th>Name</th><th>Currency</th><th>Cost</th><th>Status</th><th></th></tr>
                    </thead>
                    <tbody>
                        @forelse($invoices as $inv)

                        <tr wire:key="{{$inv->id}}">
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

                            <a href="{{route('receipt_print',$inv->invoice_number)}}" target="_blank" class="btn btn-primary">View Receipt</a>

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

</div>
