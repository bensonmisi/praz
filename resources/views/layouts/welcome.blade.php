<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>PRAZ</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('/css/fonts/css/font-awesome.min.css ') }}" rel="stylesheet">
        <script>
         let userAgentString = navigator.userAgent; 
         let IExplorerAgent =   userAgentString.indexOf("MSIE") > -1 ||  userAgentString.indexOf("rv:") > -1; 
         if(IExplorerAgent){
             alert('Our application is not compatible with this version of Internet explore . Please Use Mozila Firefox or Chrome to get the best experience of our application')
          
            }
          
        
        </script>
        <script src="{{ asset('js/app.js') }}" defer></script>
        <livewire:styles>
    </head>
    <body class="font-sans">
        <div id="app">
          @yield('content')
        </div>
  
    </body>

</html>