<?php
  session_start();
  $_SESSION["panier"][] = json_decode($_POST["billet"], true);

  echo json_encode($_SESSION["panier"][0]);
?>
