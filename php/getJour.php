<?php
  header('Content-Type: application/json');
  $csv = array_map('str_getcsv', file('../data/ResultatsFestival.csv'));
  $list = [];
  for ($i = 1; $i < count($csv); $i++) {
    $list[] = $csv[$i][0];
  }
  //echo json_encode(array_unique($list, SORT_REGULAR));
  echo json_encode(array_keys(array_flip($list)));
 ?>
