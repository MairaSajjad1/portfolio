
document.addEventListener('scroll', function (e) {
    let x = window.scrollY;
    console.log(x);
    if (x === 0) {
        document.getElementsByClassName("scroll-up-btn")[0].style.display = "none";
    }
    else {
        document.getElementsByClassName("scroll-up-btn")[0].style.display = "block";

    }
});
// typing animation script
var typed = new Typed(".typing", {
    strings: ["Web-Developer", "Blogger", "Programer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,

    loop: true
});