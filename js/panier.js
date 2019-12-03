function LignedePanier(nom,qte){
  this.nameArticle = name;
  this.qteArticle = qte;
  this.ajouterQte = function (qte){
    this.qteArticle += qte;
  }
  this.getName = function (){
    return this.nameArticle;
  }
}

function Panier() {
  this.liste = [];
  this.ajouterArticle = function(name,qte){
    var index = this.getArticle(name);
    if (index == -1){
      this.liste.push(new LignePanier(name,qte));
    }else{
      this.liste[index].ajouterQte(qte);
    }
  }
  this.getArticle = function(name){
    for (var i = 0; i < this.liste.length; i++) {
      if (name == this.liste[i].getName()) {
        return i;
      }
    }
    return -1;
  }

  this.supprimerArticle = function(name){
    var index = this.getArticle(name);
    if(index > -1){
      this.liste.splice(index, 1);
    }
  }
}
