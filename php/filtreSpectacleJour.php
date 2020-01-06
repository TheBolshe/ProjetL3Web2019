<?php
  header('Content-Type: application/json');
  //$jour =  $_POST['jour'];
  $jour = "lundi 05 août 2019";
  $data = [];
  $csv = array_map('str_getcsv', file('../data/ResultatsFestival.csv'));
  for ($i = 1; $i < count($csv); $i++) {
    if ($csv[$i][0] == $jour) {
      $data[] = array(
        "spectacle" => $csv[$i][2],
        "lieu"  => $csv[$i][3],
        "heure"  => $csv[$i][1]
      );
    }
  }
  echo json_encode($data);
 ?>
