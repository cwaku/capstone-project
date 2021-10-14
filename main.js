const hamburger = document.getElementById('hamburger-icon');
const open = document.querySelector('.open');


document.addEventListener("DOMContentLoaded", () => {

  

  open.addEventListener('click', () => {
    open.classList.toggle('oppenned')
  })

});


