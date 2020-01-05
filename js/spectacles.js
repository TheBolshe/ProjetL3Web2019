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
    url: "data/donneeSpectacle/" + nomjson(nom) + ".json",
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

function nomjson(nom) {
  console.log(nom.replace(/[^a-z]/gi, ''));
  switch (nom) {
    case "Barbara, où rêvent mes saisons":
      return "barbara";
      break;
    case "Le Tartuffe ou l'imposteur":
      return "tartuffe";
      break;
    case "Les confessions : Les années de Jeunesse":
      return "confessionJeunesse";
      break;
    case "Les confessions : Les années de Maturité":
      return "confessionMaturite";
      break;
    case "Les confessions : Les années de Sagesse":
      return "confessionSagesse";
      break;
    case "Titre Provisoire":
      return "titrePro";
      break;
    case "Le prophète":
      return "leprophete";
      break;
    case "Le château de ma mère":
      return "chateau";
      break;
    case "Fricassée de berniques sur lit de Prévert":
      return "fricassee";
      break;
    case "La gloire de mon père":
      return "gloire";
      break;
    case "Hugo es tu là?":
      return "hugo";
      break;
    case "La demande en mariage et L'ours":
      return "lademande";
      break;
    case "La promesse de l'aube":
      return "lapromesse";
      break;
    case "Le marchand de Venise":
      return "lemarchand";
      break;
    case "Mademoiselle Julie":
      return "mademoiselle";
      break;
    case "Le mariage":
      return "mariage";
      break;
    case "Port Racines":
      return "port";
      break;
    case "Les soliloques de Mariette":
      return "soliloques";
      break;
    default:
      return "";
  }
}

var str = "Barbara, où rêvent mes saisons";


listeSpectacles();
