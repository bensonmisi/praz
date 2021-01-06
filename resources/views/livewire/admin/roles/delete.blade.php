<div>
<div class="row justify-content-center mt-3">
    <div class="col-sm-12 col-md-10">
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{route('admin.home')}}"><i class="fas fa-home"></i> Dashboard</a></li>
            <li class="breadcrumb-item"><a href="{{route('admin.roles')}}"><i class="fas fa-home"></i> User roles</a></li>
            <li class="breadcrumb-item active" aria-current="page">Delete Role</li>
        </ol>
        </nav>
    </div>
</div>

<div class="row justify-content-center">
    <div class="col-sm-12 col-md-6">
         <livewire:message/>
        <div class="card">
            <div class="card-header">
                <h5>Delete Role</h5>
            </div>
            <div class="card-body">
            <div class="form-group text-center">
                <div wire:loading wire:target='remove'>
                    <div class="text-center">
                    <h4 class="text-primary">Processing ...
                <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                        <span class="sr-only">Loading...</span>
                </div>
                    </h4>
                    </div>
                        
                </div>
                    </div>
                  @if(!is_null($role))
                  <h5> You are about to permanently delete : {{$role->name}}</h5>
                  @endif
                </div>
                <div class="card-footer text-justify">
                   <a href="{{route('admin.roles')}}" class="btn btn-danger">Cancel</a>
                   <button class="btn btn-primary" wire:click='remove'>Continue</button>
                </div>

                
            </div>
        </div>
    </div>
</div>

</div>
