<html>
 <head>
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

 <link rel="stylesheet" href="./css/bootstrap.min.css">

</head>
 <body>
  
   <div>
     <div style="width: 200px; height:200px; text-align:left; padding-left:5px;">
       <h1>Bid Bond</h1>
       <table class="table table-bordered">
           <tr><th>Code</th><td>{{$bid->code}}</td></tr>
           <tr><th>Date:</th><td>{{$bid->created_at}}</td></tr>
       </table>
    </div>
    <div style="float:right; width:300px;height:200px; margin-top:-150px; padding-right:5px;">
      <img src="./img/logo.png" style="width: 200px; height:120px"/>
   </div>

    <div style="width:100%; padding-left:5px; margin-top:200px">
     <p><b>This letter serves to confirm {{Auth::user()->company->name}} has successfully paid the following tender fees  at PROCUREMENT REGULATORY AUTHORITY OF ZIMBABWE</b></p>
      <h4>Tender Details</h4>
      <hr/>
     <table class="table table-bordered">
       <tr><th>Procurement Entry</th><td>{{$tender->company->name}}</td></tr>
       <tr><th>Tender Number</th><td>{{$tender->tendernumber}}</td></tr>
       <tr><th>Tender Close Date</th><td>{{$tender->close_date}}</td></tr>               
     </table>
     <br/>
     <table class="table table-bordered">
         <tr><th>Description</th><th>Amount</th></tr>
          @forelse($invoices as $invoice)
          <tr>
              <td>{{$invoice->description}}</td>
              <td>{{$invoice->currency->name}}{{$invoice->cost}}</td>
          </tr>
          @empty
         <tr><td colspan="2" class="text-danger text-center">No Tender Fees Found</td></tr>
          @endforelse
     </table>
     
 


  </div>

 
</div>
   </div>
 </body>
</html>
