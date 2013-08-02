var name = prompt("Enter your name", "justin beiber");
if( name == "" ) name = "Justin Beiber";
name = name.replace(/(<([^>]+)>)/ig,"");
function getchat() {
  $.get('messages.txt', function(data) {
    var output = "";
    var lines = data.split("\n");
    var nol = lines.length;
    var ele = "";
    nol = nol-15;
    for( var i = 0; i < lines.length-1; i++) {
      ele = lines[i].split(":-");
      output += "<p><i><u>" + ele[0] + "</u></i> : " + ele[1] + "</p>";
    }
    $('#message').empty().append(output);
    var toscroll = document.getElementById('message');
    toscroll.scrollTop = toscroll.scrollHeight;
  });
}
$(document).ready(function() {
  console.log("jQuery loaded");
  $('#send').click(function() {
    var message = $('#newmessage').val();
    $.ajax( {
      url: "app.php",
      type: "POST",
      data:  {
        "chatter" : name,
        "chat"    : message
      },
      success: function(response) {
        $('#newmessage').val("");
        $('#newmessage').focus();
      }
    });
  });
});
