

const button=document.querySelector("button")

const clicked=document.getElementById("clicked_Times")
const run=document.getElementById("funcRun_Times")


let clickedCount=0
let runCount=0

clicked.innerHTML=clickedCount
    run.innerHTML=runCount


    const myThrottle=(func,delay)=>{
let lastRun=0


return function(...args){
let timeNow=Date.now()

if(timeNow-lastRun>delay){
 lastRun=timeNow
 func(...args)   
}


}


    }

    const throttleFunc=myThrottle(()=>{
        runCount++
        run.innerHTML=runCount

    },1000)


button.addEventListener("click",()=>{
    clickedCount++
    clicked.innerHTML=clickedCount
throttleFunc()

})