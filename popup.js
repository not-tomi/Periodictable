// const popup = document.getElementById("popup");
//         const close = document.getElementById("close");

//         function showPopup() {
//           const elemento = document.getElementById("elementNombre").innerHTML;
//           const linkWiki = "https://es.wikipedia.org/wiki/";
//           const wikiBrowser = linkWiki + elemento;
//           // debugger;
//           document.getElementById("uwu").src=wikiBrowser;
//           popup.style.display = "block";
//         }

//         function hidePopup() {
//           popup.style.display = "none";
//         }

//         close.addEventListener("click", hidePopup);



// const popup = document.getElementById("popup");
// const close = document.getElementById("close");

// function showPopup() {
//   const elemento = document.getElementById("elementNombre").innerHTML;
//   const linkWiki = "https://es.wikipedia.org/wiki/";
//   const wikiBrowser = linkWiki + elemento;
//   document.getElementById("uwu").src=wikiBrowser;
//   popup.style.display = "block";
// }

// function hidePopup() {
//   popup.style.display = "none";
// }

// close.addEventListener("click", hidePopup);

// const popup = document.getElementById("popup");
// const close = document.getElementById("close");

// function showPopup(button) {
//   let elemento;
//   let linkWiki;
//   let wikiBrowser;

//   if (button === "boton1") {
//     elemento = "Elemento1";
//     linkWiki = "https://es.wikipedia.org/wiki/Elemento1";
//   } else if (button === "boton2") {
//     elemento = "Elemento2";
//     linkWiki = "https://es.wikipedia.org/wiki/Elemento2";
//   }

//   wikiBrowser = linkWiki + elemento;
//   document.getElementById("uwu").src=wikiBrowser;
//   popup.style.display = "block";
// }

// function hidePopup() {
//   popup.style.display = "none";
// }

// close.addEventListener("click", hidePopup);


// """"""""""""""""""""""""""""ARRIBA ESTAN TODOS LOS INTENTOS FALLIDOS""""""""""""""""


const popup = document.getElementById("popup");
const close = document.getElementById("close");
popup.style.display = "none";
function showPopup(button) {
  const elemento = button.getElementsByClassName("nombre")[0].innerHTML;
  const linkWiki = "https://es.wikipedia.org/wiki/";
  const wikiBrowser = linkWiki + elemento;
  // debugger;
  document.getElementById("uwu").src = wikiBrowser;
  popup.style.display = "block";
}

function hidePopup() {
  popup.style.display = "none";
}

close.addEventListener("click", hidePopup);
