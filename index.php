<html>
  <head>
    <title>
      chatApp
    </title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="jquery.js"></script>
    <script src="script.js"></script>
  </head>
  <body onload="setInterval('getchat();',1000)">
    <center>
    <h1>Chatter!</h1>
    <div id="container" align="center">
      <div id="message" align="center">
      </div>
      <input id="newmessage" type="text"/>
      <p id="p1"><button id="send" type="submit">Send</button></p>
    </div>
    </center>
  </body>
</html>
