<?php
  header('Content-Type: application/json');
  $list = array(
    "SJ"  => [],
    "SA" => [],
    "E"   => []
  );
  $csv = array_map('str_getcsv', file('../data/ResultatsFestival.csv'));
  for ($i = 1; $i < count($csv); $i++) {
    $list["SJ"][] = $csv[$i][9];
    $list["SA"][] = $csv[$i][10];
    $list["O"][] = $csv[$i][8];
    $list["R"][] = $csv[$i][7];
    $list["P"][] = $csv[$i][6];
    $list["E"][] = $csv[$i][11];
  }

  echo json_encode($list);
 ?>
