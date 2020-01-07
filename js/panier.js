function addToPanier(billet) {
  $.ajax({
    type: "POST",
    url: "php/addToPanier.php",
    data: "billet=" billet,
    success : function(data){
    }
  });
}

function affichePanier(panier) {
  var panierDom = document.createElement("ul");
  for (let element in panier) {
    var billetDom = constrBillet(element);
    panierDom.appendChild(billetDom)
  }
}

function constrBillet (billet) {
  var billetDom = document.createElement("ul");
  var detail = document.createElement("li");
  var nombre = document.createElement("li");
  var texteDetail = document.createTextNode(billet.detail.nom + ", " billet.detail.jour + ", " + billet.detail.heure + " à " + billet.detail.village);
  var texteNombre = document.createTextNode(billet.nombre);
  detail.appendChild(texteDetail);
  nombre.appendChild(texteNombre);
  billetDom.appendChild(detail);
  billetDom.appendChild(nombre);
  return billetDom;
}

{
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
}else{
  ready();
}

function ready(){
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

function supprimerItem(){
  buttonClicked.parentElement.parentElement.remove();
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
