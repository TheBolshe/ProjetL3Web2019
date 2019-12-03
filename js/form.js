function quelHeure(s1,s2){
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";
  if(s1.value == "LE CHÂTEAU DE MA MÈRE"){
    var optionArray = ["","20h30 le vendredi 02 août 2019","17h00 le samedi 03 août 2019","17h00 le dimanche 04 août 2019"];
  }
  for (var option in optionArray) {
    var newOption = document.createElement("option");
    newOption.innerHTML = optionArray[option];
    s2.options.add(newOption);
  }
}
