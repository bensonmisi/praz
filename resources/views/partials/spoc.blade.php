<div>
<div class="px-3 py-3 text-2xl border-b border-solid border-gray-500 flex justify-between items-center">
     <div>Step1 SPOC Payment</div>
     <div>Internal Wallet Balance: ({{$currency}} {{$nonrefundable}})</div>

     </div>
         <div class="px-3 py-3 flex justify-end items-center">
                <div>
                    <button wire:click="changeCurrency(1)" class="bg-green-600 px-2 py-2 rounded-md text-white mr-1">USD</button>
                </div>
                <div>
                    <button wire:click="changeCurrency(2)" class="bg-blue-600 px-2 py-2 rounded-md text-white mr-1">ZWL</button>
                </div>
         </div>
       
     <table class="table-auto w-full">
     <thead>
          <tr>
          <th class="px-3 py-3 text-white bg-blue-800 border">Fee</th>
          <th class="px-3 py-3 text-white text-left bg-blue-800">Amount</th>
        </tr>
        </thead>
        <tbody>
      
        <tr><th class="px-3 py-3 font-bold border">SPOC Fee</th><td class="px-3 py-3 border">{{$currency}} {{$spocfee}}</td></tr>
          <tr><th class="px-3 py-3 font-bold">Total Due</th><td class="px-3 py-3 border-t-2 border-solid border-black text-red-600">{{$currency}} {{$spocfee}}</td></tr>
          <tr><th class="px-3 py-3 font-bold">Total Paid</th><td class="px-3 py-3 border-b-2 border-solid border-black text-green-600">({{$currency}} {{$paid}})</td></tr>
          <tr><th class="px-3 py-3 font-bold">Balance</th><td class="px-3 py-3 border-b-2 border-solid border-black text-red-600">{{$currency}} {{$spocfee-$paid}}</td></tr>
  
        </tbody>
      
     </table>
         
         <div class="flex justify-end items-center mt-8">
            <button class="bg-green-600 text-white px-3 py-3 rounded-sm text-center mb-6" wire:click="paySPOC">Make Payment</button>
        </div>
</div>