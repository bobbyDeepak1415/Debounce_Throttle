

const input=document.querySelector("input")
const typed=document.querySelector("#typed_Times")
const run=document.getElementById("funcRun_Times")


let typedTimes=0
let runTimes=0


typed.innerText=typedTimes
run.innerText=runTimes

input.addEventListener("input",()=>{
    typedTimes++
runTimes++
typed.innerText=typedTimes
run.innerText=runTimes

})