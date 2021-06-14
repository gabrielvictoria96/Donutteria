let show = true;

const menuSection = document.querySelector('.menu_section')
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector(".nav_ul")

hamburger.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"
    

    menuSection.classList.toggle("on", show)

    show = !show;

});

nav.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.remove("on", show);
});