<?php
  header('Content-Type: application/json');
  class donnee {
    public $jour = [];
    public $Heure = [];
    public $Lieu = [];
    public $Village = [];
  }
  $nom =  $_POST['nom'];
  //$nom = "Le Tartuffe ou l'imposteur";
  $data = new donnee;
  $csv = array_map('str_getcsv', file('../data/ResultatsFestival.csv'));
  for ($i = 1; $i < count($csv); $i++) {
    if ($csv[$i][2] == $nom) {
      //faire des trucs stylés
      array_push($data -> jour, $csv[$i][0]);
      array_push($data -> Heure, $csv[$i][1]);
      array_push($data -> Lieu, $csv[$i][3]);
      array_push($data -> Village, $csv[$i][4]);
    }
  }

  echo json_encode($data);
 ?>
