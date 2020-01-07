<?php
  session_start();
  $key = array_search($_GET["billet"], $_SESSION["panier"]);
  if ($key != FALSE) {
    unset($_SESSION["panier"][$key]);
  }
?>
