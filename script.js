
const hamberger = document.querySelector(".hamberger");
const navMenu = document.querySelector(".nav_menu");
const close_btn=document.querySelector(".close_btn");

hamberger.addEventListener("click",() => {
    close_btn.classList.toggle('active')
    hamberger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

close_btn.addEventListener("click",() => {
    hamberger.classList.remove("active");
    close_btn.classList.remove("active");
    navMenu.classList.remove("active");
})



document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
    hamberger.classList.remove("active");
    close_btn.classList.remove("active");
    navMenu.classList.remove("active");
}))