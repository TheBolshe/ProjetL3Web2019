<?php
  header('Content-Type: application/json');
  $data = array(
    "SJ"  => [],
    "SA" => [],
    "E"   => []
  );
  $csv = array_map('str_getcsv', file('../data/ResultatsFestival.csv'));
  for ($i = 1; $i < count($csv); $i++) {
<<<<<<< HEAD
    $data["SJ"][] = $csv[$i][9];
    $data["SA"][] = $csv[$i][10];
    $data["E"][] = $csv[$i][11];
=======
    $list["SJ"][] = $csv[$i][9];
    $list["SA"][] = $csv[$i][10];
    $list["O"][] = $csv[$i][8];
    $list["R"][] = $csv[$i][7];
    $list["P"][] = $csv[$i][6];
    $list["E"][] = $csv[$i][11];
>>>>>>> 5d0f6ab85eaf25e6307cb599740e3d9b552a9510
  }

  echo json_encode($data);
 ?>
