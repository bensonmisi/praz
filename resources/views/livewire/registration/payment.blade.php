<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('registration_category')}}">Registrations </a></div><div class="mr-2">/</div><div class="mr-2">Payment</div>
</div>
 <div class="w-full sm:w-3/6 mx-auto px-3 py-4 bg-white rounded-sm mt-4 shadow-md border border-solid border-gray-300">
 <div class="bg-gray-200 px-4 py-4 text-gray-700 flex justify-between items-center mt-4 mb-3">
  <div class="text-2xl">Select Payment method</div>
  <div>
      <?php $paid = $this->getPaid(); ?>
      <div class="text-red-500 font-bold"> Amount Due: ${{$amount}}</div>
      <div class="text-green-500 font-bold"> Amount Paid: ${{$paid}}</div>
      <div class="text-red-500 font-bold"> Balance: (${{$amount-$paid}})</div>
  </div>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-2 grid-gap-2 gap-2">
     <div class="bg-white px-3 py-3 text-center rounded-sm shadow-sm border border-solid border-gray-300 hover:border-green-700 flex justify-center items-center">
      <a href="{{route('registration_mobile','ecocash')}}"> 
     <div><img src="/img/ecocash.jpg" class=" h-24"/></div>
      </a>    
     </div>
     <div class="bg-white px-3 py-3 rounded-sm shadow-sm border border-solid border-gray-300 hover:border-green-700 flex justify-center items-center">
     <a href="{{route('registration_mobile','onemoney')}}"> 
      <div><img src="/img/onemoney.jpg" class="h-24"/></div>
     </a>
     </div>
     <div class="bg-white px-3 py-3 rounded-sm shadow-sm border border-solid border-gray-300 hover:border-green-700 flex justify-center items-center">
     <a href="{{route('registration_paynow')}}">
     <div><img src="/img/paynow.jpg" class="h-24"/></div>
     </a>
     </div>
     <div class="bg-white px-3 py-3 rounded-sm shadow-sm border border-solid font-bold text-center border-gray-300 hover:border-green-700 flex justify-center items-center">
      <a href="{{route('registration_internal')}}">
          <div>
              <div>
                Zipit/Bank Transfer
              </div>
              <div>
                  ${{$balance}}
              </div>
          </div>
      </a>
     </div>
    
    <!--  <div class="bg-white px-3 py-3 rounded-sm shadow-sm border border-solid border-gray-300 hover:border-green-700 flex justify-center items-center">
      <a href="{{route('registration_bank')}}">
     <div><img src="/img/upload.jpg" class="h-24"/></div>
      </a>
     </div> -->
 </div>
 </div>
</div>
