const btn = document.querySelector(".share1");
const btn2 = document.querySelector(".share2");
const arrow = document.querySelector(".arrow-down");

const before_toggle = document.querySelector(".profile-section");
const after_toggle = document.querySelector(".share-links");

btn.addEventListener("click",function(){
    before_toggle.classList.remove("active");
    after_toggle.classList.add("active");
    arrow.classList.add("show");
})

btn2.addEventListener("click",function(){
    before_toggle.classList.add("active");
    after_toggle.classList.remove("active");
    arrow.classList.remove("show");
})
