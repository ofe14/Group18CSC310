let answerboard = document.getElementById("answer")
let clearbutton = document.getElementById("clear")
let equalto = document.getElementById("equal")
let opbutton =Array.from(document.getElementsByClassName("button"))
let numbers = Array.from(document.getElementsByClassName("nbutton"))
 numbers.forEach(nbutton => nbutton.addEventListener("click",buttonclicked))
 function buttonclicked(e)
 {
    let test = e.target.innerText
    answerboard.innerText += test
 }
 clearbutton.addEventListener("click",clr)
 function clr(e)
 {
    answerboard.innerText = " "
 }
 opbutton.forEach(button => button.addEventListener("click",op))
 function op(e)
 {
    let num = e.target.innerText
    answerboard.innerText += num
 }
 equalto.addEventListener("click",equal)

 function equal(e)
 {
    let myanswer = eval(answerboard.innerText)
    answerboard.innerText = myanswer
 }

 


