<?php
  session_start();
  header('Content-Type: application/json');
  $data = [];
  for ($i = 0; $i < count($_SESSION["panier"]); $i++) {
    $data[] = $_SESSION["panier"][$i];
  }
  echo json_encode($data);
?>
