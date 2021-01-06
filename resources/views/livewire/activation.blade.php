<div>
<div class="row justify-content-md-center">
   
        <div class="col-sm-12 col-md-5 px-2 my-2">
        <div>
        @if (session()->has('message'))
            <div class="alert alert-success">
                {{ session('message') }}
            </div>
        @endif
        @if (session()->has('error'))
            <div class="alert alert-danger">
                {{ session('error') }}
            </div>
        @endif
      </div>
        <h4>Activate Account</h4>
        <hr/>

        @if($showform)
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
                        <label for="email">Code</label>
                        <input type="text" class="form-control @error('code') is-invalid @enderror" id="code" wire:model.lazy="code" aria-describedby="emailHelp" required>
                        @error('code')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                         @enderror
                 </div>
              
                <div class="form-group">
                              <button type="submit" class="btn btn-block btn-primary" wire:click="verify">
                                    {{ __('Verify Code') }}
                                </button>
                </div>
                </div>
            </div>

        @endif

        @if($showactivation)

        <div class="card">
            <div class="card-body">
                <h5>Personal Details</h5>
                <hr/>
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                    <label for="password">Name</label>
                    <input type="text" class="form-control @error('form.name') is-invalid @enderror" id="name" wire:model.lazy="form.name" required>
                    @error('form.name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                         @enderror
                </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                    <label for="password">Surname</label>
                    <input type="text" class="form-control @error('form.surname') is-invalid @enderror" id="surname" wire:model.lazy="form.surname" required>
                    @error('form.surname')
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
                    <label for="email">Password</label>
                    <input type="password" class="form-control @error('form.password') is-invalid @enderror" id="password" wire:model.lazy="form.password" required>
                    @error('form.password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                         @enderror
                </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                    <label for="password">Confirm Password</label>
                    <input type="password" class="form-control @error('form.password_confirmation') is-invalid @enderror" id="password_confirmation" wire:model.lazy="form.password_confirmation" required>
                    @error('form.password_confirmation')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                         @enderror
                </div>
                    </div>
                </div>
                <h5>Company Details</h5>
                <hr/>
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                    <label for="password">Mobile</label>
                    <input type="text" class="form-control @error('form.phone') is-invalid @enderror" id="phone" wire:model.lazy="form.phone" required>
                    @error('form.phone')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                         @enderror
                    </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                    <label for="password">Sector</label>
                    <select  class="form-control @error('form.sector') is-invalid @enderror" id="sector" wire:model.lazy="form.sector" required>
                    <option></option>
                    <option value="private">Private</option>
                    <option value="government">Government</option>
                    <option value="councils">Councils</option>
                    <option value="parastatals">Parastatals</option>
                    <option value="mines">Mining</option>
                    <option value="health">Health</option>
                    <option value="ngo">NGO</option>  
                    <option value="other">Other</option>                
                    </select>
                    @error('form.sector')
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
                    <label for="email">City</label>
                    <input type="text" class="form-control @error('form.city') is-invalid @enderror" id="city" wire:model.lazy="form.city" required>
                    @error('form.city')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                         @enderror
                </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                    <label for="password">Country</label>
                    <select  class="form-control @error('form.country') is-invalid @enderror" id="country" wire:model.lazy="form.country" required>
                     @for($i=0;$i<count($country);$i++)
                    <option value="{{$country[$i]}}">{{$country[$i]}}</option>  
                     @endfor             
                    </select>
                    @error('form.country')
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
                    <label for="email">Address</label>
                    <input type="text" class="form-control @error('form.address') is-invalid @enderror" id="address" wire:model.lazy="form.address" required>
                    @error('form.address')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                         @enderror
                </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                    <label for="password">Account Type</label>
                    <select  class="form-control @error('form.accounttype') is-invalid @enderror" id="accounttype" wire:model.lazy="form.accounttype" required>
                    <option></option>
                             
                    </select>
                    @error('form.accounttype')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                         @enderror
                </div>
                    </div>
                </div>
                @if($form['country']=='Zimbabwe')
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                    <label for="password">Select Province</label>
                    <select  class="form-control @error('form.province') is-invalid @enderror" id="province" wire:model.lazy="form.province" required>
                    <option></option>
                        <option value="Matabeleland South">Matabeleland South</option>
                    	<option value="Mashonaland Central">Mashonaland Central</option>
                    	<option value="Mashonaland West">Mashonaland West</option>
                    	<option value="Mashonaland North">Mashonaland North</option>
                    	<option value="Mashonaland East">Mashonaland East</option>
                    	<option value="Masvingo">Masvingo</option>
                    	<option value="Midlands">Midlands</option>
                    	<option value="Manicaland">Manicaland</option>
                    	<option value="Bulawayo">Bulawayo</option>
                    	<option value="Harare">Harare</option>
                    <option value="both">Both</option>                
                    </select>    
                     @error('form.province')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                         @enderror
                </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                    <label for="password">Select District</label>
                    <select  class="form-control @error('form.district') is-invalid @enderror" id="district" wire:model.lazy="form.district" required>
                    <option></option>
                     @if($form['province']=='Bulawayo')
                    		<option value="Bulawayo">Bulawayo</option>
                      @elseif($form['province']=='Matabeleland South')
                    		<option value="Beitbridge">Beitbridge</option>
                    		<option value="Bulilima">Bulilima</option>
                    		<option value="Gwanda">Gwanda</option>
                    		<option value="Insiza">Insiza</option>
                    		<option value="Mangwe">Mangwe</option>
                    		<option value="Matobo">Matobo</option>
                            <option value="Umzingwane">Umzingwane</option>
                     @elseif($form['province']=='Mashonaland Central')
                    		<option value="Bindura">Bindura</option>
                    		<option value="Guruve">Guruve</option>
                    		<option value="Mazowe">Mazowe</option>
                    		<option value="Mbire">Mbire</option>
                    		<option value="Mount Darwin">Mount Darwin</option>
                    		<option value="Muzarabani">Muzarabani</option>
                    @elseif($form['province']=='Mashonaland West')
                    		<option value="Chegutu">Chegutu</option>
                    		<option value="Chinhoyi">Chinhoyi</option>
                    		<option value="Hurungwe">Hurungwe</option>
                    		<option value="Kariba">Kariba</option>
                    		<option value="Makonde">Makonde</option>
                    		<option value="Mhondoro-Ngezi">Mhondoro-Ngezi</option>
                    		<option value="Sanyati">Sanyati</option>
                    		<option value="Zvimba">Zvimba</option>
                    @elseif($form['province']=='Mashonaland East')
                    		<option value="Chikomba">Chikomba</option>
                    		<option value="Goromonzi">Goromonzi</option>
                    		<option value="Marondera">Marondera</option>
                    		<option value="Mudzi">Mudzi</option>
                    		<option value="Murehwa">Murehwa</option>
                    		<option value="Mutoko">Mutoko</option>
                    		<option value="Seke">Seke</option>
                    		<option value="Uzumba-Maramba-Pfungwe">Uzumba-Maramba-Pfungwe</option>
                    		<option value="Uzumba-Maramba-Pfungwe">Uzumba-Maramba-Pfungwe</option>
                     @elseif($form['province']=='Masvingo')
                    		<option value="Bikita">Bikita</option>
                    		<option value="Chiredzi">Chiredzi</option>
                    		<option value="Chivi">Chivi</option>
                    		<option value="Gutu">Gutu</option>
                    		<option value="Masvingo">Masvingo</option>
                    		<option value="Mwenezi">Mwenezi</option>
                    		<option value="Zaka">Zaka</option>                    	
                      @elseif($form['province']=='Midlands')
                    		<option value="Chirumhanzu">Chirumhanzu</option>
                    		<option value="Gokwe North">Gokwe North</option>
                    		<option value="Gokwe South">Gokwe South</option>
                    		<option value="Gweru">Gweru</option>
                    		<option value="Kwekwe">Kwekwe</option>
                    		<option value="Mberengwa">Mberengwa</option>
                    		<option value="Shurugwi">Shurugwi</option>    
                    		<option value="Zvishavane">Zvishavane</option>                  	
                      @elseif($form['province']=='Manicaland')
                    		<option value="Buhera">Buhera</option>
                    		<option value="Chimanimani">Chimanimani</option>
                    		<option value="Chipinge">Chipinge</option>
                    		<option value="Makoni">Makoni</option>
                    		<option value="Mutare">Mutare</option>
                    		<option value="Mutasa">Mutasa</option>
                            <option value="Nyanga">Nyanga</option> 
                        @elseif($form['province']=='Harare')
                    		<option value="Harare">Harare</option>                    		                 	
                    	@endif              
                    </select>
                    @error('form.district')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                         @enderror
                </div>
                    </div>
                </div>
                @endif
                <button class="btn-block text-center btn btn-success" wire:click="submit">ActivateAccount</button>
                <a  href="{{route('login')}}">Already Got An Account?</a>
            </div>
        </div>

        @endif
        </div>
</div>
