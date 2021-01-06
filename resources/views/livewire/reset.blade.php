<div>
    <div class="row justify-content-md-center">
            <div class="col-sm-12 col-md-6 px-5 my-5">
            @if (session()->has('message'))
            <div class="alert alert-success">
                {{ session('message') }}
            </div>
            @endif
            @if (session()->has('invalid'))
            <div class="alert alert-danger">
                {{__('Invalid Email Please Try Again')}}
            </div>
            @endif
            <h4>Forgot Password</h4>
            <div class="card">
                <div class="card-body">
                    <div class="form-group text-center">
                <div wire:loading wire:target="authenticate">
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
                        <label for="email">Email</label>
                        <input type="email" class="form-control @error('email') is-invalid @enderror" id="email" wire:model.lazy="email" aria-describedby="emailHelp" required>
                        @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                         @enderror
                 </div>
                 <div class="form-group">
                        <label for="email">New Password</label>
                        <input type="password" class="form-control @error('passowrd') is-invalid @enderror" id="password" wire:model.lazy="password" aria-describedby="emailHelp" required>
                        @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                         @enderror
                 </div>
                 <div class="form-group">
                        <label for="email">Confirm Password</label>
                        <input type="password" class="form-control @error('password_confirmation') is-invalid @enderror" id="password_confirmation" wire:model.lazy="password_confirmation" aria-describedby="emailHelp" required>
                        @error('password_confirmation')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                         @enderror
                 </div>
                <div class="form-group">
                              <button type="submit" class="btn btn-block btn-primary" wire:click="authenticate">
                                    {{ __('Reset Password') }}
                                </button>
                </div>
                </div>
            </div>
            <p class="mt-2"><a href="{{ route('login') }}">I Have an account ?</a></p>
            <p class="mt-2"><a href="{{ route('register') }}">Do not Have an account ?</a></p>
        </div>
    </div>
    
</div>
