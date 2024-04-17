window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

window.addEventListener("scroll", function () {
    var header = document.querySelector("headerenclosure");
    headerenclosure.classList.toggle("sticky", window.scrollY > 0)
})


var rellax = new Rellax('.rellax')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

        }
        else {
            entry.target.classList.remove('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));


// if keys b, r, u, h are pressed in order, then a window should be displayed that asks if the person wants to set the opacity of the website to 0
// if the person presses y, then the opacity of the website should be set to 0

let keys = [];
window.addEventListener('keyup', (e) => {
    keys.push(e.key);
    if (keys.length > 4) {
        keys.shift();
    }
    if (keys.join('').includes('bruh')) {
        let response = window.confirm('Do you want to set the opacity of the website to 0?');
        if (response) {
            document.body.style.opacity = 0;
        }
    }
});

// if the user presses the 'a' key, then the website should be displayed in a different language

