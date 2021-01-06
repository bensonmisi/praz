<div class="">
@if (session()->has('success'))
            <div class=" text-lg bg-green-300 text-white block px-3 py-3  rounded-sm shadow-sm">
                {{ session('success') }}
            </div>
            @endif
            @if (session()->has('error'))
            <div class="text-lg bg-red-300 text-white block px-3 py-3 rounded-sm shadow-sm"">
                {{ session('error') }}
            </div>
            @endif
</div>
