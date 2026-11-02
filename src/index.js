

const input=document.querySelector("input")

const typed=document.getElementById("typed_Times")
const run=document.getElementById("funcRun_Times")


let typedCount=0
let runCount=0


typed.innerHTML=typedCount
run.innerHTML=runCount


const myDebounce=(func,delay)=>{
let timer=0

return function(...args){
clearTimeout(timer)
timer=setTimeout(()=>{
func(...args)
},delay)
}


}

const debounceFunc=myDebounce(()=>{
    runCount++
    run.innerHTML=runCount

},1000)


input.addEventListener("input",()=>{
    
    typedCount++
    typed.innerHTML=typedCount

debounceFunc()

})