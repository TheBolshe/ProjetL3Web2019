<?php
  header('Content-Type: application/json');
  $village =  $_GET['village'];
  //$jour = "lundi 05 août 2019";
  $data = [];
  $csv = array_map('str_getcsv', file('../data/ResultatsFestival.csv'));
  for ($i = 1; $i < count($csv); $i++) {
    if ($csv[$i][4] == $village) {
      $data[] = array(
        "spectacle" => $csv[$i][2],
        "jour"  => $csv[$i][0],
        "heure"  => $csv[$i][1],
        "lieu" => $csv[$i][3]
      );
    }
  }
  echo json_encode($data);
 ?>
