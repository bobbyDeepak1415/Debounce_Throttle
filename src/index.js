

console.log("hello")


const input=document.querySelector("input")
const typed=document.getElementById("typed_Times")
const run=document.getElementById("funcRun_Times")


let typedTimes=0
let runTimes=0

typed.innerText=typedTimes
run.innerText=runTimes

const myDebounce=(func,delay)=>{
let timer=0

return function(...args){
clearInterval(timer)
timer=setInterval(()=>{
func(...args)
},delay)
}

}



const debounceFunc=myDebounce(()=>{
    runTimes++
    run.innerText=runTimes
    
},800)

input.addEventListener("input",()=>{
    typedTimes++
    typed.innerText=typedTimes
    debounceFunc()
})