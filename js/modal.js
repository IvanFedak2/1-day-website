const openModalWindow = function () {
  
  
  for(i = 0; i <= 8; i++) { 
  
  const btnId = `myBtn${i}`
  const modalId = `myModal${i}`
  const closeClass = `close${i}`

 

  document.getElementById(btnId).onclick = function () {
  $(document.getElementById(modalId)).removeClass('out');
  document.getElementById(modalId).style.display = 'block';
  }
  document.getElementsByClassName(closeClass)[0].onclick = function() {
  $(document.getElementById(modalId)).addClass('out');
  }
  window.onclick = function(event) {
    if (event.target == document.getElementById(modalId)) {
      $(document.getElementById(modalId)).addClass('out');
    }
  }
}
}
openModalWindow()
