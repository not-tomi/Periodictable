// """""""""""""""""""""""""sidebar toggle"""""""""""""""""""""""""""""""""
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});

// """""""""""""""""""""""""""""""""popup""""""""""""""""""""""""
// const openPopupButton =
//  document.querySelector("#open-popup");
//     const closePopupButton =
// document.querySelector("#close-popup");
//     const popup =
// document.querySelector("#popup");

//     openPopupButton.addEventListener("click", () => {
//       popup.style.display = "flex";
//     });

//     closePopupButton.addEventListener("click", () => {
//       popup.style.display = "none";
//     });

// const miTabla = document.getElementById('tabla');
// miTabla.addEventListener('click', showPopup());













