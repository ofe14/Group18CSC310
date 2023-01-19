// This the javascript source code for the calculator which satisfies the arithmetic calculation part of the project
// in this section buttons,conatainer e.t.c are called from the html file by their id or classname so as to assign an event to them to make them interactive.
// the addeventlistener function is use to detect interactions from the user, in this case the event is ,the user clicking a button on the calculator and then assign an instruction to be carried out as soon as the event occurs
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

 


