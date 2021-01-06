<div>
<div class="row justify-content-center mt-3">
    <div class="col-sm-12 col-md-10">
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{route('entity')}}"><i class="fas fa-home"></i> Dashboard</a></li>
            <li class="breadcrumb-item"><a href="{{route('tenders')}}"><i class="fas fa-capsules"></i> Tenders</a></li>
            <li class="breadcrumb-item active" aria-current="page">Tender</li>
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
            @if(!is_null($tender))
            <div class="card-header">
                <h5>Tender <a href="{{route('tenderEdit',$tender->id)}}" class="btn btn-primary float-right">Edit Tender</a></h5>
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
             <h6>Tender Number</h6>
             <small>{{$tender->tendernumber}}</small>
             <hr/>
             <h6>Close Date</h6>
             
             <small>{{$tender->close_date}}</small>
             <hr/>
             <h6>Bid Value</h6>
             
             <small>{{$tender->currency->name}}{{$tender->bidvalue}}</small>
             <hr/>
             <h6>Bid Bond</h6>
             
             <small>{{$tender->currency->name}}{{$tender->bidbond}}</small>
             <hr/>
             <h6>Description</h6>
             
             <small>{{$tender->description}}</small>
             <hr/>
             <a href="{{route('tender_document',$tender->id)}}" target="_blank" class="btn btn-success">Download Tender Document</a>





              
                </div>
            @endif
                
            </div>
        </div>
    </div>
</div>

</div>
