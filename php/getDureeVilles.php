<?php
  session_start();
  $csv = array_map('str_getcsv', file('../data/distancesVilles.csv'));
  for ($i = 1; $i < count($csv); $i++) {
    if ($csv[$i][0] == $_GET["ville1"]){
      echo $csv[$i][array_search($_GET["ville2"], $csv[0])];
    }
  }
 ?>
