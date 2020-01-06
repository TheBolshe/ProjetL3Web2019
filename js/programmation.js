function parVillage() {
  $.ajax({
    type: "GET",
    url: "php/getVillage.php",
    success: function(data) {
      constrNav(data, "vill");
    }
  })
}

function parJour() {
  $.ajax({
    type: "GET",
    url: "php/getJour.php",
    success: function(data) {
      constrNav(data, "jour");
    }
  })
}

function parSpectacle() {
  $.ajax({
    type: "GET",
    url: "php/getTitreSpectacle.php",
    success: function(data) {
      constrNav(data, "spec");
    }
  })
}

function constrNav(liste, type) {
  var ul = document.createElement("ul");
  ul.id = "selection";
  for (let i in liste) {
    var li = document.createElement("li");
    var jour = document.createTextNode(liste[i]);
    li.appendChild(jour);
    li.onclick = function() {
      switch (type) {
        case "spec":
          afficheSpectacle(liste[i]);
          break;
        case "jour":
          afficheJour(liste[i]);
          break;
        case "vill":
          afficheVillage(liste[i]);
          break;
        default:
      }
    }
    ul.appendChild(li);
  }
  if (document.getElementById("selection")) {
    document.getElementById("selection").remove();
  }
  document.getElementsByClassName("menu")[0].appendChild(ul);
}

function afficheJour(jour) {
  $.ajax({
    type: "GET",
    url: "php/getTitreSpectacle.php",
    success: function(data) {
      constrNav(data, "spec");
    }
  })
}

function constrJour(donnees) {
  var ul = document.createElement("ul");
  ul.id = "jourSpectacles"
  for (let i in donnees) {
    var li = document.createElement("li");
    var nom = document.createTextNode(donnees[i].spectacle + " à " + donnees[i].heure + " au " + donnees[i].lieu);
    li.appendChild(nom);
  }
  if (document.getElementById("jourSpectacles")) {
    document.getElementById("jourSpectacles").remove();
  }
}



function afficheVillage(village) {

}
