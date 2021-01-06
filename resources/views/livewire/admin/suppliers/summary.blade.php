<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.suppliers.index')}}">Supplier Filter</a></div><div class="mr-2">/</div><div class="mr-2">Suppliers Dashboard</div>
</div>
<div class="bg-white px-3 py-5 container mx-auto rounded-sm shadow-md border border-solid m-1 border-gray-200">
<div class="grid grid-flow-col sm:grid-flow-row md:grid-flow-col-dense lg:grid-flow-row-dense xl:grid-flow-col  gap-2">
  <div class="px-3 py-3 rounded-md border shadow flex justify-between items-center">
      <div class=" text-2xl">Total Suppliers</div>
      <div class="bg-green-600 px-5 py-3 text-white rounded-full text-2xl">{{$suppliers}}</div>
  </div>

  <div class="px-3 py-3 rounded-md border shadow flex justify-between items-center">
  <div class=" text-2xl">Total Categories</div>
      <div class="bg-blue-600 px-5 py-3 text-white rounded-full text-2xl">{{$total}}</div>
  </div>
</div> 
<div class="bg-white px-3 py-5 container mx-auto rounded-sm shadow-md border border-solid m-1 border-gray-200">
    <div class="flex justify-between items-center px-3 py-3 bg-blue-700 text-white">
        <div class="text-2xl">Total Categories</div>
        <div class="text-2xl">{{$total}}</div>
    </div>
<canvas id="monthlyChart" class="rounded shadow"></canvas>
</div>
<div class="bg-white px-3 py-5 container mx-auto rounded-sm shadow-md border border-solid m-1 border-gray-200">
<canvas id="codeChart" class="rounded shadow"></canvas>

</div>
</div>
<script>
    var ctx = document.getElementById('monthlyChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
// The data for our dataset
        data: {
            labels:  {!!json_encode($monthlabels)!!} ,
            datasets: [
                {
                    label: 'Monthly Suppliers Registrations',
                    backgroundColor:{!! json_encode($colors)!!} ,
                    data:  {!! json_encode($monthdataset)!!} ,
                },
            ]
        },
// Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value) {if (value % 1 === 0) {return value;}}
                    },
                    scaleLabel: {
                        display: false
                    }
                }]
            },
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    fontColor: '#122C4B',
                    fontFamily: "'Muli', sans-serif",
                    padding: 25,
                    boxWidth: 25,
                    fontSize: 14,
                }
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 0,
                    bottom: 10
                }
            }
        }
    });
    var ctx = document.getElementById('codeChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
// The data for our dataset
        data: {
            labels:  {!!json_encode($codelabels)!!} ,
            datasets: [
                {
                    label: 'Total Registrations by Code',
                    backgroundColor: {!! json_encode($colors)!!} ,
                    data:  {!! json_encode($codedataset)!!} ,
                },
            ]
        },
// Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value) {if (value % 1 === 0) {return value;}}
                    },
                    scaleLabel: {
                        display: false
                    }
                }]
            },
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    fontColor: '#122C4B',
                    fontFamily: "'Muli', sans-serif",
                    padding: 25,
                    boxWidth: 25,
                    fontSize: 14,
                }
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 0,
                    bottom: 10
                }
            }
        }
    });
</script>

</div>
