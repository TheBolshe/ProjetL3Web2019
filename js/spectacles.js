function listeSpectacles() {
  $.ajax({
    type: "GET",
    url: "php/getSpectacles.php",
    success: function(data) {
      constrListe(data);
    }
  })
}

function constrListeOLD(liste) {
  var contenu = "<ul>\n";
  for (var i in liste) {
    contenu += "<li onclick=" + "'" + 'afficheSpectacle("' + liste[i] + '")' + "'" + '>' + liste[i] + "</li>\n";
  }
  contenu += "</ul>\n";
  contenu += '<div id="spectacle"></div>'
  console.log(contenu);
  document.getElementById("main").innerHTML = contenu;
}

function constrListe(tableau) {
  var liste = document.createElement("ul");
  for (var i in tableau) {
    var element = document.createElement("li");
    element.addEventListener("click", afficheSpectacle(tableau[i]));
    liste.appendChild(element);
  }
  document.body.insertBefore(liste, document.getElementById("spectacle"));
}


function afficheSpectacle(nom) {
  let callInfos = $.ajax({
    type: "GET",
    url: "data/donneeSpectacle/" + nom.replace(/[^a-z]/gi, '') + ".json",
    success: function(data) {
      constrSpectacle(data);
    }
  });
}

function constrSpectacle(donnees) {
  var contenu = "<h2>\n<titrespectacle>" + donnees.titre + "</titrespectacle>, ";
  contenu += "d'après <auteur>" + donnees.auteur + "</auteur>, ";
  contenu += "par <troupe> " + donnees.troupe + "</troupe>\n</h2>\n";
  contenu += '<figure>\n<img src="' + donnees.image + '">\n';
  contenu += "<figurecaption>" + donnees.photographe + "</figurecaption>\n</figure>\n";
  contenu += "<p>" + donnees.description + "</p>\n";
  document.getElementById("spectacle").innerHTML = contenu;
}


listeSpectacles();
