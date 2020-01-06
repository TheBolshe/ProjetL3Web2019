
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
  var contenu = "<h2>\n<titrespectacle>" + donnees.titre + "</titrespectacle>, ";
  contenu += "d'après <auteur>" + donnees.auteur + "</auteur>, ";
  contenu += "par <troupe> " + donnees.troupe + "</troupe>\n</h2>\n";
  contenu += '<figure>\n<img src="' + donnees.image + '" height="25%" width="25%">\n';
  contenu += "<figurecaption>" + donnees.photographe + "</figurecaption>\n</figure>\n";
  contenu += "<p>" + donnees.description + "</p>\n";
  div.innerHTML = ""
  div.innerHTML = contenu;
}
