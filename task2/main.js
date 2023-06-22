let counterBtn = document.querySelector(".btn")
let counter = document.querySelector(".counter")
let number = 0


counterBtn.addEventListener("click", function(){
    number++
    console.log(number)
    counter.innerHTML=number
})