document.querySelector("#nav-home").addEventListener("click", function () {
  document.querySelector("#home").setAttribute("style", "display: flex");
  document.querySelector("#belajar").setAttribute("style", "display: none");
  document.querySelector("#game").setAttribute("style", "display: none");
  document.querySelector("#contact").setAttribute("style", "display: none");
  document.querySelector("#login").setAttribute("style", "display: none");
});

document.querySelector("#nav-bljr").addEventListener("click", function () {
  document.querySelector("#home").setAttribute("style", "display: none");
  document.querySelector("#belajar").setAttribute("style", "display: flex");
  document.querySelector("#game").setAttribute("style", "display: none");
  document.querySelector("#contact").setAttribute("style", "display: none");
  document.querySelector("#login").setAttribute("style", "display: none");
});

document.querySelector("#nav-game").addEventListener("click", function () {
  document.querySelector("#home").setAttribute("style", "display: none");
  document.querySelector("#belajar").setAttribute("style", "display: none");
  document.querySelector("#game").setAttribute("style", "display: flex");
  document.querySelector("#contact").setAttribute("style", "display: none");
  document.querySelector("#login").setAttribute("style", "display: none");
});

document.querySelector("#nav-kontak").addEventListener("click", function () {
  document.querySelector("#home").setAttribute("style", "display: none");
  document.querySelector("#belajar").setAttribute("style", "display: none");
  document.querySelector("#game").setAttribute("style", "display: none");
  document.querySelector("#contact").setAttribute("style", "display: flex");
  document.querySelector("#login").setAttribute("style", "display: none");
});

document.querySelector("#nav-login").addEventListener("click", function () {
  document.querySelector("#home").setAttribute("style", "display: none");
  document.querySelector("#belajar").setAttribute("style", "display: none");
  document.querySelector("#game").setAttribute("style", "display: none");
  document.querySelector("#contact").setAttribute("style", "display: none");
  document.querySelector("#login").setAttribute("style", "display: flex");
});
