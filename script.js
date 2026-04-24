function toggleMenu() {
  document.getElementById("navPrincipal").classList.toggle("abierto");
}

function cerrarMenu() {
  document.getElementById("navPrincipal").classList.remove("abierto");
}

/* function toggleMenu() {
  var menu = document.getElementById("navPrincipal");
  if (menu.style.display == "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

function cerrarMenu() {
  var menu = document.getElementById("navPrincipal");
  menu.style.display = ""; 
} */