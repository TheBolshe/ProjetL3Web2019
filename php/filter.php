<?php
  //$nom =  $_POST['nom']; 
  $nom = "Le Tartuffe ou l'imposteur";
  $csv = array_map('str_getcsv', file('../data/ResultatsFestival.csv'));
  for ($i = 1; $i <= count($csv); $i++) {
    if ($csv[$i][2] == $nom) {
      //faire des trucs stylés
      echo json_encode($csv[$i]);
      echo "<br>";
    }
  }
 ?>
