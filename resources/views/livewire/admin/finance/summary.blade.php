<div>
<div class="bg-gray-200 px-3 py-4 rounded-md flex justify-start items-center">
       <div class="text-indigo-600 px-3 py-3 mr-2"><a href="{{route('admin.home')}}">Dashboard</a></div><div class="mr-2">/</div><div class="mr-2">Finance Summary</div>
</div>
<div class="bg-white px-3 py-5 container mx-auto rounded-sm shadow-md border border-solid m-1 border-gray-200">
        @include('partials.message')     
      <div class="flex justify-between ">
            <div class="w-1/2">
            <canvas id="supplierChart" class="rounded shadow"></canvas>

            </div>
            <div class="w-1/2">
            <canvas id="spocChart" class="rounded shadow"></canvas>

            </div>
      </div>
      <div class="flex justify-between mt-10">
            <div class="w-1/2">
            <canvas id="bondChart" class="rounded shadow"></canvas>

            </div>
            <div class="w-1/2">
            <canvas id="establishmentChart" class="rounded shadow"></canvas>

            </div>
      </div>
      <div class="flex justify-between mt-10">
            <div class="w-1/2">
            <canvas id="depositChart" class="rounded shadow"></canvas>

            </div>
            <div class="w-1/2">
            <canvas id="paynowChart" class="rounded shadow"></canvas>

            </div>
      </div>
         
        

</div>
<script>
    var ctx = document.getElementById('supplierChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
// The data for our dataset
        data: {
            labels:  {!!json_encode($supplierlabels)!!} ,
            datasets: [
                {
                    label: 'Suppliers Receipts',
                    backgroundColor: {!! json_encode($colors)!!} ,
                    data:  {!! json_encode($supplierdataset)!!} ,
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
    var ctx = document.getElementById('spocChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
// The data for our dataset
        data: {
            labels:  {!!json_encode($spoclabels)!!} ,
            datasets: [
                {
                    label: 'SPOC Receipts',
                    backgroundColor: {!! json_encode($colors)!!} ,
                    data:  {!! json_encode($spocdataset)!!} ,
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
    var ctx = document.getElementById('bondChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
// The data for our dataset
        data: {
            labels:  {!!json_encode($bondlabels)!!} ,
            datasets: [
                {
                    label: 'Bid Bonds Receipts',
                    backgroundColor: {!! json_encode($colors)!!} ,
                    data:  {!! json_encode($bonddataset)!!} ,
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
    var ctx = document.getElementById('establishmentChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
// The data for our dataset
        data: {
            labels:  {!!json_encode($establishmentlabels)!!} ,
            datasets: [
                {
                    label: 'Estblishment Fees Receipts',
                    backgroundColor: "#096236" ,
                    data:  {!! json_encode($establishmentdataset)!!} ,
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
                        display: true
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
    var ctx = document.getElementById('depositChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
// The data for our dataset
        data: {
            labels:  {!!json_encode($depositlabels)!!} ,
            datasets: [
                {
                    label: 'Direct Deposits',
                    backgroundColor: {!! json_encode($colors)!!} ,
                    data:  {!! json_encode($depositdataset)!!} ,
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
    var ctx = document.getElementById('paynowChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
// The data for our dataset
        data: {
            labels:  {!!json_encode($supplierlabels)!!} ,
            datasets: [
                {
                    label: 'Paynow Payments',
                    backgroundColor: {!! json_encode($colors)!!} ,
                    data:  {!! json_encode($supplierdataset)!!} ,
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
