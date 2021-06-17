let show = true;

const container = document.querySelector(".container")
const menuSection = document.querySelector('.menu_section')
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector("#nav_ul")
const coffee = document.getElementById("coffee")
const donuts = document.getElementById("donuts")
const menuItemDonut = document.querySelector(".menu_items.donut")
const menuItemCoffee = document.querySelector(".menu_items.coffee")


hamburger.addEventListener("click", () => {

    container.style.height = show ? "100vh" : "100%"

    menuSection.classList.toggle("on", show);

    show = !show;

});

navLink.addEventListener("click", () => {

    menuSection.classList.remove("on", show);
    
    document.body.style.overflow = "initial"
});

donuts.addEventListener("click", () => {

    menuItemDonut.classList.add("active");
    menuItemCoffee.classList.remove("active");
    donuts.classList.add("active");
    coffee.classList.remove("active");
});

coffee.addEventListener("click", () =>{

    menuItemDonut.classList.remove("active");
    menuItemCoffee.classList.add("active");
    donuts.classList.remove("active");
    coffee.classList.add("active");
})
