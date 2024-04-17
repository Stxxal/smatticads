window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

window.addEventListener("scroll", function () {
    var header = document.querySelector("headerenclosure");
    headerenclosure.classList.toggle("sticky", window.scrollY > 0)
})

// document.querySelector("span").onmouseover = event => {
//     event.target.innerTEXT = event.target.innerTEXT.split("")
//         .map(letter => letters[Math.floor(Math.random() * 26)])
//         .join("");
// }

var rellax = new Rellax('.rellax'); 