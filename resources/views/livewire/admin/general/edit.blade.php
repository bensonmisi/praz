<div>
<div class="row justify-content-center mt-3">
    <div class="col-sm-12 col-md-10">
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{route('admin.home')}}"><i class="fas fa-home"></i> Dashboard</a></li>
            <li class="breadcrumb-item"><a href="{{route('admin.general')}}"><i class="fas fa-home"></i> General Exchange</a></li>
            <li class="breadcrumb-item active" aria-current="page">Update</li>
        </ol>
        </nav>
    </div>
</div>

<div class="row justify-content-center">
    <div class="col-sm-12 col-md-6">
         <livewire:message/>
        <div class="card">
            <div class="card-header">
                <h5>Update </h5>
            </div>
            <div class="card-body">
            <div class="form-group text-center">
                <div wire:loading wire:target='add'>
                    <div class="text-center">
                    <h4 class="text-primary">Processing ...
                <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                        <span class="sr-only">Loading...</span>
                </div>
                    </h4>
                    </div>
                        
                </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Currency</label>
                        <select class="form-control @error('base') is-invalid @enderror" id="base" wire:model.lazy="base"  required>
                            <option></option>
                             @forelse($currency as $curr)
                                <option value="{{$curr->id}}">{{$curr->name}}</option>
                             @empty

                             @endforelse
                        </select>
                        @error('base')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                         @enderror
                  </div>
              

                    <div class="form-group">
                        <label for="email">Value</label>
                        <input type="text" class="form-control @error('value') is-invalid @enderror" id="name" wire:model.lazy="value"  required>
                        @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                         @enderror
                  </div>
                
                </div>
                <div class="card-footer text-justify">
                   <a href="#" class="btn btn-danger">Cancel</a>
                   <button class="btn btn-primary" wire:click='add'>Submit</button>
                </div>

                
            </div>
        </div>
    </div>
</div>

</div>
