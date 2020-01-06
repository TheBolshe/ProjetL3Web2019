function parJour() {
  $.ajax({
    type: "GET",
    url: "php/getJour.php",
    success: function(data) {
      constrNavJour(data);
    }
  })
}

function constrNavJour(liste) {
  var ul = document.createElement("ul");
  ul.id = "selection";
  for (let i in liste) {
    var li = document.createElement("li");
    var jour = document.createTextNode(liste[i]);
    li.appendChild(jour);
    li.onclick = function() {
      afficheJour(liste[i]);
    }
    ul.appendChild(li);
  }
  if (document.getElementById("selection")){
    document.getElementById("selection").remove();
    console.log("toto")
  }else {
    console.log("tata")
  }
  document.getElementsByClassName("menu")[0].appendChild(ul);
}

function afficheJour(jour) {

}

function constrParJour(donnees) {

}
