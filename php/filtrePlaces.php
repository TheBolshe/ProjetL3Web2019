<?php
  header('Content-Type: application/json');
  $data = array(
    "SJ"  => [],
    "SA" => [],
    "E"   => [],
    "O"   => [],
    "R"   => [],
    "P"   => []
  );
  $csv = array_map('str_getcsv', file('../data/ResultatsFestival.csv'));
  for ($i = 1; $i < count($csv); $i++) {
    $data["SJ"][] = $csv[$i][9];
    $data["SA"][] = $csv[$i][10];
    $data["O"][] = $csv[$i][8];
    $data["R"][] = $csv[$i][7];
    $data["P"][] = $csv[$i][6];
    $data["E"][] = $csv[$i][11];
  }

  echo json_encode($data);
 ?>
