

const button=document.querySelector("button")

const clicked=document.getElementById("clicked_Times")
const run=document.getElementById("funcRun_Times")


let typedCount=0
let runCount=0

clicked.innerHTML=typedCount
    run.innerHTML=runCount


    const myThrottle=(func,delay)=>{
let lastRun=0


return function(...args){
let timeNow=Date.now()

if(timeNow-lastRun>=delay){
 lastRun=timeNow
 func(...args)   
}


}


    }

    const throttleFunc=myThrottle(()=>{
        runCount++
        run.innerHTML=runCount

    },15000)


button.addEventListener("click",()=>{
    typedCount++
    clicked.innerHTML=typedCount
throttleFunc()

})