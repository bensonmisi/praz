    <div x-data="{ balance:false }"class="relative">
                        <button @click="balance = !balance" class=" text-gray-700  py-8 px-4 mr-4 font-bold border-solid border-r border-l border-gray-400 hover:text-green-700 hover:border-green-700  focus:outline-none"><span>My Wallet</span></button>
                        <ul 
                            x-show="balance" 
                            @click.away = "balance = false"
                            class=" absolute font-normal bg-white shadow overflow-hidden rounded w-40 border mt-1 py-1 right-0 z-20">
                            <li class="px-3 py-3 hover:bg-gray-300">
                            <div class="flex justify-between items-center"><span class="text-xs font-bold">Nonrefundable:</span> <span class="ml-2">${{$nonrefundable}}</span></div>
      
                            </li>
                            <li class=" px-3 py-3 hover:bg-gray-300">
                            <div class="flex justify-between items-center"><span class="text-xs font-bold">Refundable:</span><span class="ml-2"> ${{$refundable}}</span></div>
    
                            </li>
                        </ul>
        </div>

 