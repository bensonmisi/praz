<html>
  <head>
    <title>PRAZ SUPPLIER CERTIFICATE</title>
  </head>
  <body>
  
<div style="width:725px; height:920px;  text-align:center; border: 1px solid #787878">
        <p style="text-align:center"><img  src="./img/logo.fw.png"></p>
       <span style="font-size:30px; font-weight:bold">{{$supplier->expire_year}} ANNUAL REGISTRATION OF A BIDDER</span>
       <br/>
       <br/>
         <span style="font-size:25px;"><b><i>{{$supplier->category->name}}({{$supplier->category->code}})</i></b></span>
       <br><br>            
      <span style="font-size:18px">The Procurement Regulatory Authority of Zimbabwe has approved <b><i>{{$supplier->customer->name}}'s</i></b> application for inclusion on the Registered List of Bidders for the above category , in terms of Section 4 of the Public Procurement and Disposal of Public Assets (General) Regulations, 2018 for a period expiring 31st December {{$supplier->expire_year}}</span>
     <br/><br/>
     <span style="font-size:20px">Verification Code: <b>{{$supplier->code}}</b></span><br/><br/>
       <span style="font-size:18px"><b><i>Please note that the authenticity and validity of this certificate must be verified on our PRAZ portal at http://portal.praz.org.zw/verification</i></b></span><br>
      
      <span style="font-size:30px"><img src="data:image/png;base64, {!! base64_encode(QrCode::format('png')->size(400)->generate($supplier->code)) !!} "></span>

</div>
  </body>
</html>