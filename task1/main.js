let button = document.querySelector(".btn")
let backgroundcolor = document.querySelector("body")
let tittle = document.querySelector(".title")

button.addEventListener("click",function(){
    backgroundcolor.style.backgroundColor="black"
    tittle.innerText="Changed Background Rakif Teacher"
    tittle.style.color="white"
})