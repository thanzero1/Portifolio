const menuHamburguer = document.getElementById("menuHamburguer");
const closeIcon = document.querySelector("#closeIcon");
const menuFlutuante = document.querySelector("#menuFlutuante");

menuHamburguer.addEventListener("click", Aparecer);
closeIcon.addEventListener("click", Desaparecer);

function Aparecer() {
  if (menuFlutuante.style.display === "none") {
    menuFlutuante.style.display = "block";
    menuFlutuante.style.left = 0;
    menuFlutuante.style.transition = "ease-in 0.5s";
  } else {
    menuFlutuante.style.display = "none";
  }
}

function Desaparecer() {
  if (menuFlutuante.style.display === "block") {
    menuFlutuante.style.display = "none";
    menuFlutuante.style.left = "1000px";
    menuFlutuante.style.transition = "ease-in 0.5s";
  } else {
    menuFlutuante.style.display = "block";
  }
}

let typed = new Typed("#writeText", {
  strings: ["Software Developer", "Web Developer", "IOT Developer"],
  typeSpeed: 100,
  loop: true,
});
