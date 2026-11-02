

const btn=document.querySelector("button")

let clicked=document.getElementById("clicked_Times")
let run=document.getElementById("funcRun_Times")

let clickedTimes=0
let runTimes=0




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
  runTimes++
  run.innerHTML=runTimes
  
},1000)


btn.addEventListener("click",()=>{
  clickedTimes++
  
  clicked.innerHTML=clickedTimes
  throttleFunc()



})
























// import React, { useEffect, useState } from 'react'

// const Practice = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//    const id=setInterval(() => {
//       setCount(prev=>prev+1);
//     }, 1000);

//     return ()=>clearInterval(id)

//   }, []);

//   return <div>count at:{count}
  
//   </div>;
// }

// export default Practice
