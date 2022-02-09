let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  $(modal).removeClass('out');
  modal.style.display = "block";
}
span.onclick = function() {
  $(modal).addClass('out');
}
window.onclick = function(event) {
  if (event.target == modal) {
    $(modal).addClass('out');
  }
}