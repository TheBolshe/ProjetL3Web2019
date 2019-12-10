function acceuil() {
  document.getElementById("main").innerHTML = "";
}

function presentation() {

  document.getElementById("main").innerHTML = "chatte";
}

function programmation() {

  $.ajax({
    type: "GET",
    url: "programmation.html",
    success: function(data) {
      document.getElementById("main").innerHTML = data;
    }
  });
}

function tarif() {

}
