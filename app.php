<?php
  if(isset($_POST['chatter'])&&isset($_POST['chat'])) {
    $name = $_POST['chatter'];
    $message = $_POST['chat'];
    $text = $name . ":-" . $message . "\n";
    $file = fopen("messages.txt", "a+");
    fwrite($file,$text);
    echo $text." success";
  }
  else echo "error";
