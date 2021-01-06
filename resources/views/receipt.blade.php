<html>
 <head>
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

 <link rel="stylesheet" href="./css/bootstrap.min.css">

</head>
 <body style="font-size: 8px">
  
   <div>
     <div style="width: 200px; height:200px; text-align:left; padding-left:5px;">
       <h1>Receipt</h1>
       <table class="table table-bordered">
           <tr><th>Number</th><td>{{$receipt->receiptnumber}}</td></tr>
           <tr><th>Date:</th><td>{{$receipt->created_at}}</td></tr>
       </table>
    </div>
    <div style="float:right; width:300px;height:200px; margin-top:-150px; padding-right:5px;">
      <img src="./img/logo.png" style="width: 200px; height:120px"/>
   </div>

   <div style="width:300px; height:200px; text-align:left; padding-left:5px; margin-top:180px;">
    <h6>From</h6>
    <b>PROCUREMENT REGULATORY AUTHORITY OF ZIMBABWE</b><br/>
     76 Samora Machel<br/>
      Harare<br/>
     Zimbabwe
   </div>
   <div style="width:400px; height:200px; text-align:left; padding-left:5px; margin-top:-200px; float:right">
    <h6>To</h6>
    <b>{{Auth::user()->company->name}}</b><br/>
       {{Auth::user()->company->contacts->address}}
   </div>
   <div style="width:100%; text-align:left; padding-left:5px; margin-top:200px">
     <table class="table">
         <?php $total =0; $curreny='';?>
         <tr><th>Date</th><th>Invoice Number</th><th>Receipt Number</th><th>Method</th><th class="text-right">Amount</th></tr>
        
          <tr>
              <td>{{$receipt->created_at}}</td>
              <td>{{$receipt->invoicenumber}}</td>
              <td>{{$receipt->receiptnumber}}</td>
              <td>{{$receipt->method}}</td>
              <td class="text-right">{{$receipt->amount}}</td>              
            </tr>
        
         <tr>
             <td colspan="4"></td>
             <td class="text-right">
               <table class="table table-bordered">
                                   <tr><th>Total Paid</th><td><b>{{$receipt->amount}}</b></td></tr>
               </table>
            </td>
        </tr>
     </table>
  

  </div>

 
</div>
   </div>
 </body>
</html>
