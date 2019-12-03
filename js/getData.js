function getData() {
  var fin = {};
  var callDates = $.ajax({
    type: "POST",
    url: "php/filtreInfos.php",
    data: "nom=Le Tartuffe ou l'imposteur",
    success: function(data) {
      console.log(data);
      fin.dates = data;
    }
  });
  var callInfos = $.ajax({
    type: "POST",
    url: "data/donneeSpectacle/tartuffe.json",
    success: function(data) {
      console.log(data);
      fin.infos = data;
    }
  });
  $.when (callDates, callInfos).done(function() {console.log(fin)});
}
