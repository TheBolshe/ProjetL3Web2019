function getData () {
  var fin = {};
  var prog = new XMLHttpRequest();
  prog.onreadystatechange = function() {
    //document.getElementById("main").innerHTML = this.responseText;
  }
  prog.open("POST", "php/filtreInfos.php", true);
  prog.send("nom='Le Tartuffe ou l'imposteur'")
  var data = new XMLHttpRequest();
  prog.open("POST", "data/donneeSpectacle/tartuffe.json", true);
  prog.send();
  var
}
