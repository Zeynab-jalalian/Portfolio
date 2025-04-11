const navToggler=document.querySelector(".nav-toggler");
const sidebar=document.querySelector(".aside");
const navItems=document.querySelectorAll(".nav li");
navToggler.addEventListener("click",function(){
    sidebar.classList.toggle("open");
    document.querySelector(".nav-toggler i").classList.toggle("fa-times");
})
navItems.forEach(link=>{
    link.addEventListener("click",function(){
        sidebar.classList.remove("open");
        document.querySelector(".nav-toggler i").classList.toggle("fa-times");
    })
})