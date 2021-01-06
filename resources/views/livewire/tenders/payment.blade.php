<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Home</a></div><div  class="text-indigo-600 px-3 py-3 mr-2">/</div><div  class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('tenderlist')}}">Notices</a></div><div  class="text-indigo-600 px-3 py-3 mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('tendershow',$notice->id)}}">{{$notice->tendernumber}}</a></div><div  class="text-indigo-600 px-3 py-3 mr-2">/</div><div>Payment</div>
</div>
@include('partials.message')
<div class="bg-white mt-2 px-3 py-4 rounded-md shadow-md w-4/6 mx-auto">

     <div class="px-3 py-3">
       <div>
       @if($step =='1')
       @include('partials.spoc')
        @elseif($step=="2")
        @include('partials.establishment')
        @elseif($step=="3")
        @include('partials.bond')        
        @else
        @include('partials.finish')
        @endif
    </div>
 
        
              <div class="bg-gray-200 px-2 py-2 border rounded-md"> 
                       
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
               <div class="text-lg text-gray-700 mt-5">How to TOPUP  your wallet</div>
                <div><b>Please make a deposit into our bank account provided below. Please take note of the follow</b></div>
                 <div>When using ZIPIT please capture your praz number on the reference field </div>
                 <div>When using RTGS transfer please capture your praz number on the description field </div>
                 <div>Your internal wallet balance will only be updated when your funds have reflected in our account</div>
                 <div class="text-2xl text-green-700 mt-6 mb-6">PRAZ NUMBER : {{Auth::user()->company->regnumber}}</div>
               
                        
                         <div class="text-2xl px-3 py-3">Local Currency Account(ZWL)</div>
                         <div class="px-3 py-3">
                        <b>Account Name : Procurement Regulatory Authority of Zimbabwe</b><br/>
                        <b> Bank : CBZ</b><br/>
                        <b>Account Number: 01121064850020</b><br/>
                        <b>Branch : Kwame Nkrumah</b>
                         </div>
                        
                        <div class="text-2xl px-3 py-3">Foreign Currency Account(USD)</div>
                        <div class="px-3 py-3">
                        <b>Account Name : Procurement Regulatory Authority of Zimbabwe</b><br/>
                        <b> Bank : CBZ</b><br/>
                        <b> Account Type : Nostro United States Dollar(USD)</b><br/>
                        <b>Account Number :01121064850040</b><br/>
                        <b>Branch : Kwame Nkrumah</b><br/>
                        <b>Branch Sort Code :6101</b><br/>
                        <b>Swift Code :COBZZWHAXXXX</b><br/>
                        </div>
                        
                </div>
        
     </div>

</div>
</div>