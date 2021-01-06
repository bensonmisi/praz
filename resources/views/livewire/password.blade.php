<div>
<div class="row justify-content-center mt-3">
    <div class="col-sm-12 col-md-10">
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{route('home')}}"><i class="fas fa-home"></i> Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Change Password</li>
        </ol>
        </nav>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-sm-12 col-md-6">
        <div class="card">
            <div class="card-header">
                <h5>Change Password</h5>
            </div>
            <div class="card-body">
            <div class="row">
                    <div class="col-sm-12">
                    <div class="form-group">
                    <label for="email">Password</label>
                    <input type="password" class="form-control @error('password') is-invalid @enderror" id="password" wire:model.lazy="password" required>
                    @error('password')
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
                    <label for="password">Confirm Password</label>
                    <input type="password" class="form-control @error('password_confirmation') is-invalid @enderror" id="password_confirmation" wire:model.lazy="password_confirmation" required>
                    @error('password_confirmation')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                         @enderror
                </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-right">
            
                <button class="btn btn-primary" wire:click="save">Submit</button>
            </div>

        </div>
    </div>
</div>

</div>
