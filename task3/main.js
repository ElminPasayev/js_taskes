let image = document.querySelector(".jsImage")
let SrcButton = document.querySelector(".btn")
let srcTittle = document.querySelector(".title")

SrcButton.addEventListener("click", ()=>{
    image.setAttribute("src","images/reactJS_logo.jpeg")
    srcTittle.innerText="Changed Src Rakif M"
})