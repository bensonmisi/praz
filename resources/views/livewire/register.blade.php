<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('welcome')}}">Home</a></div><div class="mr-2">/</div><div>Register</div>
   </div>
 <div class=" w-full sm:w-3/4 mx-auto bg-white mt-10 mb-10 border  rounded-sm shadow-md"> 
 @include('partials.message')  
 <h1 class="text-3xl px-2 py-2 border-b text-center text-gray-700 border-solid border-indigo-600">Account Registration</h1>


 <form>
     <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input class="appearance-none border @error('form.name') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="form.name" type="text" wire:model.lazy="form.name">
      @error('form.name')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Surname
      </label>
      <input class="appearance-none border @error('form.surname') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="surname" type="text" wire:model.lazy="form.surname">
      @error('form.surname')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     </div>

     <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Email
      </label>
      <input class="appearance-none border @error('form.email') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="form.email" type="text" wire:model.lazy="form.email">
      @error('form.email')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Mobile
      </label>
      <input class="appearance-none border @error('form.phone') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" wire:model.lazy="form.phone">
      @error('form.phone')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     </div>
     <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Password
      </label>
      <input class="appearance-none border @error('form.password') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="form.password" type="password" wire:model.lazy="form.password">
      @error('form.password')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Confirm Password
      </label>
      <input class="appearance-none border @error('form.password_confirmation') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="password" wire:model.lazy="form.password_confirmation">
      @error('form.password_confirmation')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     </div>
     <div class="text-2xl px-3 py-3 text-gray-700 mt-2 mb-2">Organisation Details</div>
     <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input class="appearance-none border @error('form.company') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="form.company" type="text" wire:model.lazy="form.company">
      @error('form.company')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      Sector
      </label>
      <select class="appearance-none border @error('form.sector') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="surname" type="text" wire:model.lazy="form.sector">
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
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     </div>

     <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        City
      </label>
      <input class="appearance-none border @error('form.city') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="form.city" type="text" wire:model.lazy="form.city">
      @error('form.city')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Country
      </label>
      <select class="appearance-none border @error('form.country') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="form.country"  wire:model.lazy="form.country">
      @for($i=0;$i< count($country); $i++)
                    <option value="{{$country[$i]}}">{{$country[$i]}}</option>  
      @endfor  
      </select>
      @error('form.country')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     </div>

     <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Address
      </label>
      <input class="appearance-none border @error('form.address') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id='form.address' type="text" wire:model.lazy='form.address'>
      @error('form.address')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Account Type
      </label>
      <select class="appearance-none border @error('form.accounttype') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="form.accounttype" wire:model.lazy="form.accounttype">
                     <option></option>
                     @forelse($types as $type)
                    <option value="{{$type->id}}">{{$type->name}}</option>    
                    @empty
                    @endforelse
     </select>
      @error('form.accounttype')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     </div>
     @if($form['country']=='Zimbabwe')
     <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Province
      </label>
      <select class="appearance-none border @error('form.province') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="form.province" wire:model.lazy="form.province">
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
     </select>
      @error('form.province')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
   
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      District
      </label>
      <select class="appearance-none border @error('form.district') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="form.district" wire:model.lazy="form.district">
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
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     </div>
     @endif
     <div class="w-full sm:flex justify-between items-center p-3 mb-6 md:mb-0">
         <div>
         <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="{{route('login')}}">
     Already got an account
      </a>
         </div>
         <div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" wire:click="submit">
       Register
      </button>
         </div>
      </div>
      
 </form>
 </div>
</div>