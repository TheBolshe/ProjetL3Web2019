function nomjson(nom) {
  console.log(nom);
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

function getData(nom) {
  let fin = {};
  let callDates = $.ajax({
    type: "POST",
    url: "php/filtreInfos.php",
    data: "nom=" + nom,
    success: function(data) {
      //console.log(data);
      fin.dates = data;
    }
  });
  let callInfos = $.ajax({
    type: "POST",
    url: "data/donneeSpectacle/" + nomjson(nom) + ".json",
    success: function(data) {
      //console.log(data);
      fin.infos = data;
    }
  });
  $.when(callDates, callInfos).done(function() {
    console.log(fin);

  });
}
