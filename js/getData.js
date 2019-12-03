function getData(arg, callback) {
  let fin = {};
  let callDates = $.ajax({
    type: "POST",
    url: "php/filtreInfos.php",
    data: "nom=Le Tartuffe ou l'imposteur",
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
    //console.log(fin);
    callback(fin);
  });
}


function printData() {
  console.log();
}
