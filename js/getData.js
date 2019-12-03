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
    url: "data/donneeSpectacle/tartuffe.json",
    success: function(data) {
      //console.log(data);
      fin.infos = data;
    }
  });
  $.when(callDates, callInfos).done(function() {
    console.log(fin);

  });
}
