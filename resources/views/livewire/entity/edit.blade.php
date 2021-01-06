<div>
<div class="row justify-content-center mt-3">
    <div class="col-sm-12 col-md-10">
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{route('entity')}}"><i class="fas fa-home"></i> Dashboard</a></li>
            <li class="breadcrumb-item"><a href="{{route('tenders')}}"><i class="fas fa-upload"></i> Tenders</a></li>
            <li class="breadcrumb-item active" aria-current="page">Edit Tender</li>
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
                <h5>Edit Tender</h5>
            </div>
            <div class="card-body">
            <div wire:loading wire:target="save">
                    <div class="text-center">
                    <h4 class="text-primary">Processing ...
                <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                        <span class="sr-only">Loading...</span>
                </div>
                    </h4>
                    </div>
                        
            </div>
            <form  wire:submit.prevent="save">
            <div class="row">
                         <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label for="tendernumber">Tender Number</label>
                                <input type="text" name="tendernumber" id="tendernumber" class="form-control @error('tendernumber') is-invalid @enderror" wire:model.lazy="tendernumber"/>

                            @error('tendernumber') 
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                            </div>
                         </div>
                         <div class="col-sm-12 col-md-6">
                         <div class="form-group">
                                <label for="closedate">Close Date</label>
                                <input type="date" id="close_date" class="form-control @error('close_date') is-invalid @enderror" wire:model.lazy="close_date"/>

                                @error('close_date') 
                                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                         </div>
                     </div>
                     <div class="row">
                         <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label>Currency</label>
                            <select class="form-control @error('currency') is-invalid @enderror" id="currency"  wire:model.lazy="currency">
                                @forelse($currencylist as $current)
                                    <option value="{{$current->id}}">{{$current->name}}</option>
                                @empty

                                @endforelse
                            </select>

                            @error('currency') 
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                            </div>
                         </div>
                         <div class="col-sm-12 col-md-6">
                         <div class="form-group">
                                <label>Classification</label>
                            <select class="form-control @error('classification') is-invalid @enderror"  wire:model.lazy="classification">
                                @forelse($classifications as $class)
                                    <option value="{{$class->id}}">{{$class->name}}</option>
                                @empty

                                @endforelse
                            </select>

                            @error('currency') 
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                            </div>
                         </div>
                     </div>
            <div class="row">
                         <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label for="bidvalue">Bid Value</label>
                                <input type="text" id="bidvalue" class="form-control @error('bidvalue') is-invalid @enderror" wire:model.lazy="bidvalue"/>

                            @error('bidvalue') 
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                            </span>                            
                            @enderror
                            </div>
                         </div>
                         <div class="col-sm-12 col-md-6">
                         <div class="form-group">
                                <label for="bidbond">Bid Bond</label>
                                <input type="text" id="bidbond" class="form-control @error('bidbond') is-invalid @enderror" wire:model.lazy="bidbond"/>

                            @error('bidbond') 
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                            </span>                            
                            @enderror
                            </div>
                         </div>
                     </div>
               
                   
                     <div class="row">
                     <div class="col-sm-12">
                     <div class="form-group">
                                <label>Tender Document</label>
                            <input type="file" class="form-control @error('file') is-invalid @enderror" id="file"  wire:model.lazy="file">

                            @error('file') 
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                            </div>
                     </div>
                     </div>
                     <div class="row">
                     <div class="col-sm-12">
                     <div class="form-group">
                                <label>Tender Description</label>
                            <textarea class="form-control @error('description') is-invalid @enderror" id="description"  wire:model.lazy="description"></textarea>

                            @error('description') 
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                            </span>                            
                            @enderror
                            </div>
                     </div>
                     </div>
                  
                  <div class="form-group text-right">
                  <button class="btn btn-primary " type="submit">Submit</button>
                  </div>
                
                  
              </form>
            </div>
        </div>
    </div>
</div>
</div>
