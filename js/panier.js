{
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
}else{
  ready();
}

function ready(){
  var supprimerElement = document.getElementsByClassName('Panier_remove');
  for (var i = 0; i < supprimerElement.length; i++) {
    var button = supprimerElement[i];
    button.addEventListener('click',supprimerItem);
  }

  var quantiteInput = document.getElementsByClassName('Panier_quantite_input');
  for (var i = 0; i < quantiteInput.length; i++) {
    var input = quantiteInput[i];
    input.addEventListener('change',quantiteChange);
  }



}

function addToPanierClick(){
  console.log("bite");
  var titre = document.getElementById('form_spectacle')[0].innerText;
  var prix = document.getElementById('form_tarif')[0].value;
  var heure = document.getElementById('form_heure')[0].innerText;
  addToPanier(titre,prix,heure);
  updatePrix();
}

function addToPanier(titre,prix,heure){
  var panierColonne = document.createElement('div');
  panierColonne.classList.add('Panier_colonne');
  //var panierItem = document.getElementsByClassName('Panier_elements')[0];
  $.ajax({
    type : "GET",
    url : "item.html",
    sucess : function(data){
      document.getElemenstByClass('Panier_colonne').innerHTML = data;
      updatePrix();
    }
  });
  //panierItem.append('panierColonne');
}


function quantiteChange(event){
  var input = event.target;
  if(isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updatePrix();
}

function supprimerItem(event){
  var buttonClicked = event.target || event.srcElement;
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
