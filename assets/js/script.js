const headerMain = document.getElementById("header");

console.log(headerMain);

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    headerMain.style.top = "0";
    console.log('pipi');
  } else {
    headerMain.style.top = "-100px";
    console.log('caca');
  }
  prevScrollpos = currentScrollPos;
}