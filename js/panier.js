var billetId = 100;

function test() {
  //$.get("php/destroySession.php");
  $.get("php/getDureeVilles.php", {ville1: "Moulins", ville2: "Vichy"});
}

function initListeSpectacles() {
  $.ajax({
    type: "GET",
    url: "php/getTitreSpectacle.php",
    success: function(data) {
      addValues(data);
    }
  });
}

function addValues(liste) {
  var form = document.getElementById("form_spectacle");
  for (let i in liste) {
    var option = document.createElement("option");
    var text = document.createTextNode(liste[i]);
    option.appendChild(text);
    option.value = liste[i];
    form.appendChild(option);
  }
}


function creationBilletPanier() {
  var billet = {};
  billet.id = billetId++;
  billet.detail = {};
  billet.detail.nom = document.getElementById("form_spectacle").value;
  billet.detail.jour = document.getElementById("form_jour").value;
  billet.detail.heure = document.getElementById("form_heure").value;
  billet.type = document.getElementById("form_tarif").value;
  billet.nombre = document.getElementById("quantity").value;
  return billet;
}

function addToPanier() {
  var billet = JSON.stringify(creationBilletPanier());
  //console.log(billet);
  $.ajax({
    type: "POST",
    url: "php/addToPanier.php",
    data: "billet=" + billet,
    success: function() {
      $.get("php/sessionVar.php", function(data) {
        console.log(data);
        affichePanier(data);
      });
    }
  });
}

function affichePanier(panier) {
  var panierDom = document.createElement("ul");
  for (let element in panier) {
    //console.log(panier[element]);
    var billetDom = constrBillet(panier[element]);
    panierDom.appendChild(billetDom);
  }
  document.getElementById("panier").appendChild(panierDom);
}

function constrBillet(billet) {
  var billetDom = document.createElement("ul");
  billetDom.id = billet.id;
  var detail = document.createElement("li");
  var type = document.createElement("li");
  var nombre = document.createElement("li");
  var texteDetail = document.createTextNode(billet.detail.nom + ", " + billet.detail.jour + ", " + billet.detail.heure);
  var texteType = document.createTextNode(billet.type);
  var texteNombre = document.createTextNode(billet.nombre);
  detail.appendChild(texteDetail);
  type.appendChild(texteType);
  nombre.appendChild(texteNombre);
  billetDom.appendChild(detail);
  billetDom.appendChild(type);
  billetDom.appendChild(nombre);
  return billetDom;
}

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  initListeSpectacles();
}

/*
function ready(){
  var removeCartItemButtons = document.getElementsByClassName('Panier_remove');
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i];
      button.addEventListener('click', supprimerItem);
  }

  var quantiteInput = document.getElementsByClassName('Panier_quantite_input');
  for (var i = 0; i < quantiteInput.length; i++) {
    var input = quantiteInput[i];
    input.addEventListener('change',quantiteChange);
  }
}

function addToPanierClick(){
  var titre = document.getElementById('form_spectacle').value;
  var prix = document.getElementById('form_tarif').value;
  var heure = document.getElementById('form_heure').value;
  addToPanier(titre,prix,heure);
  //updatePrix();
}



function addToPanier(titre,prix,heure){
  var panierColonne = document.createElement('div');
  panierColonne.classList.add('Panier_colonne');
  var panierItem = document.getElementsByClassName('Panier_elements')[0];
  $.ajax({
    type : "GET",
    url : "item.html",
    success : function(data){
      document.getElementsByClassName("Panier_total").innerHTML += panierColonne;
      document.getElementsByClassName('Panier_colonne').innerHTML = data;
      document.getElementsByClassName('Panier_item_titre')[0].innerHTML = titre;
      document.getElementsByClassName('Panier_prix')[0].innerHTML = prix;
      updatePrix();
    }
  });
  panierItem.append('panierColonne');
}


function quantiteChange(event){
  var input = event.target;
  if(isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updatePrix();
}

function supprimerItem(event){
  var button = event.target;
  button.parentElement.parentElement.remove();
  updatePrix();
}

function updatePrix(){
  var panierElementContainer = document.getElementsByClassName('Panier_elements')[0];
  var panierColonne =  panierElementContainer.getElementsByClassName('Panier_colonne');
  var total = 0;
  for (var i = 0; i < panierColonne.length; i++) {
  var colonne = panierColonne[i];
  var panierprix = colonne.getElementsByClassName('Panier_prix')[0];
  var panierquantite = colonne.getElementsByClassName('Panier_quantite_input')[0];
  var prix = parseFloat(panierprix.innerText.replace('€',''));
  var quantite = panierquantite.value;
  total = total + (prix*quantite);
  }
  total = Math.round(total * 100)/100
  document.getElementsByClassName('Panier_total_prix')[0].innerText = total + '€';
}

}
*/
