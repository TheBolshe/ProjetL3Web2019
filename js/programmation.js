function parVillage() {
  $.ajax({
    type: "GET",
    url: "php/getVillage.php",
    success: function(data) {
      clearMain();
      constrNav(data, "vill");
    }
  })
}

function parJour() {
  $.ajax({
    type: "GET",
    url: "php/getJour.php",
    success: function(data) {
      clearMain();
      constrNav(data, "jour");
    }
  })
}

function parSpectacle() {
  $.ajax({
    type: "GET",
    url: "php/getTitreSpectacle.php",
    success: function(data) {
      clearMain();
      constrNav(data, "spec");
      createCadreSpectacle();
    }
  });
}

function createCadreSpectacle() {
  var div = document.createElement("div");
  div.id = "spectacle";
  document.getElementById("main").appendChild(div);
}

function clearMain() {
  document.getElementById("main").innerHTML = "";
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
    url: "php/filtreSpectacleJour.php",
    data: "jour=" + jour,
    success: function(data) {
      constrJour(data);
    }
  });
}

function afficheVillage(village) {
  $.ajax({
    type: "GET",
    url: "php/filtreSpectacleVillage.php",
    data: "village=" + village,
    success: function(data) {
      constrVillage(data);
    }
  });
}

function constrJour(donnees) {
  //console.log(donnees);
  var ul = document.createElement("ul");
  ul.id = "specJour";
  for (let i in donnees) {
    var li = document.createElement("li");
    var texte = document.createTextNode(donnees[i].spectacle + " à " + donnees[i].heure + " a " + donnees[i].village);
    li.appendChild(texte);
    li.onclick = function() {
      afficheSpectacle(donnees[i].spectacle);
    }
    ul.appendChild(li);
  }
  if (document.getElementById("specJour")) {
    document.getElementById("specJour").remove();
  }
  if (document.getElementById("spectacle")) {
    document.getElementById("spectacle").remove();
  }
  document.getElementById("main").appendChild(ul);
  createCadreSpectacle();
}

function constrVillage(donnees) {
  var ul = document.createElement("ul");
  ul.id = "specVillage";
  for (let i in donnees) {
    var li = document.createElement("li");
    var texte = document.createTextNode(donnees[i].spectacle + " au " + donnees[i].lieu + " le " + donnees[i].jour + " à " + donnees[i].heure);
    li.appendChild(texte);
    ul.appendChild(li);
    li.onclick = function() {
      afficheSpectacle(donnees[i].spectacle);
    }
  }
  if (document.getElementById("specVillage")) {
    document.getElementById("specVillage").remove();
  }
  if (document.getElementById("spectacle")) {
    document.getElementById("spectacle").remove();
  }
  document.getElementById("main").appendChild(ul);
  createCadreSpectacle();
}
