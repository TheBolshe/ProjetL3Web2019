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

  /*var addToPanierButton = document.getElementsByClassName('ajoutpanier');
  for (var i = 0; i < addToPanierButton.length; i++) {
    var button = addToPanierButton[i];
    button.addEventListener('click', addToPanierClick);
  }
  */
}

/*function addToPanierClick(event){
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var titre = shopItem.getElementById('form_spectacle')[0].innerText;
  var prix = shopItem.getElementById('form_tarif')[0].value;
  var heure = shopItem.getElementById('form_heure')[0].innerText;
  addToPanier(titre,prix,heure);
}

function addToPanier(titre,prix,heure){
  var panierColonne = document.createElement('div');
  panierColonne.classList.add('Panier_colonne');
  var panierItem = document.getElementsByClassName('Panier_elements')[0];
  var panierColonneContent =
    <div class="Panier_billets">
        <span class="Panier_item_titre">$(titre)</span>
    </div>
    <span class="Panier_prix">$(prix)</span>
    <div class="Panier_quantite">
        <input class="Panier_quantite_input" type="number" value="1">
        <button class="Panier_remove" type="button">Supprimer</button>
    </div>
  ;
  panierColonne.innerHTML = panierColonneContent;
}
*/

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
