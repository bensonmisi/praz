<div>
<div class="row justify-content-center mt-3">
    <div class="col-sm-12">
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{route('admin.home')}}"><i class="fas fa-home"></i> Dashboard</a></li>
            <li class="breadcrumb-item"><a href="{{route('admin.customer')}}"><i class="fas fa-user"></i> Company</a></li>
            <li class="breadcrumb-item"><a href="{{route('can_show_customer',$company->id)}}"><i class="fas fa-user"></i> Show</a></li>
            <li class="breadcrumb-item active" aria-current="page">Add</li>
        </ol>
        </nav>
    </div>
</div>
<div class="row justify-content-center mt-2">
     <div class="col-sm-10">              
               
               <h5>Personal Details</h5>
               <hr/>
               <div class="row">
                   <div class="col-sm-12 col-md-6">
                   <div class="form-group">
                   <label for="password">Name</label>
                   <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" wire:model.lazy="name" required>
                   @error('name')
                                   <span class="invalid-feedback" role="alert">
                                       <strong>{{ $message }}</strong>
                                   </span>
                        @enderror
               </div>
                   </div>
                   <div class="col-sm-12 col-md-6">
                   <div class="form-group">
                   <label for="password">Surname</label>
                   <input type="text" class="form-control @error('surname') is-invalid @enderror" id="surname" wire:model.lazy="surname" required>
                   @error('surname')
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
                   <label for="email">Email</label>
                   <input type="email" class="form-control @error('email') is-invalid @enderror" id="email" wire:model.lazy="email" required>
                   @error('email')
                                   <span class="invalid-feedback" role="alert">
                                       <strong>{{ $message }}</strong>
                                   </span>
                        @enderror
               </div>
                   </div>
                   <div class="col-sm-12 col-md-6">
                   <div class="form-group">
                   <label for="password">Mobile</label>
                   <input type="text" class="form-control @error('phone') is-invalid @enderror" id="phone" wire:model.lazy="phone" required>
                   @error('phone')
                                   <span class="invalid-feedback" role="alert">
                                       <strong>{{ $message }}</strong>
                                   </span>
                        @enderror
               </div>
                   </div>
               </div>
             
                 
                 <div class="form-group">
                 <button class="btn btn-success float-right" wire:click="add">Submit</button>
                 </div>
                 
                 
           
     </div>
</div>

</div>