const hamburger = document.getElementById('hamburger-icon');


document.addEventListener("DOMContentLoaded", () => {

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    document.getElementById('navbar_main').style.display = 'none';
  });

}); 