<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('awardlist')}}">Awards</a></div><div class="mr-2">/</div><div class="mr-2">View</div>
</div>

@include('partials.message')
<div class="w-full sm:w-5/6 mx-auto px-3 py-4 bg-white rounded-sm mt-4 shadow-md border border-solid border-gray-300">
<table class="table-auto w-full">
<tr><th class="px-3 py-3 border font-semibold text-left">Tender Number</th><td class="px-3 py-3 border text-left"><a href="{{route('tendershow',$award->pnotice_id)}}" class="text-blue-700 hover:text-blue-500">{{$award->notice->tendernumber}}</a></td></tr>
<tr><th class="px-3 py-3 border font-semibold text-left">Company</th><td class="px-3 py-3 border text-left">{{$award->notice->company->name}}</td></tr> 
  
<tr><th class="px-3 py-3 border font-semibold text-left">Product/Service</th><td class="px-3 py-3 border text-left">{{$award->product->name}}</td></tr> 
   <tr><th class="px-3 py-3 border font-semibold text-left">Quantity</th><td class="px-3 py-3 border text-left">{{$award->quantity}}</td></tr>
   <tr><th class="px-3 py-3 border font-semibold text-left">Contract Value</th><td class="px-3 py-3 border text-left">{{$award->currency->name}}{{$award->value}}</td></tr>
                         
</table>
<div class="text-2xl px-4 py-4">Contract Fees Payable</div>
<table class="table-auto w-full">
    <tr>
    <th class="px-3 py-3 border font-semibold text-left">Contract Fee Due</th><td class="px-3 py-3 border text-left">{{$this->getCurr()->name}}{{$fee}}</td></tr>
    <tr>
    <th class="px-3 py-3 font-semibold text-left">Paid</th><td class="px-3 py-3 border text-left">{{$this->getCurr()->name}}{{$this->getPaid()}}</td>

   </tr>
   <tr>
    <th class="px-3 py-3  font-semibold text-left">Balance</th><td class="px-3 py-3 border text-left">{{$this->getCurr()->name}}{{$fee-$this->getPaid()}}</td>

   </tr>
   <tr>
    <th class="px-3 py-3  font-semibold text-left"></th>
    <td class="px-3 py-3 border text-left">
     <button class="px-3 py-3 bg-green-600 w-full  rounded-md text-white" wire:click="pay">Pay</button>
    </td>

   </tr>
</table>
<div class="bg-gray-200 px-2 py-2 border rounded-md mt-8"> 
                  <div class="flex justify-between items-center">
                      <div class="text-2xl">Wallet Balance:</div>
                      <div class="text-2xl">{{$currency}}{{$wallet}}</div> 
                  </div>
               <div class="text-lg text-gray-700 mt-8">How to TOPUP  your wallet</div>
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
