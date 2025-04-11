const navToggler=document.querySelector(".nav-toggler");
const sidebar=document.querySelector(".aside");
navToggler.addEventListener("click",function(){
    sidebar.classList.toggle("open");
    document.querySelector(".nav-toggler i").classList.toggle("fa-times");
})