function listeSpectacles() {
  $.ajax({
    type: "GET",
    url: "php/getTitreSpectacle.php",
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

function afficheSpectacle(nom) {
  console.log(nom);
  $.ajax({
    type: "GET",
    url: "data/donneeSpectacle/" + nom.replace(/[^a-z]/gi, '') + ".json",
    success: function(data) {
      constrSpectacle(data);
    }
  });
}

function constrSpectacle(donnees) {
  var div = document.getElementById("spectacle");
  console.log(div);
  var contenu = "<h2>\n<titrespectacle>" + donnees.titre + "</titrespectacle>, ";
  contenu += "d'après <auteur>" + donnees.auteur + "</auteur>, ";
  contenu += "par <troupe> " + donnees.troupe + "</troupe>\n</h2>\n";
  contenu += '<figure>\n<img src="' + donnees.image + '" height="25%" width="25%">\n';
  contenu += "<figurecaption>" + donnees.photographe + "</figurecaption>\n</figure>\n";
  contenu += "<p>" + donnees.description + "</p>\n";
  div.innerHTML = ""
  div.innerHTML = contenu;
}

function constrListe(liste) {
  var ul = document.createElement("ul");
  ul.id = "selection";
  for (let i in liste) {
    var li = document.createElement("li");
    //var nom = document.createTextNode(tableau[i]);
    var button = document.createElement("input");
    button.type = "button";
    button.value = liste[i];
    button.onclick = function() {
      afficheSpectacle (liste[i]);
    }
    li.appendChild(button);
    ul.appendChild(li);
  }
  //console.log(liste);
  //document.body.insertBefore(ul, document.body.childNodes[0]);
  if (document.getElementById("selection")){
    document.getElementById("selection").remove();
    console.log("toto")
  }else {
    console.log("tata")
  }
  document.getElementsByClassName("menu")[0].appendChild(ul);
}
