var typed = new Typed(".input", {
  strings: ["Walaa Elgaili ", "Front End Developer", "from Sudan"],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
});

let tablinks = document.querySelectorAll(".tabs p");
let tabcontents = document.querySelectorAll(".tabcontent");
let tablinkArray = Array.from(tablinks);
let tabcontentArray = Array.from(tabcontents);
tablinkArray.forEach((e) => {
  e.addEventListener("click", function (event) {
    tablinkArray.forEach((eLe) => {
      eLe.classList.remove("active-link");
    });
    event.currentTarget.classList.add("active-link");
    tabcontentArray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(event.currentTarget.dataset.cont).style.display =
      "block";
  });
});

let menu = document.getElementById("menu");
let close = document.getElementById("close");
let open = document.getElementById("open");
// close.onclick = function () {
//   console.log("jjjjj");
// };
open.onclick = function () {
  menu.style.right = "0";
};
close.onclick = function () {
  menu.style.right = "-200px";
};
let about = document.getElementById("about");
about.onclick = function () {
  href = "#about-me";
};
