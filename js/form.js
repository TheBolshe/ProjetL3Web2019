function quelHeure(s1,s2){
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";
  var spectacle = getData();
  var pair = spectacle.dates.Heure;
  for (var i in pair) {
    var newOption = document.createElement("option");
    newOption.innerHTML = i;
    s2.options.add(newOption);
  }
}
