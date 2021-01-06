<html>
 <head>
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

 <link rel="stylesheet" href="./css/bootstrap.min.css">

</head>
 <body style="font-size: 8px">
  
   <div>
     <div style="width: 200px; height:200px; text-align:left; padding-left:5px;">
       <h1>INVOICE</h1>
       <table class="table table-bordered">
           <tr><th>Number</th><td>{{$inv}}</td></tr>
           <tr><th>Date:</th><td>{{Carbon\Carbon::now()}}</td></tr>
       </table>
    </div>
    <div style="float:right; width:300px;height:200px; margin-top:-150px; padding-right:5px;">
      <img src="./img/logo.png" style="width: 200px; height:120px"/>
   </div>

   <div style="width:300px; height:200px; text-align:left; padding-left:5px; margin-top:100px;">
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
   <div style="width:100%; text-align:left; padding-left:5px; margin-top:100px">
     <table class="table">
         <?php $total =0; $curreny='';?>
         <tr><th>Date</th><th>Code</th><th>Description</th><th>Currency</th><th class="text-right">Amount</th></tr>
         @forelse($invoice as $invo)
          <tr>
              <td>{{$invo->created_at}}</td>
              <td>{{$invo->category->code}}</td>
              <td>{{$invo->category->name}}</td>
              <td>{{$invo->currency->name}}</td>
              <td class="text-right">{{$invo->cost}}</td>
              <?php 
              $curreny = $invo->currency->name;
              $total = $total+$invo->cost;
               ?>
            </tr>
         @empty

         @endforelse
         <tr>
             <td colspan="4"></td>
             <td class="text-right">
               <table class="table table-bordered">
                                   <tr><th>Total Due</th><td><b>{{$curreny}}{{$total}}</b></td></tr>
               </table>
            </td>
        </tr>
     </table>
     <hr/>
     <h5>Banking Details</h5>
     <p>
     @if(strtoupper($invoice[0]->currency->name) =='ZWL')   
      <b>Account Name : Procurement Regulatory Authority of Zimbabwe</b><br/>
      <b> Bank : CBZ</b><br/>
      <b>Account Number: 01121064850020</b><br/>
      <b>Branch : Kwame Nkrumah</b>
      
     @else
     <b>Account Name : Procurement Regulatory Authority of Zimbabwe</b><br/>
     <b> Bank : CBZ</b><br/>
     <b> Account Type : Nostro United States Dollar(USD)</b><br/>
     <b>Account Number :01121064850040</b><br/>
     <b>Branch : Kwame Nkrumah</b><br/>
     <b>Branch Sort Code :6101</b><br/>
     <b>Swift Code :COBZZWHAXXXX</b><br/>
     @endif
     </p>

  </div>

 
</div>
   </div>
 </body>
</html>
