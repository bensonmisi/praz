<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.entity.index')}}">Entities</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('can_entity_company')}}">Companies</a></div><div class="mr-2">/</div><div class="mr-2">New</div>
</div>
<div class="bg-white px-3 py-5 w-3/4 mx-auto rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')
        <div class="text-2xl px-3 py-3 text-gray-700 mt-2 mb-2">Organisation Details</div>
     <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input class="appearance-none border @error('company') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company" wire:model.lazy="company">
      @error('company')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      Sector
      </label>
      <select class="appearance-none border @error('sector') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sector"  wire:model.lazy="sector">
                    <option></option>                    
                    <option value="government">Government</option>
                    <option value="councils">Councils</option>
                    <option value="parastatals">Parastatals</option>
                    <option value="mines">Mining</option>
                    <option value="health">Health</option>
                    <option value="ngo">NGO</option>  
                    <option value="other">Other</option>     
    </select>
      @error('sector')
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
      <input class="appearance-none border @error('city') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" wire:model.lazy="city">
      @error('city')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
   Procurement Class
      </label>
      <select class="appearance-none border @error('pclass') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pclass"  wire:model.lazy="pclass">
      <option></option>
      @forelse($pclasslist as $cl)
                    <option value="{{$cl->id}}">{{$cl->name}}</option>  
      @empty
      @endforelse 
      </select>
      @error('pclass')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
     </div>
     
     <div class="flex justify-between items-center">
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
       Province
      </label>
      <select class="appearance-none border @error('province') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="province" wire:model.lazy="province">
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
      @error('province')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
   
     <div class="w-full p-3 mb-6 md:mb-0">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      District
      </label>
      <select class="appearance-none border @error('district') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="district" wire:model.lazy="district">
      <option></option>
                     @if($province=='Bulawayo')
                    		<option value="Bulawayo">Bulawayo</option>
                      @elseif($province=='Matabeleland South')
                    		<option value="Beitbridge">Beitbridge</option>
                    		<option value="Bulilima">Bulilima</option>
                    		<option value="Gwanda">Gwanda</option>
                    		<option value="Insiza">Insiza</option>
                    		<option value="Mangwe">Mangwe</option>
                    		<option value="Matobo">Matobo</option>
                            <option value="Umzingwane">Umzingwane</option>
                     @elseif($province=='Mashonaland Central')
                    		<option value="Bindura">Bindura</option>
                    		<option value="Guruve">Guruve</option>
                    		<option value="Mazowe">Mazowe</option>
                    		<option value="Mbire">Mbire</option>
                    		<option value="Mount Darwin">Mount Darwin</option>
                    		<option value="Muzarabani">Muzarabani</option>
                    @elseif($province=='Mashonaland West')
                    		<option value="Chegutu">Chegutu</option>
                    		<option value="Chinhoyi">Chinhoyi</option>
                    		<option value="Hurungwe">Hurungwe</option>
                    		<option value="Kariba">Kariba</option>
                    		<option value="Makonde">Makonde</option>
                    		<option value="Mhondoro-Ngezi">Mhondoro-Ngezi</option>
                    		<option value="Sanyati">Sanyati</option>
                    		<option value="Zvimba">Zvimba</option>
                    @elseif($province=='Mashonaland East')
                    		<option value="Chikomba">Chikomba</option>
                    		<option value="Goromonzi">Goromonzi</option>
                    		<option value="Marondera">Marondera</option>
                    		<option value="Mudzi">Mudzi</option>
                    		<option value="Murehwa">Murehwa</option>
                    		<option value="Mutoko">Mutoko</option>
                    		<option value="Seke">Seke</option>
                    		<option value="Uzumba-Maramba-Pfungwe">Uzumba-Maramba-Pfungwe</option>
                    		<option value="Uzumba-Maramba-Pfungwe">Uzumba-Maramba-Pfungwe</option>
                     @elseif($province=='Masvingo')
                    		<option value="Bikita">Bikita</option>
                    		<option value="Chiredzi">Chiredzi</option>
                    		<option value="Chivi">Chivi</option>
                    		<option value="Gutu">Gutu</option>
                    		<option value="Masvingo">Masvingo</option>
                    		<option value="Mwenezi">Mwenezi</option>
                    		<option value="Zaka">Zaka</option>                    	
                      @elseif($province=='Midlands')
                    		<option value="Chirumhanzu">Chirumhanzu</option>
                    		<option value="Gokwe North">Gokwe North</option>
                    		<option value="Gokwe South">Gokwe South</option>
                    		<option value="Gweru">Gweru</option>
                    		<option value="Kwekwe">Kwekwe</option>
                    		<option value="Mberengwa">Mberengwa</option>
                    		<option value="Shurugwi">Shurugwi</option>    
                    		<option value="Zvishavane">Zvishavane</option>                  	
                      @elseif($province=='Manicaland')
                    		<option value="Buhera">Buhera</option>
                    		<option value="Chimanimani">Chimanimani</option>
                    		<option value="Chipinge">Chipinge</option>
                    		<option value="Makoni">Makoni</option>
                    		<option value="Mutare">Mutare</option>
                    		<option value="Mutasa">Mutasa</option>
                            <option value="Nyanga">Nyanga</option> 
                        @elseif($province=='Harare')
                    		<option value="Harare">Harare</option>                    		                 	
                    	@endif     
     </select>
      @error('district')
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
      <textarea class="appearance-none border @error('address') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id='address' type="text" wire:model.lazy='address'></textarea>
      @error('address')
         <span class="text-red-600" role="alert">
          <strong>{{ $message }}</strong>
         </span>
       @enderror
     </div>
   
     </div>
  
     
     <div class="flex justify-between items-center mt-4">
        <a href="{{route('can_entity_company')}}" class="px-3 py-3 bg-red-600 rounded-md hover:bg-red-400 text-white">Cancel</a>
                   <button class="px-3 py-3 bg-green-600 rounded-md hover:bg-green-400 text-white" wire:click='add'>Submit</button>
        </div>  
</div>
</div>
