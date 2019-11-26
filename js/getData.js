function getData() {
  var fin = {};
  var prog = new XMLHttpRequest();
  prog.onreadystatechange = function() {
    fin.dates = this.responseText;

    var data = new XMLHttpRequest();
    data.open("POST", "data/donneeSpectacle/tartuffe.json", true);
    data.onreadystatechange = function() {
      fin.infos = this.responseText;
      document.getElementById("main").innerHTML = JSON.stringify(fin);
    }
    data.send();
  }
  prog.open("POST", "php/filtreInfos.php", true);
  prog.send("nom='Le Tartuffe ou l'imposteur'")


}
