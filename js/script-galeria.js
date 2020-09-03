mostrarTodo()
function mostrarTodo(){
  x = document.getElementsByClassName("column-gallery");
  for (var i = 0;  i < x.length;  i++) {
    x[i].className += " show";
  }
}
function mostrarCategoria(categoria){ 
  x = document.getElementsByClassName(categoria);
  z = document.getElementsByClassName("column-gallery");
  for (var i = 0; i < z.length; i ++) {
    z[i].classList.remove("show");
  }
  for (var i = 0;  i < x.length;  i++) {
  x[i].className += " show"; 
  }
}