

console.log("hello")


const button=document.querySelector("button")
const clicked=document.getElementById("clicked_Times")
const run=document.getElementById("funcRun_Times")


let clickedTimes=0
let runTimes=0

clicked.innerText=clickedTimes
run.innerText=runTimes

button.addEventListener("click",()=>{
    clickedTimes++
    clicked.innerText=clickedTimes
    runTimes++
    run.innerText=runTimes
})