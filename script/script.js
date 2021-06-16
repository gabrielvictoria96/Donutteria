let show = true;

const container = document.querySelector(".container")
const menuSection = document.querySelector('.menu_section')
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector("#nav_ul")


hamburger.addEventListener("click", () => {

    container.style.height = show ? "100vh" : "100%"

    menuSection.classList.toggle("on", show);

    show = !show;

});

navLink.addEventListener("click", () => {

    menuSection.classList.remove("on", show);
    
    document.body.style.overflow = "initial"
});