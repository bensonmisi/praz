<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div>
       <div class="mr-2">/</div>
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('registration_category')}}">Registrations </a></div>
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('registration_payment')}}">Payments </a></div>
       <div class="mr-2">/</div><div class="mr-2">Internal </div>
</div>

<div class="w-full sm:w-3/6 mx-auto px-3 py-4 bg-white rounded-sm mt-4 shadow-md border border-solid border-gray-300">
@include('partials.message')
<div wire:loading><div class="text-green-500 text-lg text-center">Processing ...</div></div>
 <div class="bg-gray-200 px-4 py-4 text-gray-700 flex justify-between items-center mt-4 mb-3">
  <div class="text-2xl">Internal Balance</div>
  <div>
  <div class="text-2xl">${{$balance}}</div>
  <div><button class="text-blue-500" wire:click="refresh">refresh <i class="fa fa-refresh"></i></button></div>
  </div>
 </div>

              @if($balance >0)
              <div class="px-3 py-3 text-lg font-bold mt-4 mb-4">Are you sure you want to register the selected categories using your internal balance</div>
              <div class="flex justify-between items-center">
                          <div>
                            <a href="{{route('registration_payment')}}" class="bg-red-500 px-2 py-2 text-white rounded-sm">Cancel</a>
                          </div>
                          <div>
                            <button class="bg-green-500 px-2 py-2 text-white rounded-sm" wire:click="register"> Yes register</button>
                          </div>
                        </div>               
                        
              @else
                         
                          <div class="w-full p-3 mb-6 md:mb-0">
                              <div class="px-3 py-3 text-lg font-bold mt-4 mb-4">If you have made a zipit or bank transfer please enter the transaction reference number to topup your internal balance</div>
                               
                              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Reference Number</label>
                              <input  type="text" class="appearance-none border @error('refnumber') border-red-600 @enderror rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="refnumber" wire:model.lazy="refnumber" required/>
                                @error('refnumber')
                                              <span class="text-red-500" role="alert">
                                                  <strong>{{ $message }}</strong>
                                              </span>
                                  @enderror
                          </div>
                          <div class="flex justify-between items-center">
                          <div>
                            <a href="{{route('registration_payment')}}" class="bg-red-500 px-2 py-2 text-white rounded-sm">Cancel</a>
                          </div>
                          <div>
                            <button class="bg-green-500 px-2 py-2 text-white rounded-sm" wire:click="search"> Submit</button>
                          </div>
                        </div>
                        <div>
                            <div x-data={zipit:false}>
                                <button class="text-blue-500" @click="zipit = !zipit">How to topup internal balance using zipit</button>
                                 <div 
                                 x-show="zipit"
                                 @click.away ="zipit = false"
                                 style="background-color: rgba(0,0,0,.5);"
                                 class="mx-auto absolute top-0 left-0 w-full h-screen items-center shadow-lg overflow-y-auto"
                                 >
                                     <div class="container mx-auto rounded p-4 mt-2 overflow-y-auto">
                                         <div class="bg-white rounded px-8 py-8">
                                             <div class="flex justify-between items-center">
                                             <div class="font-bold text-2xl mb-3">How to topup using zipit</div>
                                             <div>
                                                 <button class=" text-red-500 px-2 py-2 rounded-full" @click="zipit=false"><i class="fa fa-times"></i></button>
                                             </div>
                                             </div>
                                             <div class=" text-base mt-3">
                                                 <p>1 using your mobile fone type your bank ussd code to access your bank mobile platform for example if your bank is NMB type *220#</p>
                                                 <p>2 Navigate to the menu where you perform your zipit transactions</p>
                                                 <p>3 From the list of banks that appear locate <span class="font-bold">CBZ</span></p>
                                                 <p>4 Enter our account number <span class="font-bold"> 01121064850020</span></p>
                                                 <p>4 Enter the amount you wish to transfer</p>
                                                 <p>5 Under reference please enter your PRAZ Number <span class="font-bold"> {{Auth::user()->company->regnumber}}</span></p>
                                                 <p>6 Once transaction is completed navigate back to your praz portal wait for 5 mins and click refresh when using the internal balance method </p>
                                                </div>

                                         </div>

                                     </div>

                                 </div>
                            </div>
                            <div x-data={details:false}>
                                <button class="text-blue-500" @click="details = !details">Our Banking details</button>
                                 <div 
                                 x-show="details"
                                 @click.away ="details = false"
                                 style="background-color: rgba(0,0,0,.5);"
                                 class="mx-auto absolute top-0 left-0 w-full h-screen items-center shadow-lg overflow-y-auto"
                                 >
                                     <div class="container mx-auto rounded p-4 mt-2 overflow-y-auto">
                                         <div class="bg-white rounded px-8 py-8">
                                             <div class="flex justify-between items-center">
                                             <div class="font-bold text-2xl mb-3">Banking details</div>
                                             <div>
                                                 <button class=" text-red-500 px-2 py-2 rounded-full" @click="details=false"><i class="fa fa-times"></i></button>
                                             </div>
                                             </div>
                                             <div class=" text-base mt-3">
                                             <p>
                                                @if(strtoupper(Auth::user()->company->country) =='ZIMBABWE')   
                                                <b>Account Name : Procurement Regulatory Authority of Zimbabwe</b><br/>
                                                <b> Bank : CBZ</b><br/>
                                                <b>Account Number: 01121064850020</b><br/>
                                                <b>Branch : Kwame Nkrumah</b>
                                                
                                                @else
                                                <b>Account Name : Procurement Regulatory Authority of Zimbabwe</b><br/>
                                                <b> Bank : CBZ</b><br/>
                                                <b> Account Type : Nostro United States Dollar(USD)</b><br/>
                                                <b>Account Number :01121064850040</b><br/>
                                                <b>Branch : Kwame Nkrumah</b><br/>
                                                <b>Branch Sort Code :6101</b><br/>
                                                <b>Swift Code :COBZZWHAXXXX</b><br/>
                                                @endif
                                            </p>
                                            </div>

                                         </div>

                                     </div>

                                 </div>
                            </div>
                            
                        </div>
                        @endif
 


    </div>

</div>
    

