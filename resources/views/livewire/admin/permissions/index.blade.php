<div>
<div class="row justify-content-center mt-3">
    <div class="col-sm-12 col-md-10">
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{route('admin.home')}}"><i class="fas fa-home"></i> Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Sub Modules</li>
        </ol>
        </nav>
    </div>
</div>

<div class="row justify-content-center">
    <div class="col-sm-12 col-md-10">
         <livewire:message/>
        <div class="card">
            <div class="card-header">
                <h5>{{$module->name}} <a href="{{route('can_add_submodule',$module->id)}}" class="btn btn-primary float-right"><i class="fas fa-plus"></i> New</a></h5>
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
                        <tr>
                            <th>icon</th>
                            <th>url</th>
                            <th>Name</th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($module->submodules as $sub)
                        <tr>
                           <td><i class="{{$sub->icon}}"></i></td>
                           <td>{{$sub->url}}</td>
                           <td>{{$sub->name}}</td>
                            <td class="text-center">
                               <div class="btn-group">
                                   <a href="{{route('can_edit_submodule',$sub->id)}}" class="btn btn-sm btn-primary"><i class="fas fa-pen"></i></a>
                                   <a href="{{route('can_remove_submodule',$sub->id)}}" class="btn btn-sm btn-danger" ><i class="fas fa-trash"></i></a>
                                   <a href="{{route('can_view_permissions',$sub->id)}}" class="btn btn-sm btn-success" ><i class="fas fa-lock"></i></a>
                        
                                </div>
                            </td>
                        </tr>

                        @empty
                        <tr><td colspan="3" class="text-danger text-center">No Module Added As Yet</td></tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
                </div>

                
            </div>
        </div>
    </div>
</div>

</div>
